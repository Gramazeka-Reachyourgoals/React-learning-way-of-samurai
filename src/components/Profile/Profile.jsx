import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state, addPost}) => {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts postsData={state.postsData} addPost={addPost}/>
		</div>
	);
};

export default Profile;