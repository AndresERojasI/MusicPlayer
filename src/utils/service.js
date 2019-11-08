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
        this.api = axios().create({
            baseURL: 'https://rubytify.herokuapp.com/api/v1'
        })
    }
    
    getGenres = async () => {
        try {
            return await this.api.get('/genres')
        } catch (error) {
            console.error(ERROR_FETCHING_GENRE_LIST);
            return {
                data: {},
                error: ERROR_FETCHING_GENRE_LIST
            }
        }
    }

    getArtists = async () => {
        try {
            return await this.api.get('/artists')
        } catch (error) {
            console.error(ERROR_FETCHING_ARTISTS_LIST);
            return {
                data: {},
                error
            }
        }
    }

    getArtistAlbums = async artist_id => {
        try {
            return await this.api.get(`artists/${artist_id}/albums`)
        } catch (error) {
            console.error(ERROR_FETCHING_ARTIST_ALBUMS);
            return {
                data: {},
                error
            }
        }
    }

    getAlbumSongs = async album_id => {
        try {
            return await this.api.get(`albums/${album_id}/songs`)
        } catch (error) {
            console.error(ERROR_FETCHING_ALBUM_SONGS);
            return {
                data: {},
                error
            }
        }
    }

    getRandomSong = async genre_name => {
        try {
            return await this.api.get(`genres/${genre_name}/random_song`)
        } catch (error) {
            console.error(ERROR_FETCHING_RANDOM_SONG);
            return {
                data: {},
                error
            }
        }
    }
}

export default new Service();
