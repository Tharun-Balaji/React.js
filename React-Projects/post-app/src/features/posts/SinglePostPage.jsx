import {useSelector} from 'react-redux';
import { selectPostById } from './postsSlice';
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionButtons from "./ReactionButtons"
import { useParams , Link} from 'react-router-dom';


export default function SinglePostPage() {
    const { postId } = useParams()

    console.log(postId)

    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
		<article>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<p className="postCredit">
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</p>
			<ReactionButtons post={post} />
			<Link className="link" to={`/post/edit/${post.id}`}>Edit Post</Link>
		</article>
	);
}
