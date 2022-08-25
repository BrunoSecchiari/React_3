import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    let nameInputValue = nameInputRef.current.value;
    let ageInputValue = ageInputRef.current.value;

    if (
      nameInputValue.trim().length === 0 ||
      ageInputValue.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message:
          "Please populate both fields properly. Both of them must contain at least one character.",
      });
    } else if (+ageInputValue <= 0) {
      setError({
        title: "Invalid Age",
        message:
          "The entered age cannot be validated properly. Please enter an age greater than or equal to one.",
      });
    } else {
      props.onAddUser(nameInputValue, ageInputValue);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
