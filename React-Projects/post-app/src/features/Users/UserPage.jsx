import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "./usersSlice";
import { selectAllPosts } from "../posts/postsSlice";

  

export default function UserPage() {

  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUsers = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.userId === user.id);
  });

  const postTitles = postsForUsers.map((post) => <li key={post.id} >
    <Link to={`/post/${post.id}`}>{post.title}</Link>
  </li>);

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  )
}
