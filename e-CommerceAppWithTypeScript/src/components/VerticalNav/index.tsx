import React from 'react';
import { useSelector } from 'react-redux'
import UserProfile from './../UserProfile';
import './styles.scss';

const mapState = (state:any) => ({
  currentUser: state.user.currentUser
})
const VerticalNav = (props:any) => {
  const { currentUser } = useSelector(mapState);
  const configUserProfile = {
    currentUser
  }
  return (
    <div className="verticalNav">
      <UserProfile {...configUserProfile} />
      <div className="menu">
        {props.children}
      </div>
    </div>
  );
}

export default VerticalNav;