import React from 'react';
import ShopMen from './../../../src/assets/shopMens.jpg';
import ShopWomen from './../../../src/assets/shopWomens.jpg';
 import './styles.scss';
import { Link } from 'react-router-dom';

const Directory = (props:any) => {
  return (
    <div className="directory">
    <div className="wrap">
      <div
        className="item"
        style={{
          backgroundImage: `url(${ShopWomen})`
        }}
      >
        <Link to="/search/womens">
          Shop Womens
        </Link>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${ShopMen})`
        }}
      >
        <Link to="/search/mens">
          Shop Mens
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Directory;
