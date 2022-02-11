import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkUserIsAdmin } from './../../Utils';
import './styles.scss';

const mapState = (state:any) => ({
  currentUser: state.user.currentUser
})
const AdminToolbar = (props:any)=> {
  let { currentUser} = (useSelector(mapState));
  if(currentUser===null){
    currentUser = {}
  }
  const isAdmin = checkUserIsAdmin(currentUser);
  if (!isAdmin) return null;
  return (
    <div className="adminToolbar">
      <ul>
        <li>
          <Link to="/admin">
            My admin
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminToolbar;