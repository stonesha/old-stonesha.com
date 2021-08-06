import { useSWRInfinite } from 'swr';
import InfiniteScroll from 'react-swr-infinite-scroll';

import fetcher from '@/lib/fetcher';

export default function CatPics() {

    const swr = useSWRInfinite((index) => `api/get-cat-pics/${index + 1}`, fetcher)

    if (!swr.data)
        return null;

    return <InfiniteScroll
        swr={swr}
        loadingIndicator='Loading cat pics~'
        endingIndicator="No more cat pics :("
    >
        {(response) =>
            response?.map((cat_image_url, index) => (
                <div className="w-full p-2 lg:w-1/3" key={index}>
                    <img
                        alt={`cat-pic-${index}`}
                        src={cat_image_url}
                        className="rounded"
                    />
                </div>
            ))}
    </InfiniteScroll>
}