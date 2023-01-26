import React, { useState } from "react";
import IncreaseButton from "./components/IncreaseButton";
import DecreaseButton from "./components/DecreaseButton";
import CountNumber from "./components/CountNumber";

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
      <CountNumber count={count} />
      <div>
        <IncreaseButton onClick={onIncrease} />
        <DecreaseButton onClick={onDecrease} />
      </div>
    </>
  );
}
