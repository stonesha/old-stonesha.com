import Container from "@/components/Container";
import { getFollowedMangas } from "@/lib/manganato";
import MangaCard from "@/components/MangaCard";

export async function getStaticProps() {
    const mangaList = getFollowedMangas();

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
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Manga I Like & Follow
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    These are a collection of A collection of manga that I actively read and keep up on.
                    This page is mainly for personal use as I coded an API to help me keep track of the
                    works I love. Feel free to stay and browse.
                </p>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 my-2 w-full mt-4">
                    {mangaList.map((mangaTag, index) => <MangaCard key={index} tag={mangaTag} />)}
                </div>
            </div>
        </Container>
    );
}