import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_FETCH_SUCCESS,
  RESET_FORM
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeDataSave = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        Actions.pop();
      });
  };
};

export const employeeFetch = () => {
   const { currentUser } = firebase.auth();

   return (dispatch) => {
     firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
      });
   };
 };

 export const employeeSave = ({ name, phone, shift, uid }) => {
   const { currentUser } = firebase.auth();

   return () => {
     firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        Actions.pop();
      });
   };
 };

 export const employeeDelete = ({ uid }) => {
   const { currentUser } = firebase.auth();

   return () => {
     firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
   };
 };

 export const resetForm = () => {
   return {
     type: RESET_FORM
   };
 };
