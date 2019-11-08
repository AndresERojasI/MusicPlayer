import axios from 'axios';
import {
    ERROR_FETCHING_GENRE_LIST,
    ERROR_FETCHING_ARTISTS_LIST,
    ERROR_FETCHING_ARTIST_ALBUMS,
    ERROR_FETCHING_ALBUM_SONGS,
    ERROR_FETCHING_RANDOM_SONG
} from '../constants/errors.js'

class Service{
    constructor() {
        this.api = axios.create({
            baseURL: 'https://rubytify.herokuapp.com/api/v1'
        })
    }
    
    getGenres = () => this.api.get('/genres')

    getArtists = () => this.api.get('/artists')

    getArtistAlbums = artist_id => this.api.get(`artists/${artist_id}/albums`)

    getAlbumSongs = album_id => this.api.get(`albums/${album_id}/songs`)

    getRandomSong = genre_name => this.api.get(`genres/${genre_name}/random_song`)
}

export default new Service();
