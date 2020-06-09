import React, { useState, useEffect, useRef } from "react";
import useKeypress from "../../hooks/useKeypress";
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

  const enter = useKeypress("Enter");

  const handleChangeText = (event) => {
    onChange(event.target.value, event.target.name);
  }

  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
      setInputValue(textFromData);
      console.log(inputValue);
    }
  }, [isInputActive]);

  useEffect(() => {
    if (isInputActive) {
      // if Enter is pressed, save the text and case the editor
      if (enter) {
        textFromData.onSetText(inputValue);
        setIsInputActive(false);
      }
    }
  }, [enter]); // watch the Enter

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
        <input
          ref={inputRef}
          // set the width to the input length multiplied by the x height
          // it's not quite right but gets it close
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