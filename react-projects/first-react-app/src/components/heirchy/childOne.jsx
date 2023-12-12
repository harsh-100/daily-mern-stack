import GrandChildOneComp from "./grandChildOne";

const ChildOneComp = ({ data, setImage }) => {
  let data2 = 35;

  return (
    <>
      <h1>Childe One Compe</h1>
      <GrandChildOneComp data={data2} />
    </>
  );
};

export default ChildOneComp;
