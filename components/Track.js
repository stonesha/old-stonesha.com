import Image from 'next/image';

export default function Track(track) {
    return (
      <div className="flex flex-row max-w-3xl w-full mt-8">
        <img src={track.albumImageUrl} alt={track.title} className="w-32 h-32 object-cover rounded-2xl"></img>
        <div className="flex flex-col pl-3 border-b border-gray-100 dark:border-gray-800">
            <a
              className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-48"
              href={track.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {track.title}
            </a>
          <p
            className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-48"
            color="gray.500"
          >
            {track.artist}
          </p>
        </div>
      </div>
    );
  }