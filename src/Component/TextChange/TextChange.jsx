import React from "react";
import { useRef } from "react";

const TextChange = () => {
  const divRef = useRef(null);

  const changeText = () => {
    if (divRef.current) {
      divRef.current.textContent = "Text Changed!";
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }} ref={divRef}>Original Text</div>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
};

export default TextChange;
