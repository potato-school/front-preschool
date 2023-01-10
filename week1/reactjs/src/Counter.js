import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount((count) => ++count);
  };

  const onDecrease = () => {
    setCount((count) => --count);
  };

  return (
    <>
      <div>
        <span>카운트: </span>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={onIncrease}>증가</button>
        <button onClick={onDecrease}>감소</button>
      </div>
    </>
  );
}
