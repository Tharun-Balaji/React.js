import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "./usersSlice";
import { useGetPostsByUserIdQuery } from "../posts/postsSlice";

export default function UserPage() {
	const { userId } = useParams();
	const user = useSelector((state) => selectUserById(state, Number(userId)));

	const {
		data: postsForUsers,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetPostsByUserIdQuery(userId);

	let content;
	if (isLoading) {
		content = <p className="text-center text-gray-500">Loading...</p>;
	} else if (isSuccess) {
		const { ids, entities } = postsForUsers;
		content = ids.map((id) => (
			<li
				key={id}
				className="flex items-center py-2 border-b border-gray-200 hover:bg-gray-100"
			>
				<Link
					to={`/post/${id}`}
					className="text-blue-500 hover:underline mr-2"
				>
					{entities[id].title}
				</Link>
			</li>
		));
	} else if (isError) {
		content = <p className="text-center text-red-500">{error}</p>;
	}

	return (
		<section className="w-full max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
			<h2>{user.name}</h2>
			<ul className="list-none">{content}</ul>
		</section>
	);
}
