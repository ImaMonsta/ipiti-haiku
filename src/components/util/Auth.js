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

const currentUser = () => {
  firebase.auth().onAuthStateChanged(user => {
    console.log(user);
  });
};

export default currentUser;
