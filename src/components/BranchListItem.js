import React from "react";

import Button from "./Button";
import Promotion from "./Promotion";

import { getBranchById } from "../helpers/selectors";
import { hasPromotion } from "../helpers/promotion";


export default function BranchListItem(props) {
  const { id, name, promo, photo, onClick, branches, offerSubmit } = props;

  const handleDelete = event => {
    event.preventDefault();
    onClick(id);
  }

  return (
    <li>
      <h2>{name}</h2>
      <Promotion
        photo={photo}
        promo={promo}
        hasPromotion={hasPromotion(getBranchById(branches, id))}
        offerSubmit={offerSubmit}
        branches={branches}
        id={id}
        />
      <Button
        text="Delete"
        onClick={handleDelete}
      />
    </li>
  )
}