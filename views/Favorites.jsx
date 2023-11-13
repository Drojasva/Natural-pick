import {useContext} from "react";
import {PhotoContext} from "../context/PhotoContext.jsx";
import Gallery from "../components/Gallery.jsx";

const Favorites = () => {

  const {favPhotos} = useContext(PhotoContext);

  return (
    <div className="container">
      <h1 className="my-4">
        Fotos favoritas{ favPhotos.length ? `: ${favPhotos.length}` : ""}
      </h1>
          <Gallery photos={favPhotos} />
    </div>
);
};
export default Favorites;