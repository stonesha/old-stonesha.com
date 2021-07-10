import { getMangaInfo, getFollowedMangas } from "@/lib/manganato";

export default async function handler (_, res){

    const mangasList = getFollowedMangas();

    const mangas = await Promise.all(mangasList.map(async (tag) => {
        const mangaInfo = await getMangaInfo(tag);
        return mangaInfo;
    }));

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=30'
    );

    return res.status(200).json({ mangas });
};