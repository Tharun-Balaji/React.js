import { useSelector, useDispatch } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const dispatch = useDispatch();

    const orderedPosts = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }else{
            return;
        }
    }, [postStatus, dispatch])

    if (postStatus === 'idle'){
        return(
            <div>Please Wait while We are Fetching Data</div>
        )
    }
    let content;
    if (postStatus === "loading") {
        content = <p>Loading...</p>
    } else if (postStatus === "succeeded") {
        content = orderedPosts.map((postId) => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postStatus === "failed") {
        content = <p>{error}</p>;
    }

    return <section>
        {content}
    </section>
}
export default PostsList