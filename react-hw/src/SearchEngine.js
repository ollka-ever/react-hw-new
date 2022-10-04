import React, { useState } from "react";

export default function SearchEngine() {
  const [city, setCity] = useState();
  const [message, setMessage] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 20°C in ${city}`);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a city" onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
