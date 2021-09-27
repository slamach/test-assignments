import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import styles from './EmojiKeyboard.module.css';
import EmojiSection from './EmojiSection/EmojiSection';

const EmojiKeyboard = (props) => {
  const [emojiSections, setEmojiSections] = useState(null);

  const getSections = () => {
    fetch('cfg/sections.json')
      .then((res) => res.json())
      .then((data) => {
        setEmojiSections(data.sectionsList);
    });
  }

  useEffect(() => {
    getSections()
  }, []);

  return (
    <div styleName="emoji-keyboard">
      <ul styleName="emoji-keyboard__list">
        {
          props.activeTab === 'recent' ?
          <li styleName="emoji-keyboard__item">
            <EmojiSection title='Часто используемые' items={props.recentEmojis}
                          addInputValue={props.addInputValue} addEmojiToRecent={props.addEmojiToRecent} />
          </li> :
          emojiSections?.map(section =>
            <li styleName="emoji-keyboard__item">
              <EmojiSection title={section.title} items={section.items}
                            addInputValue={props.addInputValue} addEmojiToRecent={props.addEmojiToRecent} />
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default CSSModules(EmojiKeyboard, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
