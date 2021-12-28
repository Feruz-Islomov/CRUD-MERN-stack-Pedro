import React, { useEffect, useRef, useState } from "react";
import PlayerControls from "./PlayerControls";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setplaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };
  return (
    <div>
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
      ></audio>
      <h4>Playing now</h4>
      {/* <PlayerDetails song={props.songs[props.currentSongIndex]} /> */}
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setplaying}
        SkipSong={SkipSong}
      />
      <p>Next up: {props.songs[props.nextSongIndex].title}</p>
    </div>
  );
}
export default Player;
