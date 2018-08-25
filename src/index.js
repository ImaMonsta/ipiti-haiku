import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';

//  import jquery from 'jquery';
//  import metismenu from 'metismenu';
//  import bootstrap from 'bootstrap';

import Main from './views/Main';

Raven.config('https://8ab951e8d78f4b3d8de1ca4b641b50fb@sentry.io/1265167', {
  // 👾
}).install();

ReactDOM.render(<Main />, document.getElementById('root'));
