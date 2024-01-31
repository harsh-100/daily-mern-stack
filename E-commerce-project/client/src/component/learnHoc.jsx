import React, { useState } from "react";

const withCounter = (WrappedComponent, eventType) => {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    const eventHandlers = {
      click: { onClick: incrementCount },
      hover: { onMouseOver: incrementCount },
    };

    return (
      <WrappedComponent
        incrementCount={incrementCount}
        count={count}
        {...props}
      />
    );
  };
};
// Component with count increment on click
const ClickCounter = ({ incrementCount, count }) => {
  return (
    <div>
      <button onClick={incrementCount}>Click Me ({count})</button>
    </div>
  );
};
const ClickCounterWithCounter = withCounter(ClickCounter);
// Component with count increment on hover
const HoverCounter = ({ incrementCount, count }) => {
  return (
    <div>
      <button onMouseOver={incrementCount}>Hover Me ({count})</button>
    </div>
  );
};

const NewMeth = withCounter(HoverCounter);
// Usage
function LearnHOC() {
  return (
    <div>
      <ClickCounterWithCounter />
      <NewMeth />
    </div>
  );
}

export default LearnHOC;
