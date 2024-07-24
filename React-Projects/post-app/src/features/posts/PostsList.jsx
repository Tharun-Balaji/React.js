import { useSelector } from "react-redux";
import { selectPostIds, useGetPostsQuery } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
	const { isLoading, error, isSuccess, isError } = useGetPostsQuery();

	const orderedPosts = useSelector(selectPostIds);

	let content;
	if (isLoading) {
		content = <p className="text-center py-4">Loading...</p>;
	} else if (isSuccess) {
		content = (
			<ul className="list-none space-y-4 px-4">
				{orderedPosts.map((postId) => (
					<PostsExcerpt key={postId} postId={postId} />
				))}
			</ul>
		);
	} else if (isError) {
		content = <p className="text-center text-red-500 py-4">{error}</p>;
	}

	return (
		<section className="bg-gray-100 rounded-lg shadow-md px-4 py-8 mx-auto max-w-md mt-16">
			{content}
		</section>
	);
};

export default PostsList;
