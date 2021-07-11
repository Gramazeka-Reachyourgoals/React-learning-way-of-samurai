import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({postsData, newPostText, addPost, updateNewPostText}) => {
	let postsElements = postsData.map(el => <Post message={el.message} likesCounter={el.likesCounter}/>);

	const newPostElement = React.createRef();

	const addPostLocal = () => {
		addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		updateNewPostText(text);
	}

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement} value={newPostText} onChange={onPostChange}/>
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