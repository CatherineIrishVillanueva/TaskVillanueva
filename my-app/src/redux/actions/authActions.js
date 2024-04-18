import CryptoJS from 'crypto-js';
import { SIGN_UP, SIGN_IN } from './types';

export const signUp = (userData) => (dispatch) => {
  const storedUserData = JSON.parse(localStorage.getItem('userData'));

  if (storedUserData && (userData.email === storedUserData.email || userData.mobile === storedUserData.mobile)) {
    return 'Email or mobile number is already used!😢';
  }

  const encryptedPassword = encryptPassword(userData.password);
  localStorage.setItem('userData', JSON.stringify({ ...userData, password: encryptedPassword }));

  console.log('User data stored in local storage:', { ...userData, password: encryptedPassword });

  dispatch({
    type: SIGN_UP,
    payload: userData,
  });

  return null; 
};


export const signIn = (userData) => (dispatch) => {
  const storedUserData = JSON.parse(localStorage.getItem('userData'));

  if (storedUserData) {
    const storedEmail = storedUserData.email;
    const storedMobile = storedUserData.mobile;

    if ((userData.emailOrMobile && userData.emailOrMobile === storedEmail) || (userData.emailOrMobile && userData.emailOrMobile === storedMobile)) {
      const decryptedPassword = decryptPassword(storedUserData.password);

      if (userData.password === decryptedPassword) {
        dispatch({
          type: SIGN_IN,
          payload: storedUserData.email,
        });
        return null; 
      } else {
        return "Email/Mobile or Password didn't Match!";
      }
    } else {
      return "User not found.";
    }
  }
};

const encryptPassword = (password) => {
  return CryptoJS.AES.encrypt(password, '!`%*^').toString();
};

const decryptPassword = (encryptedPassword) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, '!`%*^');
  return bytes.toString(CryptoJS.enc.Utf8);
};
