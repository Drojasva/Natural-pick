import PropTypes from 'prop-types'
import {useContext} from "react";
import {PhotoContext} from "../context/PhotoContext.jsx";
import IconHeart from "../components/IconHeart.jsx";

export const Card = ({photo}) => {

  const { togglePhoto } = useContext(PhotoContext);

  return (
    <div className="card" style={{width: "18rem"}}>
      <img
        src={photo.src["large"]}
        className="card-img-top image-card"
        alt={photo.alt}
        height="300"
      />
      <div
        onClick={() => togglePhoto(photo.id)}
        className="heart-like-dislike">
        <IconHeart filled={photo["liked"]} />
      </div>
      <div className="card-body">
        <p className="card-text">{photo.alt}</p>
      </div>
    </div>
);
};

Card.propTypes = {
	photo: PropTypes.object,
};