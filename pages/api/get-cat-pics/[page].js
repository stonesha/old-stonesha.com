import { getCatImages } from '@/lib/cat_api';

export default async function handler({ query: { page } }, res) {

    const options = {
        order: "RANDOM",
        size: "thumb",
        page: page,
        limit: 15,
    };


    const response = await getCatImages({ options });

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return res.status(200).json(response);
};