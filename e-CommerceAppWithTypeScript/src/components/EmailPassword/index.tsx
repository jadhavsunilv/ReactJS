import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword} from '../../Redux/User/userAction';
import { useNavigate } from 'react-router-dom';
import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const EmailPassword = (props:any) => {
  let navigate =useNavigate();
  const resetPasswordSuccess=useSelector((state:any) => state.user.resetPasswordSuccess)
  const resetPasswordError=useSelector((state:any)=> state.user.resetPasswordError)
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (resetPasswordSuccess) {
      // dispatch(resetAllAuthForms());
      navigate('/login');
    }
  }, [resetPasswordSuccess]);

  useEffect(() => {
      setErrors(resetPasswordError);
  }, [resetPasswordError]);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(resetPassword(email));
  }

  const configAuthWrapper = {
    headline: 'Email Password'
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return (
                <li key={index}>
                  {e}
                </li>
              );
            })}
          </ul>
        )}
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e:any) => setEmail(e.target.value)}
          />
          <Button type="submit">
            Email Password
          </Button>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default (EmailPassword);