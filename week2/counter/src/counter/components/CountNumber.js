import React from "react";

function CountNumber(props) {
  const { count } = props;
  return (
    <div>
      <span>카운트: </span>
      <span>{count}</span>
    </div>
  );
}

export default CountNumber;
