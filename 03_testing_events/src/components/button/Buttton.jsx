import React, { useState } from "react";

const Buttton = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <h1>Testing the click event</h1>
      <button
        data-testid="toggleButton"
        onClick={() => setIsLoading(!isLoading)}
      >
        Toggle Loading
      </button>
      <p data-testid={isLoading ? "loading" : "loaded"}>
        {isLoading ? "Loading" : "Loaded"}
      </p>
    </div>
  );
};

export default Buttton;
