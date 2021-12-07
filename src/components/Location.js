import React, { useState } from "react";

import Button from "./Button";

export default function Location(props) {
  const { onLocation } = props;
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    onLocation(latitude, longitude);
    console.log('newlocation')
  }

  return (
    <main>
      <h2>New location</h2>
    <form autoComplete="off" onSubmit={handleSubmit}>
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
      <Button
      text="Submit"
    />
    </form>
    </main>
  )
}