import React from "react";
import BranchListItem from "./BranchListItem";

export default function BranchList(props) {
  const { branches } = props;

  const parsedBranches = branches.map(data =>
    <BranchListItem
    key={data.id}
    name={data.name}
    />
    )

  return (
    <ul>
      {parsedBranches}
    </ul>
  )
}