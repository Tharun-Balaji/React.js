import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';

const SongCard = ({ song }) => {
  const attr = song.attributes.artwork;
  const url = attr.url.slice(0, attr.url.length - 14).concat(`\\${attr.width}x${attr.height}bb.jpg`);
  // console.log(url);

  // console.log(
	// song.attributes.artwork.url.slice(0, song.attributes.artwork.url.length - 14)
  // );
  const activeSong = 'Test';

  const handlePauseClick = () => {};
  const handlePlayClick = () => {};

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.attributes.albumName ? 'flex bg-black bg-opacity-70' : 'hidden'} `}>
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={url} alt="song_img" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.id}`}>
            {song.attributes.albumName}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.relationships.artists.data ? `/artists/${song.relationships.artists.data[0]?.id}` : '/top-artists'}>
            {song.attributes.artistName}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
