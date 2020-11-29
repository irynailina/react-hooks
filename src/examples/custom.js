import React, { useEffect, useState } from "react";

function useLogger(value) {
  useEffect(() => {
    console.log("Value changed", value);
  }, [value]);
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue("");
  };

  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

function CustomHooks() {
  const input = useInput("");
  const lastName = useInput("");
  // const [name, setName] = useState("");

  // const changeHandler = (e) => {
  //   setName(e.target.value);
  // };

  useLogger(input.value);

  return (
    <div className="container pt-3">
      <input type="text" {...input.bind} />
      {/* <input type="text" {...lastName} /> */}
      <button className="btn btn-primary" onClick={() => input.clear()}>
        Clear
      </button>
      <hr></hr>
      <h1>{input.value}</h1>
      {/* <h1>{lastName.value}</h1> */}
    </div>
  );
}

export default CustomHooks;
