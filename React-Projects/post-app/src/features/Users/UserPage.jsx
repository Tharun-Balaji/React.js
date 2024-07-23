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
    error
  } = useGetPostsByUserIdQuery(userId);

  let content;
  if (isLoading) {
		content = <p>Loading...</p>;
  } else if (isSuccess) {
		const { ids, entities } = postsForUsers;
		content = ids.map((id) => (
			<li key={id}>
				<Link to={`/post/${id}`}>{entities[id].title}</Link>
			</li>
		));
  } else if (isError) {
		content = <p>{error}</p>;
  }

  return (
		<section className="user-page">
			<h2>{user.name}</h2>

			<ul>{content}</ul>
		</section>
  );
}
