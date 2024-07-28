import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";

export default function UsersList() {
	const users = useSelector(selectAllUsers);

	const renderUsers = users.map((user) => (
		<li
			key={user.id}
			className="flex items-center py-2 border-b border-gray-200 hover:bg-gray-100"
		>
			<Link
				to={`/user/${user.id}`}
				className="text-blue-500 hover:underline mr-2"
			>
				{user.name}
			</Link>
		</li>
	));

	return (
		<section className="w-full max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
			<h2>Users</h2>
			<ul className="list-none">{renderUsers}</ul>
		</section>
	);
}
