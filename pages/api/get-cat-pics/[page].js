import { getCatImages, getSubredditCatImages } from '@/lib/cat_api';

export default async function handler({ query: { page } }, res) {

    const options = {
        order: "RANDOM",
        size: "thumb",
        page: page,
        limit: 25,
    };


    const cat_api_response = await getCatImages({ options });
    const subreddit_response = await getSubredditCatImages();
    // combine both image responses and shuffle in an array
    const all_cat_images = [...subreddit_response, ...cat_api_response].sort(() => 0.5 - Math.random());

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return res.status(200).json(all_cat_images);
};