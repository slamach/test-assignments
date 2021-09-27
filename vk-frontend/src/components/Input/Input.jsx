import React, { useState, useEffect, useRef } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Input.module.css';
import EmojiButton from './EmojiButton/EmojiButton'
import EmojiPicker from './EmojiPicker/EmojiPicker';

const Input = (props) => {
  const AREA_LINE_HEIGHT = 18;
  const AREA_PADDING = 9;
  const AREA_MIN_ROWS = 1;
  const AREA_MAX_ROWS = 10;

  const [inputValue, setInputValue] = useState("");
  const [rows, setRows] = useState(AREA_MIN_ROWS);
  const [emojiPickerVisibility, setEmojiPickerVisibility] = useState(false);

  const areaRef = useRef(null);

  useEffect(() => {
    const previousRows = areaRef.current.rows;
  	areaRef.current.rows = AREA_MIN_ROWS;
		const currentRows = ~~((areaRef.current.scrollHeight - AREA_PADDING) / AREA_LINE_HEIGHT);

    if (currentRows === previousRows) {
    	areaRef.current.rows = currentRows;
    }

    if (currentRows > AREA_MAX_ROWS) {
			areaRef.current.rows = AREA_MAX_ROWS;
			areaRef.current.scrollTop = areaRef.current.scrollHeight;
		}

    setRows(currentRows < AREA_MAX_ROWS ? currentRows : AREA_MAX_ROWS);
  }, [props]);

  const updateInputValue = (value) => {
    setInputValue(value);
  }

  const handleInput = (event) => {
    updateInputValue(event.target.value);
  }

  const addInputValue = (value) => {
    updateInputValue(inputValue + value);
  }

  const showEmojiPicker = () => {
    setEmojiPickerVisibility(true);
  }

  const hideEmojiPicker = () => {
    setEmojiPickerVisibility(false);
  }

  return (
    <div styleName="input-container">
      <EmojiPicker addInputValue={addInputValue} emojiPickerVisibility={emojiPickerVisibility}
                   showEmojiPicker={showEmojiPicker} hideEmojiPicker={hideEmojiPicker} />
      <div styleName="textarea-container">
        <textarea styleName="input-area" ref={areaRef} rows={rows} value={inputValue} placeholder="Ваше сообщение"
                  autoFocus onInput={handleInput} />
        <EmojiButton emojiPickerVisibility={emojiPickerVisibility} showEmojiPicker={showEmojiPicker} hideEmojiPicker={hideEmojiPicker} />
      </div>
    </div>
  );
}

export default CSSModules(Input, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });