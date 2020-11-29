import React, { useState, useCallback } from "react";
import ItemsList from "./examples/ItemsList";

const callback = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "blue" : "black",
  };

  const generateItemsFromAPI = useCallback(
    (indexNumber) => {
      return new Array(count)
        .fill("")
        .map((_, idx) => `Element ${idx + indexNumber}`);
    },
    [count]
  );

  return (
    <>
      <h1 style={styles}>Count of elements: {count}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Add
      </button>
      <button
        className="btn btn-warning"
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>
      <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
};

export default callback;
