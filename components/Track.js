export default function Track(track) {
  return (
    <div className="flex flex-row max-w-3xl w-full mt-8">
      <a href={track.albumUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-32 h-32 relative">
          <img
            alt={track.title}
            src={track.albumImageUrl}
            sizes="100%"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </a>
      <div className="flex flex-col pl-3 border-b border-gray-100 dark:border-gray-800">
        <a
          className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-48"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        {track.artists.map((artist, key) =>
          <a
            className="text-gray-500 truncate w-60 sm:w-96 md:w-48"
            color="gray.500"
            href={artist.url}
            target="_blank"
            rel="noopener noreferrer"
            key={key.toString()}
          >
            {artist.name}
          </a>
        )}
      </div>
    </div>
  );
}