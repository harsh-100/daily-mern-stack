import "./App.css";
function AppComponent() {
  let fName = "Harsh";
  let lName = "agarwal";

  function handleClick() {
    console.log("Check");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitttt");
  }
  return (
    <>
      {/* <Headers /> */}
      <h1>My name is Tiger</h1>
      <p>this is text</p>
      <h2>
        My user has a name {fName} {lName}
      </h2>
      <button onClick={handleClick}>My Button</button>

      <form onSubmit={handleSubmit} className="form-comp">
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" value="John" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" value="Doe" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>

      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOG9mKd27bxD_jENN7a0LQMsD5Y4IXaYNlpybMKD_4&s" /> */}
    </>
  );
}

export default AppComponent;
