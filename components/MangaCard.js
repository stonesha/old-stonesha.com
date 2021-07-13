import useSWR from 'swr';
import parse from "html-react-parser";
import { FaUserCircle } from "react-icons/fa";

import fetcher from '@/lib/fetcher';

export default function MangaCard({ tag }) {

    const { data: manga } = useSWR(`/api/get-manga-info/${tag}`, fetcher);

    if (!manga)
        return null;

    return (
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img src={manga.img_url} alt={manga.title} />
            </div>
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 dark:border-gray-900
             rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <div class="text-gray-900 dark:text-gray-100 font-bold text-xl mb-2">{manga.title}</div>
                    <p class="text-gray-700 dark:text-gray-400 text-base">{parse(manga.description)}</p>
                </div>
                <div class="flex items-center">
                    <div class="text-sm">
                        <p class="text-gray-700 dark:text-gray-400 leading-none flex">
                            <FaUserCircle className="w-3.5 h-3.5" />
                            &nbsp;
                            {manga.author}
                        </p>
                        <p class="text-gray-700 dark:text-gray-400">Last Updated: {manga.updated}</p>
                        <p class="text-gray-700 dark:text-gray-400">Latest Chapter: {manga.latest_chapter}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}