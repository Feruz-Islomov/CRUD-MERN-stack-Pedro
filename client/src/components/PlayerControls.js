import React from "react";

function PlayerControls(props) {
  return (
    <div>
      <button onClick={() => props.SkipSong(false)}>prev</button>
      <button onClick={() => props.setIsPlaying(!props.isPlaying)}>
        play/pause
      </button>
      <button onClick={() => props.SkipSong()}>next</button>
    </div>
  );
}

export default PlayerControls;
