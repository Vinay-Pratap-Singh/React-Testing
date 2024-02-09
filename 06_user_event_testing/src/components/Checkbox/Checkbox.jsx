import React, { useState } from "react";

const Checkbox = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="agree"
          onClick={() => setIsDisabled(!isDisabled)}
        />
        <label htmlFor="agree">Agree to terms and condition</label>
      </div>
      <button disabled={!isDisabled}>Submit</button>
    </div>
  );
};

export default Checkbox;
