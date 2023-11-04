import React from "react";
import { useRef } from "react";

const Counter = () => {
  const count = useRef(0);

  const increment = () => {
    count.current = count.current + 1;
    console.log(count.current); // This won't trigger a re-render.
  };
  return (
    <div>
        <h1>Uses of useRef</h1>
      <p>Count: {count.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
