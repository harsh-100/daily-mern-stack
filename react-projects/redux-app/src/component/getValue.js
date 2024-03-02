import { useSelector } from "react-redux";

const GetValue = () => {
  const value = useSelector((state) => state);
  return (
    <>
      <h1>THe value is {value.count} </h1>
    </>
  );
};

export default GetValue;
