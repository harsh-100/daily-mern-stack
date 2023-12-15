import { useDispatch, useSelector } from "react-redux";

import { updateName } from "../store/actions/user";
import { useState } from "react";

const UserComp = () => {
  const userValue = useSelector((state) => state.user);
  const userName = userValue.name;

  const dispatch = useDispatch();

  const [name, setName] = useState();
  return (
    <>
      <br />
      <h1>UserComponent</h1>
      <h1> {userName}</h1>

      <input
        type="text "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => dispatch(updateName(name))}>Change Name</button>
    </>
  );
};

export default UserComp;
