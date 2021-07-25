import Container from "@/components/Container";
import CatPics from "@/components/CatPics";

export default function Cats() {

    return (
        <Container
            title="Cats (Image Scroller) - Stone Sha"
            description="An image scroller that auto populates with cat images."
        >
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-normal text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Cats (Image Scroller)
                </h1>
                <p className="prose text-gray-600 dark:text-gray-400 mb-4">
                    An image scroller that auto populates with cat images. This page leverages useSWRInfinite() to get
                    the images from <a href={"https://thecatapi.com/"} target="_blank" rel="noopener noreferrer">The Cat API.</a> I've
                    set a hard limit to 333 cat pic requests a day to avoid going over my free API requests limit. Feel free to refresh the page
                    to keep scrolling for cat pics however.
                </p>
                <div className="my-2 container flex flex-wrap mx-auto">
                    <CatPics />
                </div>
            </div>
        </Container>
    );
}