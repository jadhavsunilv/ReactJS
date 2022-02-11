import userTypes from './userType';
import { iUser } from '../../Model/user';
import { auth, handleUserProfile, GoogleProvider } from './../../firebase/utils';

export const setCurrentUser = (user:any) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user
});
export const signInUser=(user:iUser) => async (dispatch:any) => {
  try {
    await auth.signInWithEmailAndPassword(user.email,user.password);
    dispatch({
      type: userTypes.SIGN_IN_SUCCESS,
      payload: true
    });
  } catch (err) {
    // console.log(err);
  }
};
export const signInWithGoogle = () => async (dispatch:any) => {
  try {
    await auth.signInWithPopup(GoogleProvider)
      .then(() => {
        dispatch({
          type: userTypes.SIGN_IN_SUCCESS,
          payload: true
        });
      });
  } catch (err) {
    // console.log(err);
  }
};
export const signUpUser = (users:iUser) => async (dispatch:any) => {
  if (users.password !== users.confirmPassword) {
    const err = ['Password Don\'t match'];
    dispatch({
      type: userTypes.SIGN_UP_ERROR,
      payload: err
    });
    return;
  }
  try {
    const { user } = await auth.createUserWithEmailAndPassword(users.email, users.password);
    // const additionalData=(users.displayName);
    await handleUserProfile(user,(users.displayName));
    
    dispatch({
      type: userTypes.SIGN_UP_SUCCESS,
      payload: true
    });

  } catch (err) {
    // console.log(err);
  }
};
export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS
});
export const signoutuser= () => async (dispatch:any) =>{
  try {
    await auth.signOut()
      .then(() => {
        dispatch({
          type: userTypes.SIGN_OUT_USER_SUCCESS,
          payload: true
        });
      });

  } catch (err) {
    // console.log(err);
  }
};
export const resetPassword = (email:string ) => async (dispatch:any) => {
  const config = {
    url: 'http://localhost:3000/login'
  };
  try {
    await auth.sendPasswordResetEmail(email, config)
      .then(() => {
        dispatch({
          type: userTypes.RESET_PASSWORD_SUCCESS,
          payload: true
        });
      })
      .catch(() => {
        const err = ['Email not found. Please try again.'];
        dispatch({
          type: userTypes.RESET_PASSWORD_ERROR,
          payload: err
        })
      });
  } catch (err) {
    // console.log(err);
  }
};

