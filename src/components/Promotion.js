import React, { useState } from "react";

import Button from "./Button";
import NewPromotion from "./NewPromotion";

export default function Promotion(props) {
  const { promo, photo, hasPromotion, offerSubmit, branches, id, user } = props;
  const [promoForm, setPromoForm] = useState('false');

  if (user === "Marketer") {

    if (hasPromotion === "true") {
      return (
        <>
          <img className="img" alt={promo} src={photo} />
          <h3>{promo}</h3>
        </>
      )
    }

    const onClick = event => {
      event.preventDefault();
      setPromoForm("true");
    }

    if (promoForm === "true") {
      return (
        <NewPromotion
          offerSubmit={offerSubmit}
          branches={branches}
          id={id}
        />
      )
    }

    if (promoForm === "false") {

      return (
        <Button
          text="Add Promotion"
          type="submit"
          onClick={onClick}
        />
      )
    }
  }

  if (user === "End User") {
    if (hasPromotion === "true") {
      return (
        <>
          <img className="img" alt={promo} src={photo} />
          {promo}
        </>
      )
    }

    if (hasPromotion === "false") {
      return (
        <>
          There are no promotions at this time
        </>
      )
    }
  }
}