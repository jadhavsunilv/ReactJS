import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router';

const mapState = (state:any) => ({
  currentUser: state.user.currentUser
});
const useAuth = (props:any) => {
  let navigate =useNavigate();
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  },);
  return currentUser;
};

export default useAuth;