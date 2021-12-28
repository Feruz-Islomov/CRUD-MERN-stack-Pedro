import React, { useEffect, useState } from "react";
import Player from "./Player";

const SoundFunc = () => {
  const [songs] = useState([
    {
      title: "chringi",
      src: "../sounds/chring.mp3",
    },
    {
      title: "iphoneding",
      src: "../sounds/chring.mp3",
    },
    {
      title: "tingi",
      src: "../sounds/ting.mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        setNextSongIndex={setCurrentSongIndex}
        songs={songs}
        nextSongIndex={nextSongIndex}
      />
    </div>
  );
};

export default SoundFunc;
