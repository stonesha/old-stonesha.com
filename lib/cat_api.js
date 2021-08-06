import querystring from 'querystring';

const cat_api_key = process.env.CAT_API_KEY;

const GET_CAT_IMAGES_ENDPOINT = `https://api.thecatapi.com/v1/images/search`;

export const getCatImages = async ({ options }) => {

    // fetch images from the Cat API, if no response (AKA server is down or reached request limit)
    // then return an empty array
    const response = await fetch(
        GET_CAT_IMAGES_ENDPOINT + "?" + querystring.stringify(options),
        {
            method: 'GET',
            headers: {
                'x-api-key': cat_api_key
            }
        }
    ).then(data => {
        try {
            data.map(cat => cat.url);
        } catch (err) {
        } finally {
            return [];
        }
    });

    return response;
};

export const getSubredditCatImages = async () => {
    const cat_subreddits_response = (await (await fetch("https://reddit.com/r/Catsubs/wiki/index.json")).json()).data.content_md;
    const subreddits_regex = /\/r\/([^\s/]+)/g

    const cat_care_subreddits = ["/r/CatCare", "/r/CatCare", "/r/CatCare", "/r/CatCare"]
    const cat_subreddits = cat_subreddits_response.match(subreddits_regex).map(subreddit => {
        return subreddit.slice(3);
    });

    const random_cat_subreddit = cat_subreddits[Math.floor(Math.random() * cat_subreddits.length)]
    const random_cat_subreddit_response = (await (await fetch(`https://reddit.com/r/${random_cat_subreddit}.json`)).json())?.data?.children.map(child => {
        if ((child.data.domain == 'i.redd.it' || child.data.domain == 'i.imgur.com')
            && (child.data.over_18 == false))
            return child.data.url;

    }).filter(Boolean);

    return random_cat_subreddit_response ? random_cat_subreddit_response : [];
}