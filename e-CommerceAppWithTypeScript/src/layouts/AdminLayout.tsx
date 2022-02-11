import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signoutuser } from '../../src/Redux/User/userAction';
import Header from './../components/Header';
import VerticalNav from './../components/VerticalNav';
import Footer from './../components/Footer';
import { useNavigate } from 'react-router';

const AdminLayout = (props:any) => {
  let Navigation=useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signoutuser());
    Navigation('/login')
  };
  return (
    <div className="adminLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/admin">
                  Home
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={()=>signOut()}>
                  Sign Out
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

export default AdminLayout;
