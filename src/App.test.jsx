import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/common/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home logout={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
