import firebase from 'firebase/app';
import 'firebase/auth';

export const loginGoogle = async () => {
  const gProvider = new firebase.auth.GoogleAuthProvider();

  const { user } = await firebase.auth().signInWithPopup(gProvider);
  console.log(user);
};

export const logout = async () => {
  const signout = await firebase.auth().signOut();
  console.log(signout);
};

export const currentUser = async () => {
  const userPromise = new Promise(resolve => {
    firebase.auth().onAuthStateChanged(result => resolve(result));
  });
  const user = await userPromise;
  return user;
};
