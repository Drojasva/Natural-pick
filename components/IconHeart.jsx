import PropTypes from 'prop-types'

const IconHeart = ({ filled }) => {
    return (
        <svg
        width="30px"
        viewBox="0 0 24 24"
      >
        <path
          fill={filled ? "red" : "white"}
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    );
};
  export default IconHeart;

	IconHeart.propTypes = {
		filled: PropTypes.bool,
	};

