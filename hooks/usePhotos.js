import {useEffect, useReducer} from "react";
import {photoReducer} from "../reducers/photoReducer.js";
import {getPhotos} from "../api/photos.js";

const initialState = [{}];

const init = () => {
  return [];
}

export const usePhotos = () => {

  const [photos, dispatch] = useReducer(photoReducer, initialState, init);

  useEffect(() => {
    getPhotos().then(photos => {
      const action = {
        type: "[PHOTO] Get All",
        payload: photos
      }
      dispatch(action);
    })
  }, []);

  const togglePhoto = (id) => {
    const action = {
      type: "[PHOTO] Like/dislike Photo",
      payload: id
    }
    dispatch(action)
  }

return {
    photos,
    togglePhoto,
    favPhotos: photos.filter(photo => photo.liked)
}
};