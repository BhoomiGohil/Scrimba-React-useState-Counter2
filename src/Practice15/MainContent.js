import React from "react";

function Count(props) {
  return (
    <div className="counter--count">
      <h1>{props.number}</h1>
    </div>
  );
}

export default function MainContent() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        –
      </button>
      <Count number={count} />
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}
