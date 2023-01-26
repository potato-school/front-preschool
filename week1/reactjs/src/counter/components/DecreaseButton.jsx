import React from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../store";

export default function DecreaseButton() {
  const [count, setCount] = useRecoilState(counterState);

  const onClick = () => {
    setCount(count - 1);
  };

  return <button onClick={onClick}>감소</button>;
}
