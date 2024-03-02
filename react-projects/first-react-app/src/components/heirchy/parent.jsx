import ChildOneComp from "./childOne";
import ChildTwoComp from "./childTwo";
import { useState } from "react";

const ParentComp = () => {
  let data = 32;

  //   useContext
  let [image, setImage] = useState();
  return (
    <>
      <h1>ParentComp</h1>
      <ChildOneComp data={data} image={image} setImage={setImage} />
      <ChildTwoComp data={data} image={image} />
    </>
  );
};

export default ParentComp;
