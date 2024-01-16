import React, { useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <h1>Testing the check (toggle) event</h1>
      <input
        data-testid="agreement"
        type="checkbox"
        id="agreement"
        name="agreement"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label htmlFor="agreement">I agree to the terms and conditions</label>
      <button data-testid="agreementButton" disabled={!isChecked}>
        Submit
      </button>
    </div>
  );
};

export default CheckBox;
