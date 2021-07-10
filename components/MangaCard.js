import Image from 'next/image';

export default function MangaCard({
  title,
  description,
  author,
  img_url,
  status,
  genres,
  updated,
  latest_chapter,
  url,
  ...rest
}) {
    return (
        <a
            className="transition-height ease-in-out hover:-translate-y-1 hover:scale-105 border border-grey-200 dark:border-gray-900 rounded p-4 w-full" href={`${url}`} target="_blank" rel="noopener noreferrer"
            {...rest}
        >
            <Image
            alt={title}
            height={32}
            width={32}
            src={img_url}
            />
            <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
            {title}
            </h3>
            <p className="mt-1 text-gray-700 dark:text-gray-400">{description}</p>
        </a>
    );
}