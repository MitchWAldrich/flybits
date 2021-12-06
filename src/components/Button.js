import React from "react";

export default function Button(props) {
  const { text, type, onClick } = props;
  return <>
  <button type={type} onClick={onClick}>
    {text}
  </button>
  </>
}