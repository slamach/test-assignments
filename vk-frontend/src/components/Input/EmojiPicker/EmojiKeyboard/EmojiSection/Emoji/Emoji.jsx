import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Emoji.module.css';

const Emoji = (props) => {
  const handleClick = (event) => {
    props.addInputValue(props.content)
    props.addEmojiToRecent(props.content);
  }

  return (
    <div styleName="emoji" onClick={handleClick}>
      <div styleName="emoji__content">{props.content}</div>
    </div>
  );
}

export default CSSModules(Emoji, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
