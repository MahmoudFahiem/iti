export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.playbackMethods = {
      play: this.playMode.bind(this),
      repeat: this.repeatMode.bind(this),
      shuffle: this.shuffleMode.bind(this),
    };
  }

  getAllTracks() {
    return this.model.getAllTracks();
  }

  getCurrentTrack() {
    return this.model.getCurrentTrack();
  }

  getAudioDuration() {
    return this.model.getAudioDuration();
  }

  setAudioDuration(audioDuration) {
    this.model.setAudioDuration(audioDuration);
  }

  getPlaybackMode() {
    return this.model.getPlaybackMode();
  }

  setPlaybackMode(playbackmode) {
    this.model.setPlaybackMode(playbackmode);
  }

  getTrackById(id) {
    return this.model.getTrackById(id);
  }

  getNextTrack() {}

  getLastTrack() {}

  getCurrentTrackIndx() {
    const allTracks = this.model.getAllTracks();
    const currentTrack = this.model.getCurrentTrack();
    for (let indx = 0; indx < allTracks.length; indx++) {
      if (currentTrack.id === allTracks[indx].id) return indx;
    }
    return null;
  }

  playMode() {
    const allTracks = this.model.getAllTracks();
    const currentTrackIndx = this.getCurrentTrackIndx();
    const nextTrackId = allTracks[currentTrackIndx + 1]?.id;

    if (!nextTrackId) return;

    this.changeTrack(nextTrackId);
  }

  repeatMode() {
    this.view.playAudio();
  }

  shuffleMode() {
    const currentTrackId = this.model.getCurrentTrack().id;
    const tracksInQueue = this.model
      .getAllTracks()
      .filter((track) => currentTrackId !== track.id);
    const randomTrack =
      tracksInQueue[Math.floor(Math.random() * tracksInQueue.length)];
    this.changeTrack(randomTrack.id);
  }

  changeTrack(trackId) {
    this.model.setCurrentTrackId(trackId);
    this.view.updateTracksActiveState(trackId);
    this.view.updateAudioPlayer();
  }

  /** View Handlers */

  trackClickHandler(trackBtn) {
    this.changeTrack(trackBtn.getAttribute("data-track-id"));
  }

  deleteTrackHandler(e) {
    const deletedTrackId = parseInt(
      e.currentTarget.parentElement
        .querySelector("[data-track-id]")
        .getAttribute("data-track-id")
    );

    const allTracks = this.model.getAllTracks();
    const currentTrack = this.model.getCurrentTrack();

    if (deletedTrackId === currentTrack.id) {
      this.playbackMethods["play"]();
      // this.view.updateAudioPlayer();
      // this.view.updateAudioPlayerSrc("");
    }

    const updatedTracks = allTracks.filter(
      (track) => deletedTrackId !== track.id
    );

    this.model.setAllTracks(updatedTracks);

    this.view.updateTracksList();
  }

  audioDurationChangeHandler() {
    this.setAudioDuration(this.view.els.audioPlayer.duration);
    this.view.updateTimelineMax();
  }

  audioTimeUpdateHandler() {
    this.view.updateTimelineVal();
  }

  audioEndedHandler() {
    const playbackMode = this.model.getPlaybackMode();
    this.playbackMethods[playbackMode]();
  }

  timelineInHandler() {
    this.view.updateAudioTimeline();
  }

  playbackClickHandler(playbackMode) {
    this.model.setPlaybackMode(playbackMode);
    this.view.updatePlaybackActiveState();
  }

  addTrackHandler(e) {
    const allTracks = this.model.getAllTracks();
    const nextTrackId = allTracks[allTracks.length - 1]?.id + 1 || 0;
    const trackName = e.currentTarget.files[0].name;
    const track = {
      id: nextTrackId,
      title: `${trackName.substring(0, trackName.lastIndexOf("."))}`,
      path: `audio/${trackName}`,
    };

    const updatedTracks = [...allTracks, track];

    this.model.setAllTracks(updatedTracks);
    this.view.updateTracksList();
  }
}
