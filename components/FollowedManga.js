import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import MangaCard from '@/components/MangaCard';

export default function FollowedManga() {

    const { data }  = useSWR('/api/get-manga-info/followed-manga', fetcher);

    if (!data)
        return null;

    return data.mangas.map((manga, index) => {
        <MangaCard 
            key={index}
            title={manga.title}
            description={manga.description}
            author={manga.author}
            img_url={manga.img_url}
            status={manga.status}
            genres={manga.genres}
            updated={manga.updated}
            latest_chapter={manga.latest_chapter}
            url={manga.url}
        />
    });
}