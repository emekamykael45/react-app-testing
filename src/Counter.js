import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);

  return (
    <React.Fragment>
      <h1>This is a counter app</h1>
      <div id="counter-value">{counter}</div>
      <button
        id="decrement-btn"
        onClick={() => setcounter(counter === 0 ? 0 : counter - 1)}
      >
        Decrement
      </button>
      <button id="increment-btn" onClick={() => setcounter(counter + 1)}>
        Increment
      </button>
    </React.Fragment>
  );
};

export default Counter;
