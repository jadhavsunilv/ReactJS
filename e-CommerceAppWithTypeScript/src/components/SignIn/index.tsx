import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import './styles.scss';
import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser, signInWithGoogle} from '../../Redux/User/userAction';
import { useNavigate } from 'react-router-dom';
import {User } from '../../Model/user';

const SignIn = (props:any) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const signInSuccess = useSelector((state:any) => state.user.signInSuccess)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
 
  useEffect(() => {
    if (signInSuccess) {
       resetForm();
      // dispatch(resetAllAuthForms());
       navigate('/');
    }
  },);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };
 
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    var objUser=new User();
    objUser.email=email; 
    objUser.password=password; 
    dispatch(signInUser(objUser));
   
  }
  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  }

  const configAuthWrapper = {
    headline: 'LogIn'
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e:any) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e:any) => setPassword(e.target.value)}
          />
          <Button type="submit">
            LogIn
            </Button>
          <div className="socialSignin">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>
                Sign in with Google
                </Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">
              Reset Password
              </Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default (SignIn);