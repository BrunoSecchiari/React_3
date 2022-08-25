import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    { id: 0, name: "Bruno Secchiari", age: 27 },
  ]);

  const addUserHandler = (name, age) => {
    const newUser = {
      id: usersList[0].id + 1,
      name: name,
      age: age,
    };

    setUsersList((prevUsersList) => {
      return [newUser, ...prevUsersList];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
