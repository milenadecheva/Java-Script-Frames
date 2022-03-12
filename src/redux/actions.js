import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function setListView(value) {
    return {
        type: actionTypes.SET_LIST_VIEW,
        payload: value,
    }
}

export function setSongs(value) {
    return {
        type: actionTypes.SET_SONGS,
        payload: value,
    }
}

export function addFavoriteSong(song) {
    return {
        type: actionTypes.ADD_FAVORITE_SONG,
        payload: song,
    }
}

export function removeFavoriteSong(song) {
    return {
        type: actionTypes.REMOVE_FAVORITE_SONG,
        payload: song,
    }
}

export function setFavoriteSongs(songs) {
    return {
        type: actionTypes.SET_FAVORITE_SONGS,
        payload: songs,
    }
}

export function getSongs(path, params) {
    return async (dispatch) => {
        try {
            axios.get(`${constants.baseUrl}${path}` , {
                params: {...params, api_key: constants.apiKey}
            })
            .then(response => {
                dispatch(setSongs(response.data.results));
            })
        } catch (error){
            console.log(error);
        }
    }
}