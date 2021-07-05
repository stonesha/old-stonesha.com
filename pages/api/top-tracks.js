import { getTopTracks } from '@/lib/spotify';

export default async function handler(_, res) {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    artists: track.artists.map((_artist) =>
      ({
        name: _artist.name,
        url: _artist.external_urls.spotify
      })),
    songUrl: track.external_urls.spotify,
    title: track.name,
    albumImageUrl: track.album.images[0].url,
    albumUrl: "https://open.spotify.com/album/" + track.album.id
  }));

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json({ tracks });
}