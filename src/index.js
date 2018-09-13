import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import Raven from 'raven-js';
import firebase from 'firebase/app';
import Root from './config/Root';
import i18next from './components/common/i18n';

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

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Root />
  </I18nextProvider>,
  document.getElementById('root')
);
