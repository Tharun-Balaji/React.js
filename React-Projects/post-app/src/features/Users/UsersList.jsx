import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";


export default function UsersList() {

  const users = useSelector(selectAllUsers);

  const renderUsers = users.map((user) => <li key={user.id}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
  </li>
  );

  return (
		<section className="users-list">
			<h2>Users</h2>
			<ul>{renderUsers}</ul>
		</section>
  );
}
