import { useEffect, useState } from "react";

import NavbarComponent from "./navbar";

/**
 * 
 *camelcase = camelCase
 pascalcase = PascalCase
 kebabcase = kebab-case
 snakeCase = snake_case 

 */

const HomePageComponent = (props) => {
  console.log("the value of props", props);

  const [cardNumber, setCardNumber] = useState(12);
  const [userName, setUserName] = useState();
  const { name, age } = props;

  console.log("The value of age is ", age);

  const handleClick = () => {
    setCardNumber(cardNumber + 1);
  };
  const handleClick2 = () => {
    console.log("not in use");
    setUserName("newUser");
  };
  function myFunc() {
    console.log("Hello world");
  }

  useEffect(myFunc, [cardNumber]);

  // useEffect();
  return (
    <>
      <h1>{name}</h1>

      <div style={{ padding: "20px" }}>
        <h3>My home page cards </h3>

        <p>Card {cardNumber} </p>

        <button onClick={handleClick}>Change number</button>
        <button onClick={handleClick2}>Not in use</button>

        {/* {age > 18 ?<> <p>Card 2 </p> <p>Card 3 </p></>: <></>} */}
        {age > 18 && (
          <>
            {" "}
            <p>Card 2 </p> <p>Card 3 </p>
          </>
        )}
      </div>
    </>
  );
};

export default HomePageComponent;
