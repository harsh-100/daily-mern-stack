import HighOrderComponentForButton from "./high-order-comp";

const ButtonHoverComponent = ({ count, increaseCount }) => {
  return (
    <>
      <button onMouseEnter={increaseCount}>Hover Me - {count} </button>
    </>
  );
};

export default HighOrderComponentForButton(ButtonHoverComponent);
