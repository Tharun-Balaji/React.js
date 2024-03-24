import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
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
    // let content;
    if (postStatus === "loading") {
      return (<p>Loading...</p>);
    } else if (postStatus === "succeeded") {
      return ( posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((post) => <PostsExcerpt key={post.id} post={post} />))
    } else if (postStatus === "failed") {
      return <p>{error}</p>;
    }

    
}
export default PostsList