import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './BarButton.module.css';
import {ReactComponent as EmojiIcon} from './../../../../../assets/img/emoji-icon.svg';
import {ReactComponent as RecentIcon} from './../../../../../assets/img/recent-icon.svg';

const RecentButton = (props) => {

  return (
    <button styleName={`bar-button ${props.activeTab === props.tab ? "bar-button_active" : ""}`}
            onClick={() => props.setActiveTab(props.tab)}>
        {props.tab === 'recent' ? <RecentIcon /> : <EmojiIcon />}
    </button>
  );
}

export default CSSModules(RecentButton, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });