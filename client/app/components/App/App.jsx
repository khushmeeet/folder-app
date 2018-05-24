import React, { Fragment } from 'react';
import Header from '../Header/Header';


const App = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
);


export default App;
