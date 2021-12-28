import React from "react";
import { Howl } from "howler";
import music from "../sounds/chring.mp3";
import music1 from "../sounds/iphoneding.mp3";
import music2 from "../sounds/ting.mp3";

const audioClips = [
  { sound: music, label: "chring" },
  { sound: music1, label: "iphoneding" },
  { sound: music2, label: "ting" },
];
// Howler.volume(1.0);
const Soundingf = () => {
  const soundPlay = (src) => {
    const sound = new Howl({
      src,
      //   html5: true,
    });
    sound.play();
  };

  const RenderButtonSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button key={index} onClick={() => soundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      );
    });
  };
  return <div>{RenderButtonSound()}</div>;
};

export default Soundingf;
