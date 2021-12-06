import React, { useState } from "react";

import Button from "./Button";

export default function Create(props) {
  const { onSubmit } = props;
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, latitude, longitude)
    console.log('submitted')
  }

  return (
    <main>
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
      <Button
      text="Submit"
      // onClick={onSubmit(name, latitude, longitude)}
    />
    </form>
    </main>
  )
}