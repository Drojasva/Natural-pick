import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {PhotoContext} from "../context/PhotoContext.jsx";

const Navbar = () => {

  const {favPhotos} = useContext(PhotoContext)

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-red text-white">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="bi bi-image-fill"></i> NP
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
              >
                <i className="bi bi-house-fill"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/favoritos"
                className="nav-link"
              >
                <i className="bi bi-heart-fill"></i> Like ({favPhotos.length})
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
);
};
export default Navbar;