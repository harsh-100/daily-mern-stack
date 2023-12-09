import React, { useEffect, useMemo, useState } from "react";

// it returns a memoized value
// it is used to improve the performance of react app
const LearnUseMemo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const [newState, setNewState] = useState(0);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  // const callHimToGetHisNumber = (num) => {
  //   console.log("🚀 ~ file: Memo.jsx ~ line 12 ~ countNumber ~ num", num);
  //   for (let i = 0; i <= 1000000000; i++) {}
  //   return num;
  // };

  // const checkData = callHimToGetHisNumber(myNum);
  //   const checkData = useMemo(() => {
  //     return callHimToGetHisNumber(myNum);
  //   }, [myNum]);

  // function changeValue() {
  //   setShow(!show);
  // }

  function increaseTimeCount(value) {
    console.log("Before calc");

    for (let i = 0; i < 1000000000; i++) {}
    console.log("After calc");
    return value;
  }

  // useEffect(() => {
  //   setNewState(increaseTimeCount(myNum));
  // }, [myNum]);

  // memorized value
  let calculatedValue = useMemo(() => {
    return increaseTimeCount(myNum);
  }, [myNum]);

  // let calculatedValue = increaseTimeCount(myNum);
  return (
    <>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p> My new number : {calculatedValue} </p>

      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
    </>
  );
};

export default LearnUseMemo;
