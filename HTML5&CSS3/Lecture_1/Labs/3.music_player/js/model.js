export default class Model {
  constructor(data, playbackMode) {
    this.data = data;
    this.playbackMode = playbackMode;
    this.audioDuration;
  }

  getAllTracks() {
    return this.data.getAllTracks();
  }

  setAllTracks(tracks) {
    this.data.setAllTracks(tracks);
  }

  getTrackById(id) {
    return this.data.getTrackById(id);
  }

  getCurrentTrack() {
    return this.data.getCurrentTrack();
  }

  getPlaybackMode() {
    return this.playbackMode;
  }

  setPlaybackMode(playbackMode) {
    this.playbackMode = playbackMode;
  }

  getAudioDuration() {
    return this.audioDuration;
  }

  setAudioDuration(audioDuration) {
    this.audioDuration = audioDuration;
  }

  setCurrentTrackId(trackId) {
    this.data.setCurrentTrackId(trackId);
  }
}
