import PropTypes from 'prop-types'
import {Card} from "./Card.jsx";

const Gallery = ({photos}) => {

  return (
    <div className="d-flex flex-wrap gap-2 w-100 justify-content-center my-4">
      {
        photos.map(photo => (
          <Card key={photo.id} photo={photo} />
        ))
      }
    </div>
);
};
export default Gallery;

Gallery.propTypes = {
	photos: PropTypes.array
};