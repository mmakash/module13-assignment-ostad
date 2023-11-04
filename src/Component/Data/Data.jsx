import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import "./Data.css";

const Data = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  useEffect(() => {
    (() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setData(json));
    })();
  }, []);
  const handleData = () => {
    setShowData(!showData);
  }
  return (
    <div>
      <h1>Click the button to read data</h1>
      {showData && (
        <div>
          {data.map((element) => (
            <SingleData element={element} key={element.id} />
          ))}
        </div>
      )}
      <button onClick={handleData}>Read Data</button>
    </div>
  );
};

export default Data;
