import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { iProduct } from '../../Model/product';
import FormSelect from '../forms/FormSelect';
import { fetchProducts } from './../../../src/Redux/Product/ProductAction';
import Product from './Product';
import './styles.scss';

const ProductResults = () => {
    let navigate = useNavigate();
    const { filterType } = useParams();
  const products=useSelector((state:any) => state.productsData.products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
        fetchProducts({filterType})
    )
  }, [filterType]);

  const handleFilter = (e:any) => {
    const nextFilter = e.target.value;
    navigate(`/search/${nextFilter}`);
  };

  if (!Array.isArray(products)) return null;
  if (products.length < 1) {
    return (
      <div className="products">
        <p>
          No search results.
        </p>
      </div>
    );
  }

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Show all',
      value: ''
    }, {
      name: 'Mens',
      value: 'mens'
    }, {
      name: 'Womens',
      value: 'womens'
    }],
    handleChange: handleFilter
  };

  return (
    <div className="products">

      <h1>
        Browse Products
      </h1>

      <FormSelect {...configFilters} />

      <div className="productResults">
        {products.map((product:iProduct, pos) => {
          const { ProductThambnail, ProductName, ProductPrice } = product;
          if (!ProductThambnail || !ProductName ||
            typeof ProductPrice === 'undefined') return null;

        //   const configProduct = {
        //     ProductThambnail,
        //     ProductName,
        //     ProductPrice,
        //     // ProductCategory,
        //     // documentID
        //   };

          return (
            <Product {...product} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductResults;