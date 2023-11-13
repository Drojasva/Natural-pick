import PropTypes from 'prop-types'
import {usePhotos} from "../hooks/usePhotos.js";
import {PhotoContext} from "./PhotoContext.jsx";

export const PhotoProvider = ({ children }) => {

  const {photos, togglePhoto, favPhotos} = usePhotos()

  return (
    <PhotoContext.Provider value={{
      photos,
      favPhotos,
      togglePhoto,
    }}>
      {children}
    </PhotoContext.Provider>
);
};

PhotoProvider.propTypes = {
	children: PropTypes.object
};