import React from "react";
import BranchListItem from "./BranchListItem";

export default function BranchList(props) {
  const { branches, onDelete, user } = props;

  const parsedBranches = branches.map(data =>
    <>
    <BranchListItem
    key={data.id}
    id={data.id}
    name={data.name}
    promo={data.promoOffer}
    photo={data.promoPhoto}
    onClick={onDelete}
    branches={branches}
    user={user}
    />
    {/* <NewPromotion
      offerSubmit={offerSubmit}
      branches={branches}
      id={data.id}
      /> */}
      </>
    )

  return (
    <ul>
      {parsedBranches}
    </ul>
  )
}