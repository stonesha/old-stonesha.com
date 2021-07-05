import { parse } from 'node-html-parser';
import fs from 'fs';
import path from 'path';

const root = process.cwd();

export const getMangaInfo = async (tag) => {

    const parsed_response = await fetch("https://readmanganato.com/manga-" + tag, {
        method: 'GET',
    }).then (response => response.text()).then((data) => {return parse(data)})

    //get the image url, info image is usually a span with only one img src inside it
    const img_url = parsed_response.querySelector(".info-image").querySelector(".img-loading").getAttribute("src");

    // retrive first element after div and get text, aka Manga Title
    const title = parsed_response.querySelector(".story-info-right").removeWhitespace().childNodes[0].structuredText;

    const description = parsed_response.querySelector(".panel-story-info-description").removeWhitespace().childNodes[1]._trimmedText;

    const table = parsed_response.querySelector(".variations-tableInfo").childNodes[0];

    let author, status, genres;

    for(let row of table.childNodes)
    {
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
                genres = value;
                break;

            default:
                break;
        }
    }

    const updated = parsed_response.querySelector(".stre-value").structuredText;
    
    const latest_chapter = parsed_response.querySelector(".chapter-name").structuredText;

    return {
        "img_url": img_url, 
        "title": title, 
        "description": description, 
        "author": author, 
        "status": status, 
        "genres": genres, 
        "updated": updated, 
        "latest_chapter": latest_chapter
    };
};

export const getFollowedMangas = async () => {
    const mangas = fs.readFileSync(path.join(root, 'data', 'mangas.txt'), 'utf-8').split('\n');

    return mangas;
}