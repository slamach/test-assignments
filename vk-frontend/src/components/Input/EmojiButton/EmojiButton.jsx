import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './EmojiButton.module.css';
import {ReactComponent as EmojiIcon} from './../../../assets/img/emoji-icon.svg';

const EmojiButton = (props) => {
  return (
    <button id="emoji-button" styleName={`emoji-button ${props.emojiPickerVisibility ? "emoji-button_active" : ""}`}
            onFocus={props.showEmojiPicker} onMouseEnter={props.showEmojiPicker} onBlur={props.hideEmojiPicker}
            onMouseLeave={(e) => document.activeElement !== document.getElementById('emoji-button') ? props.hideEmojiPicker() : undefined}>
      <EmojiIcon />
    </button>
  );
}

export default CSSModules(EmojiButton, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });