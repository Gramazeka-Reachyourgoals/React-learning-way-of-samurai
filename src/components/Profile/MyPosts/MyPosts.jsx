import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<button>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>
				<Post message='How are you?' likesCounter='7'/>
				<Post message="How u doin'?" likesCounter='34'/>
			</div>
		</div>
	);
};

export default MyPosts;