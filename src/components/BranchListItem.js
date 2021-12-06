import React from "react";

export default function BranchListItem(props) {
  const { name } = props;

  return (
    <li>
      <h2>{name}</h2>
    </li>
  )
}