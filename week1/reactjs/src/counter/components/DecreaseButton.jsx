import React from "react";
import { useRecoilState } from "recoil";
import Button from "../../shared/components/buttom";
import { counterState } from "../store";

export default function DecreaseButton() {
  const [count, setCount] = useRecoilState(counterState);

  const onClick = () => {
    setCount(count - 1);
  };

  return (
    <Button
      label="감소"
      size="small"
      color="secondary"
      onClick={onClick}
    ></Button>
  );
}
