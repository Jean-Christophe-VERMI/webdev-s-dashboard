import React, { useState, useEffect, useRef } from "react";
// import useKeypress from "../../hooks/useKeypress";
// import useOnClickOutside from "../../hooks/useOnClickOutside";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DOMPurify from "dompurify";

import InlineEditStyled from "./InlineEditStyled";

const InlineEdit = ({
  textFromData, 
  onChange,
  text,
}) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(textFromData);

  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);

  // const enter = useKeypress("Enter");

  /*
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      //props.onSetText(inputValue);
      setIsInputActive(false);
    }
  });
  */

  const handleChangeText = (event) => {
    onChange(event.target.value, event.target.name);
  }

  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
      setInputValue(textFromData);
    }
  }, [isInputActive]);

  /*
  useEffect(() => {
    if (isInputActive) {
      // if Enter is pressed, save the text and case the editor
      if (enter) {
        textFromData.onSetText(inputValue);
        setIsInputActive(false);
      }
    }
  }, [enter]); // watch the Enter
  */

  return (
    <InlineEditStyled>
      <span className="inline-text" ref={wrapperRef}>
        <span
          ref={textRef}
          onClick={() => setIsInputActive(true)}
          className={`inline-text_copy inline-text_copy--${
            !isInputActive ? "active" : "hidden"
          }`}
        >
          {textFromData}
        </span>
        <TextareaAutosize 
          ref={inputRef}
          value={text}
          name="text"
          onChange={handleChangeText}
          className={`inline-text_input inline-text_input--${
            isInputActive ? "active" : "hidden"
          }`}
        />
      </span>
    </InlineEditStyled>
    
  );
}

export default InlineEdit;