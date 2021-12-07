import React from "react";
import './Button.css';

export default function Button(props) {
  const { text, type, onClick } = props;
  return <>
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  </>
}