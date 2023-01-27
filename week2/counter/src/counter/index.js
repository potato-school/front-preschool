import React, { useState } from "react";
import CountNumber from "./components/CountNumber";
import DecreaseButton from "./components/DecreaseButton";
import IncreaseButton from "./components/IncreaseButton";

function Counter() {
  const [count, setCount] = useState(0);

  const onClickIncrease = () => {
    setCount(count + 1);
  };

  const onClickDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <CountNumber count={count} />
      <div>
        <IncreaseButton label="증가" onClick={onClickIncrease} />
        <DecreaseButton label="감소" onClick={onClickDecrease} />
      </div>
    </div>
  );
}

export default Counter;
