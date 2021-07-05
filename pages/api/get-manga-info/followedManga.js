import { getMangaInfo, getFollowedMangas } from "@/lib/manganato";

export default async function handler (_, res){

    const mangas = await getFollowedMangas();

    const mangasInfo = await Promise.all(mangas.map(async (tag) => {
        const mangaInfo = await getMangaInfo(tag);
        return mangaInfo;
    }));

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return await res.status(200).json( await mangasInfo );
};