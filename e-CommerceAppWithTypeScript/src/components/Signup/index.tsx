import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser} from '../../Redux/User/userAction';
import './styles.scss';
import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import { useNavigate } from 'react-router-dom';
import {User } from '../../Model/user';

const Signup = (props:any) => {
  let navigate = useNavigate();
  const signUpSuccess=useSelector((state:any) => state.user.signUpSuccess)
  const signUpError=useSelector((state:any)=> state.user.signUpError)
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  
  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  useEffect(() => {
    if (signUpSuccess) {
      reset();
      // dispatch(resetAllAuthForms());
      navigate('/');
    }
  },[]);

  useEffect(() => {
       setErrors(signUpError);
  }, [signUpError]);

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    var objUser= new User();
    objUser.displayName=displayName;
    objUser.email=email;
    objUser.password=password;
    objUser.confirmPassword=confirmPassword;
    dispatch(signUpUser(objUser));
  }
  const configAuthWrapper = {
    headline: 'Registration'
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              );
            })}
          </ul>
        )}
        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder="Full name"
            handleChange={(e:any) => setDisplayName(e.target.value)}
          />
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
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            handleChange={(e:any) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">
            Register
            </Button>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default(Signup);