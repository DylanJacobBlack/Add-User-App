import { useState } from "react";

import "./App.css";
import NewUser from "./components/AddUser/NewUser";
import ListUsers from "./components/ListUsers/ListUsers";
import Modal from "./components/UI/Modal";

function App() {
  const [userData, setUserData] = useState([]);
  const [warning, setWarning] = useState(null);

  const onSaveUserDataHandler = (data) => {
    setUserData((prevUserList) => {
      return [...prevUserList, { ...data, id: Math.random().toString() }];
    });
  };

  const onFlagWarningHandler = (data) => {
    setWarning(data);
  };

  return (
    <div>
      <NewUser
        onSaveUserData={onSaveUserDataHandler}
        onFlagWarning={onFlagWarningHandler}
      />
      <ListUsers users={userData} />
      {warning && (
        <Modal warning={warning} onFlagWarning={onFlagWarningHandler} />
      )}
    </div>
  );
}

export default App;
