import Container from "@/components/Container";
import { getFollowedMangas } from "@/lib/manganato";
import MangaCard from "@/components/MangaCard";

export async function getStaticProps() {
    const mangaList = await getFollowedMangas();

    return {
        props: {
            mangaList,
        },
    }
}

export default function Manga({ mangaList }) {

    return (
        <Container
            title="Manga I Like & Follow - Stone Sha"
            description="A collection of manga that I actively read and keep up on."
        >
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-normal text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Manga I Like & Follow
                </h1>
                <p className="prose text-gray-600 dark:text-gray-400 mb-4">
                    This is a collection of manga that I actively read and keep up on.
                    This page is mainly for personal use and is dynamically populated by
                    a mini-API I created for the purpose of fetching information related to manga.
                    The code for the api is&nbsp;
                    <a href={"https://github.com/stonesha/stonesha.com/tree/master/pages/api/get-manga-info"}
                        target="_blank" rel="noopener noreferrer">here</a> and&nbsp;
                    <a href={"https://github.com/stonesha/stonesha.com/blob/master/lib/manganato.js"}
                        target="_blank" rel="noopener noreferrer">here</a>. Select a manga cover to view more
                    information about it.
                </p>
                <div className="grid justify-items-center gap-0.25 grid-cols-2 sm:grid-cols-4 my-2 mt-4 w-full">
                    {mangaList.map((manga, index) => <MangaCard key={index} manga={manga} />)}
                </div>
            </div>
        </Container>
    );
}