import HighOrderComponentForButton from "./high-order-comp";

const ButtonClickCountComp = ({ count, increaseCount }) => {
  return (
    <>
      <button onClick={increaseCount}>Click Me - {count} </button>
    </>
  );
};

export default HighOrderComponentForButton(ButtonClickCountComp);
