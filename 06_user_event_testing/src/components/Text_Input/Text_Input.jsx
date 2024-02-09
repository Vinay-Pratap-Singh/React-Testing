import React, { useState } from "react";

const Text_Input = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Testing the text input by user event</h1>
      <p data-testid="para">
        Name : {text ? text : "Enter the name in input field"}
      </p>
      <input
        data-testid="inputBox"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
};

export default Text_Input;
