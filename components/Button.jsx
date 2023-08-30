import React from "react";

const Button = ({ value, calssName }) => {
  return <button className={`${calssName}`}> {value} </button>;
};

export default Button;
