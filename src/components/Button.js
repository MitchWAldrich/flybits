import React from "react";

export default function Button(props) {
  const { text, type, onDelete } = props;
  return <>
  <button type={type} onClick={onDelete}>
    {text}
  </button>
  </>
}