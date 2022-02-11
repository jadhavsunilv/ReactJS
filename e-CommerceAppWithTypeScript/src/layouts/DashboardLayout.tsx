import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import VerticalNav from '../components/VerticalNav';
import { signoutuser } from '../Redux/User/userAction';

const DashboardLayout = (props:any) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signoutuser());
  
  };
  return (
      <div className="dashboardLayout">
        <Header {...props}/>
        <div className="controlPanel">
          <div className="sidebar">
            <VerticalNav>
            <ul>
              <li>
                <Link to="/dashboard">
                  Home
                  </Link> 
              </li>
              <li>
                <span className="signOut" onClick={()=>signOut()}>
                  Sign out
                </span>
              </li>
            </ul>
            </VerticalNav>
          </div>
          <div className="content">
          {props.children}
          </div>
        </div>
        <Footer/>
      </div>
  );
};

export default DashboardLayout;
