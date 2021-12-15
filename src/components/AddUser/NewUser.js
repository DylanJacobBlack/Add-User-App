import Card from "../UI/Card";
import "./NewUser.css";
import { useState } from "react";

const NewUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };

    if (enteredUsername.trim() === '') {
      props.onFlagWarning('Please enter username.')
    } else if (enteredAge === '') {
      props.onFlagWarning('Please enter age.')
    } else if (enteredAge <= 0) {
      props.onFlagWarning('Please enter valid age.')
    } else {
      props.onSaveUserData(userData);
    }
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className="new-user__controls">
        <div className="new-user__control">
          <label>Username: </label>
          <input
            onChange={usernameHandler}
            type="text"
            value={enteredUsername}
          />
        </div>
        <div className="new-user__control">
          <label>Age in years: </label>
          <input onChange={ageHandler} type="number" value={enteredAge} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default NewUser;
