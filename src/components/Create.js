import React, { useState } from "react";

import Button from "./Button";

export default function Create(props) {
  const { onSubmit } = props;
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [promoOffer, setPromoOffer] = useState("");
  const [promoPhoto, setPromoPhoto] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, latitude, longitude, promoOffer, promoPhoto);
  }

  return (
    <main>
      <h2>New Branch</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Enter Branch Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          name="latitude"
          type="number"
          step="0.001"
          placeholder="Enter Latitude"
          value={latitude}
          onChange={(event) => setLatitude(event.target.value)}
        />
        <input
          name="longitude"
          type="number"
          step="0.001"
          placeholder="Enter Longitude"
          value={longitude}
          onChange={(event) => setLongitude(event.target.value)}
        />
        <input
          name="offer"
          type="text"
          placeholder="Enter Offer (if applicable)"
          value={promoOffer}
          onChange={(event) => setPromoOffer(event.target.value)}
        />
        <input
          name="photo"
          type="text"
          placeholder="Enter Photo (if applicable)"
          value={promoPhoto}
          onChange={(event) => setPromoPhoto(event.target.value)}
        />
        <Button
          text="Submit"
        />
      </form>
    </main>
  )
}