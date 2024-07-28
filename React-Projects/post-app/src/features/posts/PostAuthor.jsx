import { useSelector } from "react-redux";
import { selectAllUsers } from "../Users/usersSlice";
import { Link } from "react-router-dom";


const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);

    return (
		<span>
            by {author ? <Link to={`/user/${userId}`} className="text-blue-500 hover:underline px-2 py-1 rounded-md font-medium" >
                {author.name}
            </Link> : "Unknown author"}
		</span>
	);
}
export default PostAuthor