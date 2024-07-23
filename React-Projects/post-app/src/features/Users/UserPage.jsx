import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "./usersSlice";
import { selectAllPosts, selectPostsByUser } from "../posts/postsSlice";

  

export default function UserPage() {

  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUsers = useSelector((state) => selectPostsByUser(state, Number(userId)));

  const postTitles = postsForUsers.map((post) => <li key={post.id} >
    <Link to={`/post/${post.id}`}>{post.title}</Link>
  </li>);

  return (
		<section className="user-page">
			<h2>{user.name}</h2>

			<ul>{postTitles}</ul>
		</section>
  );
}
