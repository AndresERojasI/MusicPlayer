import axios from "axios";

class Service {
  constructor() {
    this.api = axios.create({
      baseURL: "https://rubytify.herokuapp.com/api/v1"
    });
  }

  getGenres = () => this.api.get("/genres");

  getArtists = () => this.api.get("/artists");

  getArtistById = artist_id => this.api.get(`artists/${artist_id}`);

  getArtistAlbums = artist_id => this.api.get(`artists/${artist_id}/albums`);

  getAlbumSongs = album_id => this.api.get(`albums/${album_id}/songs`);

  getRandomSong = genre_name =>
    this.api.get(`genres/${genre_name}/random_song`);
}

export default new Service();
