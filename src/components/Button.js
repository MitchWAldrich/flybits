import React from "react";

export default function Button(props) {
  const { text, type } = props;
  return <>
  <button type={type}>
    {text}
  </button>
  </>
}