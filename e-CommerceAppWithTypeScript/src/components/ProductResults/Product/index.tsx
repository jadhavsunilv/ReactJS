import React from 'react';
import { iProduct } from '../../../Model/product';
import Button from './../../forms/Button';
import userIMG from './../../assets/user.png';
import { Link } from 'react-router-dom';

const Product = (Product:iProduct) => {
const{ProductThambnail,ProductName,ProductPrice, documentID,}=Product

  if (! documentID || !ProductThambnail || !ProductName ||
    typeof ProductPrice === 'undefined') return null;

  const configAddToCartBtn = {
    type: 'button'
  };

  return (
    <div className="product">
      <div className="thumb">
      <Link to={`/product/${documentID}`}>
        <img src={ProductThambnail} alt="ProductThambnail" />
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
            <Link to={`/product/${documentID}`}>
              {ProductName}
             </Link>
            </span>
          </li>
          <li>
            <span className="price">
              £{ProductPrice}
            </span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn}>
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Product;