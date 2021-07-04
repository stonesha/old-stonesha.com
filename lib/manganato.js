import { parse } from 'node-html-parser';

export const getMangaInfo = async (tag) => {

    const parsed_response = await fetch("https://readmanganato.com/manga-" + tag, {
        method: 'GET',
    }).then (response => response.text()).then((data) => {return parse(data)})

    //get the image url, info image is usually a span with only one img src inside it
    const img_url = parsed_response.querySelector(".info-image").querySelector(".img-loading").getAttribute("src");

    // retrive first element after div and get text, aka Manga Title
    const title = parsed_response.querySelector(".story-info-right").removeWhitespace().childNodes[0].structuredText;

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

    return {"img_url": img_url, "title": title, "author": author, "status": status, "genres": genres, "updated": updated, "latest_chapter": latest_chapter};
};