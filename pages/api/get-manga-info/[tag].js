import { getMangaInfo } from '@/lib/manganato';

export default async function handler({ query: { tag } }, res) {

    const response = await getMangaInfo(tag);

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=60, stale-while-revalidate=30'
    );

    return res.status(200).json(response);
};