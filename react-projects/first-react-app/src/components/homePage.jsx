import NavbarComponent from "./navbar";

const HomePageComponent = (props) => {
  const { name } = props;
  return (
    <>
      <NavbarComponent />
      <h1>{name}</h1>

      <div style={{ padding: "20px" }}>
        <h3>My home page cards </h3>

        <p>Card 1 </p>
        <p>Card 2 </p>
        <p>Card 3 </p>
      </div>
    </>
  );
};

export default HomePageComponent;
