import { getMangaInfo } from '@/lib/manganato';

export default async function handler ({ query: { tag } }, res){

    const response = await getMangaInfo(tag);

    return res.status(200).json(response);
};