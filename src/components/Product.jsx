import React, { useEffect } from "react";
import { FaEye, FaStar } from "react-icons/fa";
import "./styles.css";

const Product = ({ product }) => {
  const [color, setColor] = React.useState("red");
  const [date, setDate] = React.useState("");

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split(":").map(Number);
    return new Date(year, month - 1, day);
  };

  const getFormattedDate = (date) => {
    const options = { month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (product.rating < 3) {
      setColor("red");
    } else if (product.rating >= 3 && product.rating < 4) {
      setColor("orange");
    } else if (product.rating >= 4 && product.rating < 5) {
      setColor("yellow");
    } else {
      setColor("green");
    }

    const startDateObj = parseDate(product.startDate);
    const endDateObj = parseDate(product.endDate);

    const startDate = getFormattedDate(startDateObj);
    const endDate =
      new Date(startDateObj).getMonth() === new Date(endDateObj).getMonth()
        ? `${new Date(endDateObj).getDate()}`
        : getFormattedDate(endDateObj);

    const formattedDateRange = `${startDate} – ${endDate}`;

    setDate(formattedDateRange);
  }, []);

  return (
    <div className="card-container">
      <div className="product-image-container">
        <img className="product-image" src={product.images[0]} alt="Product" />
      </div>
      <div className="product-info">
        <div className="product-meta">
          <p id="views" className="product-views">
            <FaEye style={{ marginRight: "5px" }} /> {product.views}
          </p>
          <p id="rating" className={`${color} product-rating`}>
            <FaStar style={{ marginRight: "5px" }} /> {product.rating}
          </p>
        </div>
        <p className="product-title">{product.title}</p>
        <p className="product-date">{date}</p>
      </div>
    </div>
  );
};

export default Product;
