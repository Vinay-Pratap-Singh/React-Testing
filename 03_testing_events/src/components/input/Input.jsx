import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Testing the change event</h1>
      <p data-testid="displayName">Entered Name : {name}</p>
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        id="name"
        data-testid="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </div>
  );
};

export default Input;
