import React, { useState } from "react";

import Button from "./Button";
import NewPromotion from "./NewPromotion";

export default function Promotion(props) {
  const { promo, photo, hasPromotion, offerSubmit, branches, id } = props;
  const [promoForm, setPromoForm] = useState('false');

  if (hasPromotion === "true") {
    return (
      <>
        <img className="img" alt={promo} src={photo} />
        {promo}
      </>
    )
  }

  const onClick = event => {
    event.preventDefault();
    console.log('show form')
    setPromoForm("true");
    console.log('pform', promoForm)
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