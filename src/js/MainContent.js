import React from "react"; // Importing React to use JSX

// Count component to display the current count value
function Count(props) {
  return (
    <div className="counter--count">
      <h1>{props.number}</h1> {/* Displaying the count passed as a prop */}
    </div>
  );
}

// MainContent component that manages the counter state
export default function MainContent() {
  // Initializing state for the count, starting at 0
  const [count, setCount] = React.useState(0);

  // Function to increment the count by 1
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  // Function to decrement the count by 1
  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        – {/* Button to decrement the count */}
      </button>
      <Count number={count} />
      {/* Rendering the Count component and passing the current count */}
      <button className="counter--plus" onClick={add}>
        + {/* Button to increment the count */}
      </button>
    </div>
  );
}
