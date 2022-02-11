import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { Link } from 'react-router-dom';
import { signoutuser } from '../../Redux/User/userAction';
import Logo from './../../assets/logo.png';

const mapState = ( state:any) => ({
  currentUser:state.user.currentUser,
});
const Header = (props:any) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signoutuser());
  };
  let { currentUser } = useSelector(mapState);
   return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="SimpleTut LOGO" />
          </Link>
        </div>
        <nav>
          <ul>
            <li> 
            <Link to="/">
                Home
                </Link>
            </li>
            <li>
            <Link to="/search">
                Search
                </Link>
            </li>
          </ul>
        </nav>
        <div className="callToActions">
        <ul>
            <li>
              <Link to="/cart">
                Your Cart
              </Link>
            </li>
            {currentUser && (
            <>
              <li>
                <Link to="/dashbord">
                  My Account
                </Link>
              </li>
              <li>
                <span onClick={() => signOut()}>
                  LogOut    
                </span>
              </li>
              </> 
             )}
            {!currentUser && (
            <>
              <li className="hideOnMobile">
                <Link to="/registration">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
              </>) }
          </ul>
        </div>
      </div>
    </header>
  );
};

export default (Header);