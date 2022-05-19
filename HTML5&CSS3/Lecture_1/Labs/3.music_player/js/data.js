export default class Data {
  getAllTracks() {
    return JSON.parse(localStorage.getItem("tracks")).tracksData || [];
  }

  getTrackById(id) {
    const allTracks = this.getAllTracks();
    return allTracks.filter((track) => track.id == id)[0];
  }

  getCurrentTrackId() {
    return JSON.parse(localStorage.getItem("tracks")).currentTrackId;
  }

  getCurrentTrack() {
    return this.getTrackById(this.getCurrentTrackId());
  }

  setAllTracks(tracks) {
    const currentTrackId = this.getCurrentTrackId();
    localStorage.setItem(
      "tracks",
      JSON.stringify({
        currentTrackId: currentTrackId,
        tracksData: tracks,
      })
    );
  }

  setCurrentTrackId(trackId) {
    const allTracks = this.getAllTracks();
    localStorage.setItem(
      "tracks",
      JSON.stringify({
        currentTrackId: trackId,
        tracksData: allTracks,
      })
    );
  }
}
