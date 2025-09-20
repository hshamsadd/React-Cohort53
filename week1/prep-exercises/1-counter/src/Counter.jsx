import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  function countHandler() {
    setCount((count) => count + 1);
  }
  const feedBack = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <>
      <Button countHandler={countHandler} />
      <Count count={count} />
      {feedBack}
    </>
  );
}

export default Counter;
