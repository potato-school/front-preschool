import React, { useState } from "react";
import IncreaseButton from "./components/IncreaseButton";
import DecreaseButton from "./components/DecreaseButton";

export default function Counter() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <span>카운트: </span>
        <span>{count}</span>
      </div>
      <div>
        <IncreaseButton onClick={onIncrease} />
        <DecreaseButton onClick={onDecrease} />
      </div>
    </>
  );
}
