import { getFollowedMangas } from "@/lib/manganato";

export default async function handler(_, res) {

    const mangaList = await getFollowedMangas();

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=30'
    );

    return res.status(200).json(mangaList);
};