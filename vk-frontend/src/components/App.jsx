import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.module.css';
import Input from './Input/Input'

const App = (props) => {
  return (
    <div styleName="app-container">
      <Input />
    </div>
  );
}

export default CSSModules(App, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
