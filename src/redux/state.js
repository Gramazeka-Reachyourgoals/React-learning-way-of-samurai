import {rerenderEntireTree} from "../render";

let state = {
	profilePage: {
		postsData: [{
				id: 1,
				message: 'How are you?',
				likesCounter: '7'
			},
			{
				id: 2,
				message: "How u doin'?",
				likesCounter: '34'
			},
			{
				id: 3,
				message: 'hjsafnhs',
				likesCounter: '4'
			},
			{
				id: 4,
				message: 'Poni',
				likesCounter: '5'
			}
		],
		newPostText: 'My post text'
	},
	dialogsPage: {
		messages: [{
				id: 1,
				message: 'Hi!'
			},
			{
				id: 2,
				message: 'How are you'
			},
			{
				id: 3,
				message: 'MaaaaNNNN!!'
			},
			{
				id: 4,
				message: 'YomsVIKINGI'
			},
			{
				id: 5,
				message: 'Yo'
			}
		],
		dialogs: [{
				id: 1,
				name: 'Ihor'
			},
			{
				id: 2,
				name: 'Kolya'
			},
			{
				id: 3,
				name: 'Shora'
			},
			{
				id: 4,
				name: 'Gregory'
			},
			{
				id: 5,
				name: 'LuxuryBurg'
			}
		]
	},
	sidebar: {
		friendsList: [{
				id: 1,
				name: 'Andrew'
			},
			{
				id: 2,
				name: 'Sasha'
			},
			{
				id: 3,
				name: 'Sveta'
			},
		]
	}
}

window.state = state;

export const addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCounter: '25'
	};

	state.profilePage.postsData.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state, addPost, updateNewPostText);
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state, addPost, updateNewPostText);
}

export default state;