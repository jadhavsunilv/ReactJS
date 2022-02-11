import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkUserIsAdmin } from './../Utils';

const mapState = (state:any) => ({
  currentUser: state.user.currentUser
});
const useAdminAuth = (props:any) => {
  let { currentUser } = useSelector(mapState);
  if(currentUser===null){
    currentUser = {}
  }
  const navigate = useNavigate()
  useEffect(() => {
    if (!checkUserIsAdmin(currentUser)) {
      navigate('/login');
    }
  }, [currentUser]);
  return currentUser;
}

export default useAdminAuth;