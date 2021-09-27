import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './EmojiSection.module.css';
import Emoji from './Emoji/Emoji'

const EmojiSection = (props) => {
  return (
    <div styleName="emoji-section">
      <h3 styleName="emoji-section__title">{props.title}</h3>
      <ul styleName="emoji-section__list">
      {
          props.items?.map(item =>
            <li styleName="emoji-section__item">
              <Emoji content={item} addInputValue={props.addInputValue} addEmojiToRecent={props.addEmojiToRecent} />
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default CSSModules(EmojiSection, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
