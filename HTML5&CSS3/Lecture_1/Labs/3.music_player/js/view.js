export default class View {
  constructor() {
    this.controller;
    this.audioPlayer;
    this.playlist;
    this.els = {};
  }

  playAudio() {
    this.els.playBtn.click();
  }

  pauseAudio() {
    this.els.pauseBtn.click();
  }

  createAudioPlayer() {
    const audioPlayer = document.createElement("audio");

    /** Set HTML content */
    audioPlayer.src = this.controller.getCurrentTrack().path || "";
    // audioPlayer.controls = true;

    /** Add ref to audio to view object */
    this.els.audioPlayer = audioPlayer;

    /** Set events */
    audioPlayer.addEventListener(
      "ended",
      this.controller.audioEndedHandler.bind(this.controller)
    );

    audioPlayer.addEventListener(
      "durationchange",
      this.controller.audioDurationChangeHandler.bind(this.controller)
    );

    audioPlayer.addEventListener(
      "timeupdate",
      this.controller.audioTimeUpdateHandler.bind(this.controller)
    );

    return audioPlayer;
  }

  setAudioSrc(src) {
    this.els.audioPlayer.src = src;
  }

  createPlayer() {
    const player = document.createElement("div");
    const playBtn = document.createElement("button");
    const pauseBtn = document.createElement("button");
    const timelineIn = document.createElement("input");

    /** Set HTML content */
    player.id = "player";
    playBtn.type = "button";
    pauseBtn.type = "button";
    pauseBtn.classList.add("hide");

    playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path
            d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
          />
        </svg>
      `;

    pauseBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"
          />
        </svg>
      `;

    timelineIn.type = "range";
    timelineIn.value = "0";

    /** Add ref to controls to view object */

    this.els.playBtn = playBtn;
    this.els.pauseBtn = pauseBtn;
    this.els.timelineIn = timelineIn;

    /** Set events */

    playBtn.addEventListener("click", () => {
      this.els.audioPlayer.play();
      playBtn.classList.add("hide");
      pauseBtn.classList.remove("hide");
    });

    pauseBtn.addEventListener("click", () => {
      this.els.audioPlayer.pause();
      playBtn.classList.remove("hide");
      pauseBtn.classList.add("hide");
    });
    timelineIn.addEventListener(
      "input",
      this.controller.timelineInHandler.bind(this.controller)
    );

    // Set change max
    // this.controller.audioDurationChangeHandler();

    player.append(playBtn, pauseBtn, timelineIn);

    return player;
  }

  createPlaybackControls() {
    const playbackControls = document.createElement("div");
    const playModeBtn = document.createElement("button");
    const repeatModeBtn = document.createElement("button");
    const shuffleModeBtn = document.createElement("button");
    const playbackMode = this.controller.getPlaybackMode();

    /** Setting html content */
    playbackControls.id = "playbackControls";
    playModeBtn.id = "play";
    playModeBtn.textContent = "play";
    repeatModeBtn.id = "repeat";
    repeatModeBtn.textContent = "repeat";
    shuffleModeBtn.id = "shuffle";
    shuffleModeBtn.textContent = "shuffle";

    switch (playbackMode) {
      case "play":
        playModeBtn.classList.add("active");
        repeatModeBtn.classList.remove("active");
        shuffleModeBtn.classList.remove("active");
        break;
      case "repeat":
        repeatModeBtn.classList.add("active");
        repeatModeBtn.classList.remove("active");
        shuffleModeBtn.classList.remove("active");
        break;
      case "shuffle":
        shuffleModeBtn.classList.add("active");
        repeatModeBtn.classList.remove("active");
        shuffleModeBtn.classList.remove("active");
        break;
      default:
        throw Error("This should be done");
    }

    /** Set events */
    playModeBtn.addEventListener(
      "click",
      this.controller.playbackClickHandler.bind(this.controller, "play")
    );
    repeatModeBtn.addEventListener(
      "click",
      this.controller.playbackClickHandler.bind(this.controller, "repeat")
    );
    shuffleModeBtn.addEventListener(
      "click",
      this.controller.playbackClickHandler.bind(this.controller, "shuffle")
    );

    /** Setting events */

    playbackControls.append(shuffleModeBtn, repeatModeBtn, playModeBtn);

    return playbackControls;
  }

  createPlayList() {
    const playlist = document.createElement("div");
    const addTrackIn = document.createElement("input");
    const addTrackBtn = document.createElement("button");

    /** Set HTML content */
    playlist.id = "playlist";
    addTrackIn.type = "file";
    addTrackIn.accept = "audio/*";
    addTrackBtn.id = "addTrack";
    addTrackBtn.type = "button";
    addTrackBtn.append(addTrackIn);
    addTrackBtn.insertAdjacentHTML(
      "afterbegin",
      `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
        />
      </svg>`
    );

    /** Set events */
    addTrackIn.addEventListener(
      "change",
      this.controller.addTrackHandler.bind(this.controller)
    );

    playlist.append(addTrackBtn, this.createTracksList());
    this.els.playlist = playlist;

    return playlist;
  }

  updateTracksActiveState(trackId) {
    const allTracksBtns = document.querySelectorAll("[data-track-id]");
    const currentTrack = document.querySelector(`[data-track-id="${trackId}"]`);
    allTracksBtns.forEach((trackBtn) => trackBtn.classList.remove("active"));
    currentTrack.classList.add("active");
  }

  updatePlaybackActiveState() {
    const allPlaybackBtns = document.querySelectorAll(
      "#playbackControls button"
    );
    const playbackMode = this.controller.getPlaybackMode();
    const playbackBtn = document.querySelector(`#${playbackMode}`);
    allPlaybackBtns.forEach((playbackBtn) =>
      playbackBtn.classList.remove("active")
    );

    playbackBtn.classList.add("active");
  }

  createTracksList() {
    const tracksList = document.createElement("div");
    const tracks = this.controller.getAllTracks();
    const currentTrack = this.controller.getCurrentTrack();

    /** Set HTML content */
    tracksList.id = "tracksList";

    tracks.forEach((track) => {
      const trackTitle = document.createElement("h3");
      const trackBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");

      deleteBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      `;

      deleteBtn.className = "delete-track";
      trackBtn.type = "button";
      trackBtn.textContent = track.title;
      trackBtn;
      trackBtn.setAttribute("data-track-id", track.id);
      trackBtn.addEventListener(
        "click",
        this.controller.trackClickHandler.bind(this.controller, trackBtn)
      );

      deleteBtn.addEventListener(
        "click",
        this.controller.deleteTrackHandler.bind(this.controller)
      );
      if (currentTrack.id === track.id) trackBtn.classList.add("active");
      deleteBtn.disabled = tracks.length === 1;
      trackTitle.append(trackBtn, deleteBtn);
      tracksList.append(trackTitle);
    });

    return tracksList;
  }

  init() {
    const rootEl = document.querySelector("#root");
    const audioPlayer = this.createAudioPlayer();
    const player = this.createPlayer();
    const playbackControls = this.createPlaybackControls();
    const playlist = this.createPlayList();

    rootEl.append(audioPlayer, player, playbackControls, playlist);
  }

  updateAudioPlayer() {
    const getActiveTrack = this.controller.getCurrentTrack();
    this.setAudioSrc(getActiveTrack.path);
    this.playAudio();
  }

  updateAudioTimeline() {
    this.els.audioPlayer.currentTime = this.els.timelineIn.value;
  }

  updateTimelineMax() {
    this.els.timelineIn.max = this.controller.getAudioDuration();
  }

  updateTimelineVal() {
    this.els.timelineIn.value = this.els.audioPlayer.currentTime;
  }

  updateTracksList() {
    const tracksList = this.createTracksList();
    const currentTracksList = document.querySelector("#tracksList");
    currentTracksList.replaceWith(tracksList);
  }
}
