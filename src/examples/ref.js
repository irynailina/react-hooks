import React, { useState, useEffect, useRef } from "react";
// если мы хотим сохранить что-то между рендерами, мы используем useRef
// сохраняет состояние при реренедере, но не вызывает рендер

const ref = () => (
    // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current++;
    // console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <>
      <h1>Count of renders: {renderCount.current}</h1>
      <h2>Prev state: {prevValue.current}</h2>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      <button className="btn btn-success" onClick={focus}>
        Focus
      </button>
    </>
  );
);

export default ref;