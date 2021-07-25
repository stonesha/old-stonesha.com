import { useSWRInfinite } from 'swr';

import fetcher from '@/lib/fetcher';
import InfiniteScroll from 'react-swr-infinite-scroll';

// set a hard limit to avoid making too many API requests
const PAGE_SIZE = 5;

export default function CatPics() {

    const swr = useSWRInfinite((index, prev) => `api/get-cat-pics/${index + 1}`, fetcher)

    if (!swr.data)
        return null;


    return <InfiniteScroll
        swr={swr}
        loadingIndicator='Loading cat pics~'
        endingIndicator="No more cat pics :("
        isReachingEnd={(swr) =>
            swr.data?.[0]?.length === 0 || swr.data?.[swr.data?.length - 1]?.length < PAGE_SIZE
        }
    >
        {(response) =>
            response?.map(cat => (
                <div class="w-full p-2 rounded lg:w-1/3">
                    <img src={cat.url} key={cat.id} alt={`cat-pic-${cat.id}`} />
                </div>
            ))}
    </InfiniteScroll>
}

/*

    <div class="w-full p-2 rounded lg:w-1/3">
        <img src={cat.url} key={cat.id} alt={`cat-pic-${cat.id}`} />
    </div>
*/