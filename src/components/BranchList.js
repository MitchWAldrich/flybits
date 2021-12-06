import React from "react";
import BranchListItem from "./BranchListItem";

export default function BranchList(props) {
  const { branches, onDelete } = props;

  const parsedBranches = branches.map(data =>
    <BranchListItem
    key={data.id}
    id={data.id}
    name={data.name}
    onDelete={onDelete}
    />
    )

  return (
    <ul>
      {parsedBranches}
    </ul>
  )
}