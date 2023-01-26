import React from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../store";

export default function CountNumber() {
  const [count] = useRecoilState(counterState);

  return (
    <div>
      <span>카운트: </span>
      <span>{count}</span>
    </div>
  );
}
