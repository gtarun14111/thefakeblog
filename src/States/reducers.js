import {
	GET_USER_FIRST_NAME,
	GET_USER_LAST_NAME,
	GET_USER_EMAIL,
	GET_USER_PASSWORD,
	GET_BLOG_HEADING,
	GET_BLOG_CONTENT,
	GET_BLOG_AUTHOR,
	ADD_BLOG_ITEM,
	BLOG_SELECTED,
	GET_COMMENT_BODY,
	GET_COMMENTATOR,
	GET_COMMENT_HEADING,
	ADD_COMMENT
} from './constants';

const defaultUser = {
	firstname: "",
	lastname: "",
	email: "",
	password: "",
	isSignedIn: false
}


const defaultBlog = {
	author: "",
	heading: "",
	image: "",
	content: "",
	blogId: 0,
	totalBlogs: {
		author: "",
		heading: "",
		image: "",
		blogId: 0,
		content: ""
	}
}

const defaultComment = {
	blogId: 0,
	commentHeading: "",
	commentBody: "",
	commentator: "",
	totalComments: [{
		blogId: 0,
		commentHeading: "",
		commentbody: "",
		commentator: ""
	}]

}


export const userActions = (state = defaultUser, action = {}) => {
	switch(action.type) {
		case GET_USER_FIRST_NAME: return Object.assign({}, state, {firstname: action.payload});
		case GET_USER_LAST_NAME: return Object.assign({}, state, {lastname: action.payload})
		case GET_USER_EMAIL: return Object.assign({}, state, {email: action.payload})
		case GET_USER_PASSWORD: return Object.assign({}, state, {password: action.payload})
		default: return state;
	}
}

export const blogActions = (state = defaultBlog, action = {}) => {
	switch(action.type) {
		case GET_BLOG_HEADING: return Object.assign({}, state, {heading: action.payload});
		case GET_BLOG_CONTENT: return Object.assign({}, state, {content: action.payload});
		case GET_BLOG_AUTHOR: return Object.assign({}, state, {author: action.payload});
		case ADD_BLOG_ITEM: return Object.assign({}, state, {totalBlogs: [].concat(state.totalBlogs,
			Object.assign({}, {
				blogId: state.blogId + 1,
				heading: state.heading,
				content: state.content,
				author: state.author,
				image: state.image
			})
			)},
			{heading: ""},
			{content: ""},
			{blogId: state.blogId + 1}
		);
		case BLOG_SELECTED: return Object.assign({}, state, (function() {
			const blogList = [].concat(state.totalBlogs);
			console.log(blogList);
			console.log(blogList.filter(blog => blog.blogId === action.payload));
			const displayedBlog = blogList.filter(blog => blog.blogId === action.payload);
			console.log(displayedBlog);
			return displayedBlog[0];
			})());
		default: return state;
	}
}

export const commentActions = (state = defaultComment, action = {}) => {
	switch(action.type) {
		case GET_COMMENT_HEADING: return Object.assign({}, state, {commentHeading: action.payload});
		case GET_COMMENT_BODY: return Object.assign({}, state, {commentBody: action.payload});
		case GET_COMMENTATOR: return Object.assign({}, state, {commentator: action.payload});
		case ADD_COMMENT: return Object.assign({}, state, {totalComments: [].concat(state.totalComments,
			Object.assign({}, {
				commentHeading: state.commentHeading,
				commentBody: state.commentBody,
				commentator: state.commentator,
			})
			)},
			{commentHeading: ""},
			{commentBody: ""}
		)
		default: return state;
	}
}