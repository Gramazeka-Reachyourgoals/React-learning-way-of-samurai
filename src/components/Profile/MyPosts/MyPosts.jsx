import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({postsData, addPost}) => {
	let postsElements = postsData.map(el => <Post message={el.message} likesCounter={el.likesCounter}/>);

	const newPostElement = React.createRef();

	const addPostLocal = () => {
		let text = newPostElement.current.value;
		addPost(text);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<button onClick={addPostLocal}>Add post</button>
				<button>Remove</button>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
};

export default MyPosts;