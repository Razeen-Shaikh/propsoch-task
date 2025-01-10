import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import ImageCarousel from "../components/ImageCarousel";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) =>
    state.products.products.find((prod) => prod.id === productId)
  );

  const {
    title,
    location,
    address,
    price,
    propertyAmenities,
    mostLiked,
    images,
  } = product || {};

  useEffect(() => {
    if (!product) navigate("/");
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  return (
    <div className="card">
      <div className="image-section">
        {mostLiked && <span className="most-liked">Most Liked</span>}
        <ImageCarousel images={images} />
      </div>
      <div className="details">
        <div className="container">
          <div>
            <h2 className="title">{title}</h2>
            <p className="location">
              <FaMapMarkerAlt /> {location}
            </p>
          </div>
          <div>
            <h2 className="price">{price} Cr</h2>
            <p className="text">EMI Avaialabe</p>
          </div>
        </div>
        <h3 className="location-heading">Location</h3>
        <div className="address-container">
          <div className="map-pin-container">
            <FiMapPin className="map-pin" />
          </div>
          <p className="address">{address}</p>
        </div>
        <MapComponent address={address} />
        <div className="nearby-locations">
          <p>2 Hospital</p>
          <p>4 Gas stations</p>
          <p>2 Schools</p>
        </div>
        <div className="amenities">
          <h4>Property Amenties</h4>
          <ul>
            {propertyAmenities.map((amenity, index) => (
              <li
                className={(index === 0 ? "selected " : "") + "amenity"}
                key={index}
              >
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
