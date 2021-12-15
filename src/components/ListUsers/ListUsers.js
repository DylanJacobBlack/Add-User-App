import Card from "../UI/Card";
import User from "./User";

const ListUsers = (props) => {
  if (props.users.length === 0) {
    return <div></div>;
  }

  return (
    <Card>
      {props.users.map((user) => {
        return <User username={user.username} age={user.age} key={user.id}/>;
      })}
    </Card>
  );
};

export default ListUsers;
