import { useRef, useState, useEffect } from "react";

import {
  FaPlay,
  FaPause,
  FaVolumeUp
} from "react-icons/fa";

import song from "../../assets/music/Our-Song.mp3";

function Player() {

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {

    const audio = audioRef.current;

    const update = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", update);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", update);
    };

  }, []);

  function togglePlay() {

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);

  }

  function handleSeek(e) {

    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);

  }

  function handleVolume(e) {

    audioRef.current.volume = e.target.value;
    setVolume(e.target.value);

  }

  function formatTime(time) {

    if (!time) return "0:00";

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;

  }

  return (

    <div className="mx-auto max-w-sm rounded-3xl bg-white/10 p-6 backdrop-blur-xl shadow-xl">

      <audio ref={audioRef} src={song} />

      <h3 className="text-center text-2xl font-semibold text-white">
        🎵 Our Song
      </h3>

      <p className="mt-1 text-center text-white/60">
        Every time I hear this, I think of you ❤️
      </p>

      <button
        onClick={togglePlay}
        className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-2xl text-white transition hover:scale-105"
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>

      <div className="mt-8">

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full accent-pink-500"
        />

        <div className="mt-2 flex justify-between text-sm text-white">

          <span>{formatTime(currentTime)}</span>

          <span>{formatTime(duration)}</span>

        </div>

      </div>

      <div className="mt-6 flex items-center gap-3">

        <FaVolumeUp className="text-white" />

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
          className="w-full accent-pink-500"
        />

      </div>

    </div>

  );

}

export default Player;