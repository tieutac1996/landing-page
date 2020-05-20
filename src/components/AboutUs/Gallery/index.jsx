import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

Gallery.propTypes = {
  gallery: PropTypes.array,
};

Gallery.defaultProps = {
  gallery: [],
};

function Gallery(props) {
  const { gallery } = props;
  return (
    <div>
      <div className="gallery_title">Gallery</div>
      <div className="about_gallery">
        {gallery.map((e, x) => (
          <div key={x}>
            <img src={e.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
