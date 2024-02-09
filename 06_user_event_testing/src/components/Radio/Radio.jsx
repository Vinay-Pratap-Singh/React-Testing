import React, { useState } from "react";

const Radio = () => {
  const [gender, setGender] = useState(null);
  return (
    <div>
      <p>Select a gender</p>
      <p>
        Current selected gender :
        <span data-testid="genderValue">
          {gender ? gender : "Please select a gender first"}
        </span>
      </p>
      <input
        type="radio"
        id="male"
        value="male"
        name="gender"
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="female"
        value={"female"}
        name="gender"
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        id="other"
        value={"other"}
        name="gender"
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="other">Other</label>
    </div>
  );
};

export default Radio;
