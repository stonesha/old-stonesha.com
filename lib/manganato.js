import { parse } from 'node-html-parser';
import fs from 'fs';
import path from 'path';

const root = process.cwd();

export const getMangaInfo = async (tag) => {

    const url = ("https://readmanganato.com/manga-" + tag).trim();

    const parsed_response = await fetch(url, {
        method: 'GET',
    }).then(response => response.text()).then((data) => { return parse(data) })

    //get the image url, info image is usually a span with only one img src inside it
    const img_url = parsed_response.querySelector(".info-image").querySelector(".img-loading").getAttribute("src");

    // retrive first element after div and get text, aka Manga Title
    const title = parsed_response.querySelector(".story-info-right").removeWhitespace().childNodes[0].structuredText;

    const description_tag = parsed_response.querySelector(".panel-story-info-description").removeWhitespace().childNodes[1].rawTagName;

    let description;
    if (description_tag === "span")
        description = parsed_response.querySelector(".panel-story-info-description").removeWhitespace().childNodes[1].childNodes[0]._trimmedText;
    else
        description = parsed_response.querySelector(".panel-story-info-description").removeWhitespace().childNodes[1]._trimmedText;

    if (description == undefined)
        description = "Couldn't fetch description.";


    const table = parsed_response.querySelector(".variations-tableInfo").childNodes[0];

    let author, status, genres;

    for (let row of table.childNodes) {
        const label = row.querySelector(".table-label").structuredText;
        const value = row.querySelector(".table-value").structuredText.replace(/ - /g, ", ");

        switch (label) {
            case 'Author(s) :':
                author = value;
                break;

            case 'Status :':
                status = value;
                break;

            case 'Genres :':
                genres = value.split(",").map(genre => genre.trim());
                break;

            default:
                break;
        }
    }

    const updated = new Date(parsed_response.querySelector(".stre-value").structuredText.replace(" - ", " ").replace(",", " ").slice(0, -9));

    const latest_chapter = parsed_response.querySelector(".chapter-name").structuredText;

    return {
        "img_url": img_url,
        "title": title,
        "description": description,
        "author": author,
        "status": status,
        "genres": genres,
        "updated": updated.toISOString().split('T')[0],
        "latest_chapter": latest_chapter,
        "url": url
    };
};

export const getFollowedMangas = async () => {
    const mangas = fs.readFileSync(path.join(root, 'data', 'mangas.txt'), 'utf-8').split('\n').filter(Boolean);

    const mangaList = await Promise.all(mangas.map(async (manga) => { return await getMangaInfo(manga.replace(/\r?\n|\r/, "")) }))
        .then((mangaList) => mangaList.sort((a, b) => b.updated.localeCompare(a.updated)));

    return mangaList;
}