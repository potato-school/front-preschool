import React from "react";
import IncreaseButton from "./components/IncreaseButton";
import DecreaseButton from "./components/DecreaseButton";
import CountNumber from "./components/CountNumber";

export default function Counter() {
  return (
    <>
      <CountNumber />
      <div>
        <IncreaseButton />
        <DecreaseButton />
      </div>
    </>
  );
}
