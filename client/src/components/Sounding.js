import React, { Component } from "react";
import { Howl, Howler } from "howler";
import music from "../sounds/chring.mp3";
import music1 from "../sounds/iphoneding.mp3";
import music2 from "../sounds/ting.mp3";

const audioClips = [
  { sound: music, label: "chring" },
  { sound: music1, label: "iphoneding" },
  { sound: music2, label: "ting" },
];
export default class SoundClass extends Component {
  soundPlay = (src) => {
    const sound = new Howl({
      src,
      //   html5: true,
    });
    sound.play();
  };

  RenderButtonSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      );
    });
  };

  render() {
    // Howler.volume(1.0);
    return <div>{this.RenderButtonSound()}</div>;
  }
}
