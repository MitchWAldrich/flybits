import React, { useState } from "react";

import Button from "./Button";
import { getBranchById } from "../helpers/selectors";

export default function NewPromotion(props) {
  const { offerSubmit, branches, id } = props;
  const [promoOffer, setPromoOffer] = useState("");
  const [promoPhoto, setPromoPhoto] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const branch = getBranchById(branches, id)
    offerSubmit(branch, promoOffer, promoPhoto)
  }

  return (
    <main>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          name="offer"
          type="text"
          placeholder="Enter Offer Details"
          value={promoOffer}
          onChange={(event) => setPromoOffer(event.target.value)}
        />
        <input
          name="photo"
          type="text"
          placeholder="Enter Photo"
          value={promoPhoto}
          onChange={(event) => setPromoPhoto(event.target.value)}
        />
        <Button
          text="Submit"
          onClick={handleSubmit}
        />
      </form>
    </main>
  )
}