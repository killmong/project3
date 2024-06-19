/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const Buttons = (props) => {
  const { text, className } = props;
  return (
    <div>
      <button className={className}>{text}</button>
    </div>
  );
};
export default Buttons;
