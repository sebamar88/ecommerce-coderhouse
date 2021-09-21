import React from "react";

const Product = ({ item }) => {
  const { fields, id } = item;
  const { name, image, company, price } = fields;
  return (
    <div className="col-sm-6 col-lg-3">
      <h4>{name}</h4>
      <div className="overflow-hidden">
        <img
          src={image[0].thumbnails.large.url}
          className="img-fluid"
          alt={name}
        />
      </div>
      <p>Brand: {company}</p>
      <span>${price}</span>
      <div>
        <a href="!#" className="btn btn-primary">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Product;
