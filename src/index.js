import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import firebase from 'firebase/app';
import Routes from './config/Routes';

Raven.config('https://8ab951e8d78f4b3d8de1ca4b641b50fb@sentry.io/1265167', {
  // 👾
}).install();

const config = {
  apiKey: 'AIzaSyBLHRpHmnKl61K1uC_p3POYjjq9D-t30gw',
  authDomain: 'ipiti-haiku.firebaseapp.com',
  databaseURL: 'https://ipiti-haiku.firebaseio.com',
  projectId: 'ipiti-haiku',
  storageBucket: 'ipiti-haiku.appspot.com',
  messagingSenderId: '511368138327'
};

firebase.initializeApp(config);

ReactDOM.render(<Routes />, document.getElementById('root'));
