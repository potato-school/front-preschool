import React from "react";
import { useRecoilState } from "recoil";
import Button from "../../shared/components/buttom";
import { counterState } from "../store";

export default function IncreaseButton() {
  const [count, setCount] = useRecoilState(counterState);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <Button label="증가" size="medium" color="primary" onClick={onClick} />
  );
}
