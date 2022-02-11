import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/forms/Button';
import FormInput from '../../components/forms/FormInput';
import FormSelect from '../../components/forms/FormSelect';
import LoadMore from '../../components/LoadMore';
import Modal from '../../components/Modal';
import userIMG from './../../assets/shopWomens.jpeg';
import './styles.scss';
import {addProduct,fetchProducts,deleteProductStart} from '../../Redux/Product/ProductAction';
import { iProduct, Product } from '../../Model/product';

// const mapState = (productsData:any) => ({
//   products:productsData.products
// });

const Admin = (props:any) => {
  // const{documentID}=props
  const dispatch = useDispatch();
  // const { products } = useSelector(mapState);
const products=useSelector((state:any) => state.productsData.products)
  const[ProductCategory, setProductCategory]=useState('man');
  const[ProductName, setProductName]=useState('');
  const[ProductThambnail, setProductThambnail]=useState('');
  const[ProductPrice, setProductPrice]=useState(0);
  const [hideModal, setHideModal] = useState(true);
  const toggleModal = () => setHideModal(!hideModal);
   console.log("all product",products)
  useEffect(() => {
    dispatch(
      fetchProducts(products)
    );
  }, []);

  const configModal = {
   hideModal,
    toggleModal
  };
  const handleLoadMore = () => {
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };
  
  const handleDelete=(documentID:any)=>{
    if (window.confirm("Are you sure wanted to delete the user ?")){
      dispatch(
        deleteProductStart(documentID)
      );
        // props.DeleteUser(id);  
        // props.getUser();      
    }
};
  const resetForm=()=>{
    setProductCategory('man');
    setProductName('');
    setProductThambnail('');
    setProductPrice(0);
  }
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    var objUser= new Product();
    objUser.ProductCategory=ProductCategory;
    objUser.ProductName=ProductName;
    objUser.ProductThambnail=ProductThambnail;
    objUser.ProductPrice=ProductPrice;
    dispatch(addProduct(objUser));
    dispatch(fetchProducts(products));
    // console.log("Admin page product data",objUser);
    resetForm();
  }
  return (
    <div className="admin">
    <div className="callToActions">
    <ul>
      <li>
        <Button  onClick={() => toggleModal()}>
          Add new product
        </Button>
      </li>
    </ul>
  </div>
<Modal {...configModal}>
<div className="addNewProductForm">
          <form onSubmit={handleSubmit}>
            <h2>
              Add new product
            </h2>
            <FormSelect
              label="Category"
              options={[{
                value: "mens",
                name: "Mens"
              }, {
                value: "womens",
                name: "Womens"
              }]}
              handleChange={(e:any) => setProductCategory(e.target.value)}
            />
            <FormInput
              label="Name"
              name="Name"
              type="text"
              value={ProductName}
              handleChange={(e:any) => setProductName(e.target.value)}
            />
            <FormInput
              label="Main image URL"
              name="Main image URL"
              type="url"
              value={ProductThambnail}
              handleChange={(e:any) => setProductThambnail(e.target.value)}
            />
            <FormInput
              label="Price"
              name="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={ProductPrice}
              handleChange={(e:any) => setProductPrice(e.target.value)}
            />
            <Button type="submit">
              Add product
            </Button>
          </form>
        </div>
</Modal>
<div className="manageProducts">
  <table cellPadding="0" cellSpacing="0">
  <tbody>
    <tr>
      <th>
        <h1>
          Manage Products
        </h1>
      </th>
    </tr>
    <tr>
    <td>
      <table className='results' cellPadding="10" cellSpacing="0">
   <tbody>
   {products.length > 0 &&
           <>
          { products.map((Product:iProduct,index:any) => {
             const {
              ProductName,
              ProductThambnail,
              ProductPrice,
              documentID
            } = Product;

            return (
  <tr key={index}>
    <td>
      <img className="thumb" src={ProductThambnail} alt="src"/>
    </td>
    <td>
      {ProductName}
    </td>
    <td>
     £ {ProductPrice}
    </td>
    <td>
      <Button onClick={()=>handleDelete(documentID)}>
        Delete
      </Button>
    </td>
  </tr>   
     )})}
          </>
          }
    </tbody>
      </table>
    </td>
    </tr>
    <tr>
      <td>
        <table cellPadding="10" cellSpacing="0">
          <tbody>
            <tr>
              <td>
                <LoadMore {...configLoadMore}/>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  </table>
</div>
</div>
  );
}

export default Admin;