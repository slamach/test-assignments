import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './BottomBar.module.css';
import BarButton from './BarButton/BarButton';

const BottomBar = (props) => {
  return (
    <div styleName="bottom-bar">
      <BarButton tab="all" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
      <BarButton tab="recent" activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
    </div>
  );
}

export default CSSModules(BottomBar, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
