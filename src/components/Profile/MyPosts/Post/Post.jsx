import React from 'react';
import s from './Post.module.css';

const Post = ({message, likesCounter}) => {
	return (
		<div className={s.item}>
			<img src="https://greenangletv.com/wp-content/uploads/2020/11/wed-blog-shutterstock_1703194387_low_nwm.jpg" alt="" />
			{message}
			<div>
				<span>like {likesCounter}</span>
			</div>
		</div>	
	)
}

export default Post;