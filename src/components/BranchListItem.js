import React from "react";

import Button from "./Button";

export default function BranchListItem(props) {
  const { id, name, onDelete } = props;

  const handleDelete = event => {
    event.preventDefault();
    onDelete(id);
  }

  return (
    <li>
      <h2>{name}</h2>
      <Button
        text="Delete"
        onDelete={handleDelete}
      />
    </li>
  )
}