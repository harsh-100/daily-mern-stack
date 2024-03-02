function BodyComponent(props) {
  console.log(props);

  let { name: userName, age = 10 } = props;

  return (
    <>
      <h2>
        My user has a name {userName} and his is {age}
      </h2>
    </>
  );
}

export default BodyComponent;
