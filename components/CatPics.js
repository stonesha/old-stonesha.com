import { useSWRInfinite } from 'swr';
import Image from 'next/image';
import InfiniteScroll from 'react-swr-infinite-scroll';

import fetcher from '@/lib/fetcher';

// set a hard limit to avoid making too many API requests
const PAGE_SIZE = 5;

export default function CatPics() {

    const swr = useSWRInfinite((index) => `api/get-cat-pics/${index + 1}`, fetcher)

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
                <div className="w-full p-2 lg:w-1/3" key={cat.id}>
                    <Image
                        alt={`cat-pic-${cat.id}`}
                        height={cat.height}
                        width={cat.width}
                        src={cat.url}
                        className="rounded"
                    />
                </div>
            ))}
    </InfiniteScroll>
}