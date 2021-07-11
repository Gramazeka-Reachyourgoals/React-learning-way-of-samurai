import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, addPost, updateNewPostText}) => {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts 
				postsData={profilePage.postsData} 
				newPostText={profilePage.newPostText}
				addPost={addPost}
				updateNewPostText={updateNewPostText}/>
		</div>
	);
};

export default Profile;