import { getCatImages } from '@/lib/cat_api';

export default async function handler({ query: { page } }, res) {

    const options = {
        order: "RANDOM",
        size: "thumb",
        page: page,
        limit: 100,
    };


    const response = await getCatImages({ options });

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=400400, stale-while-revalidate=200200'
    );

    return res.status(200).json(response);
};