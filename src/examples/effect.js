import React, { useState, useEffect } from "react";

const effect = () => (
    const [type, setType] = useState("users");
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
      x: 0,
      y: 0,
    });
  
    // useEffect(() => {
    //   console.log('render');
    // }, [])
  
    useEffect(() => {
      // console.log("Type changed:", type);
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((response) => response.json())
        .then((json) => setData(json));
      return () => {
        console.log("clean type");
      };
    }, [type]);
  
    function mouseMoveHandler(e) {
      return setPos({ x: e.clientX, y: e.clientY });
    }
  
    useEffect(() => {
      console.log("ComponentDidMount");
      window.addEventListener("mousemove", mouseMoveHandler);
      return () => {
        window.removeEventListener("mousemove", mouseMoveHandler);
      };
    }, []);
  
    return (
      <div>
        <h1>Source: {type}</h1>
        <button onClick={() => setType("users")}>Users</button>
        <button onClick={() => setType("todos")}>Todo</button>
        <button onClick={() => setType("posts")}>Posts</button>
        {/* <pre>{JSON.stringify(data, null, " ")}</pre> */}
        <pre>{JSON.stringify(pos, null, " ")}</pre>
      </div>
    );
);

export default effect;