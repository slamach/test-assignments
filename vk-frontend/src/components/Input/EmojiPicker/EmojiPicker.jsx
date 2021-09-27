import React, { useState } from 'react';
import CSSModules from 'react-css-modules';
import styles from './EmojiPicker.module.css';
import EmojiKeyboard from './EmojiKeyboard/EmojiKeyboard';
import BottomBar from './BottomBar/BottomBar';

const EmojiPicker = (props) => {
  const RECENT_MAX = 25;

  const [activeTab, setActiveTab] = useState('all');
  const [recentEmojis, setRecentEmojis] = useState([]);

  const addEmojiToRecent = (emoji) => {
    if (!recentEmojis.includes(emoji)) {
      let temp = recentEmojis;
      if (recentEmojis.length >= RECENT_MAX) {
        temp.shift();
      }
      temp.push(emoji);
      setRecentEmojis(temp);
    }
  }

  return (
    <div styleName={`emoji-picker-container ${props.emojiPickerVisibility ? "emoji-picker-container_visible" : ""}`}
         onMouseEnter={props.showEmojiPicker}
         onMouseLeave={(e) => document.activeElement !== document.getElementById('emoji-button') ? props.hideEmojiPicker() : undefined}>
      <div styleName="emoji-picker">
        <EmojiKeyboard addInputValue={props.addInputValue} activeTab={activeTab}
                       recentEmojis={recentEmojis} addEmojiToRecent={addEmojiToRecent} />
        <BottomBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default CSSModules(EmojiPicker, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
