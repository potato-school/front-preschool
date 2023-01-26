import React from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../store";

export default function IncreaseButton() {
  const [count, setCount] = useRecoilState(counterState);

  const onClick = () => {
    setCount(count + 1);
  };

  return <button onClick={onClick}>증가</button>;
}
