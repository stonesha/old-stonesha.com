import querystring from 'querystring';

const cat_api_key = process.env.CAT_API_KEY;

const GET_CAT_IMAGES_ENDPOINT = `https://api.thecatapi.com/v1/images/search`;

export const getCatImages = async ({ options }) => {

    const response = await fetch(
        GET_CAT_IMAGES_ENDPOINT + "?" + querystring.stringify(options),
        {
            method: 'GET',
            headers: {
                'x-api-key': cat_api_key
            }
        }
    );

    return response.json();
};