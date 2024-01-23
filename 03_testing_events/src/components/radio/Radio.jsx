import React from "react";

const Radio = () => {
  return (
    <div>
      <input type="radio" id="male" name="gender" value="male" />
      <label htmlFor="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label htmlFor="female">Female</label>
      <input type="radio" id="other" name="gender" value="other" />
      <label htmlFor="other">Other</label>
    </div>
  );
};

export default Radio;
