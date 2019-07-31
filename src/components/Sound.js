import React, { Component } from 'react';
import Sound from 'react-sound'
import soundfile from './sounds/Timer-Beep.mp3'
export default class Alert extends Component {
render() {
 return (
   <Sound
   url={soundfile}
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   />
  );
 }
}