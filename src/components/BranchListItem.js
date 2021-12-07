import React from "react";
import './BranchListItem.css';

import Button from "./Button";
import Promotion from "./Promotion";

import { getBranchById } from "../helpers/selectors";
import { hasPromotion } from "../helpers/promotion";


export default function BranchListItem(props) {
  const { id, name, promo, photo, onClick, branches, offerSubmit, user } = props;

  const handleDelete = event => {
    event.preventDefault();
    onClick(id);
  }

  if (user === "Marketer") {

  return (
    <li className="branch">
      <h2>{name}</h2>
      <Promotion
        photo={photo}
        promo={promo}
        hasPromotion={hasPromotion(getBranchById(branches, id))}
        offerSubmit={offerSubmit}
        branches={branches}
        id={id}
        user={user}
        />
      <Button
        text="Delete"
        onClick={handleDelete}
      />
    </li>
  )
  }

  if (user === "End User") {
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
          user={user}
          />
      </li>
    )
  }
}