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
	ADD_COMMENT,
	CHECK_USER_PENDING,
	CHECK_USER_SUCCESS,
	CHECK_USER_FAILED,
	ADDING_USER_PENDING,
	ADDING_USER_SUCCESS,
	ADDING_USER_FAILED,
	GETTING_BLOG_PENDING,
	GETTING_BLOG_SUCCESS,
	GETTING_BLOG_FAILED,
	GETTING_BLOGPOST_PENDING,
	GETTING_BLOGPOST_SUCCESS,
	GETTING_BLOGPOST_FAILED,
	ADDING_COMMENT_PENDING,
	ADDING_COMMENT_SUCCESS,
	ADDING_COMMENT_FAILED,
	ADDING_BLOG_PENDING,
	ADDING_BLOG_SUCCESS,
	ADDING_BLOG_FAILED
} from './constants';

const defaultUser = {
	firstname: "",
	lastname: "",
	email: "",
	password: ""
}


const actionUpdate = {
	isSignedIn: false,
	messsage: undefined,
	isProcessing: false
}

const defaultBlog = {
	author: "",
	heading: "",
	image: "",
	content: "",
	blogId: 0
}

const blogList = {
	blogs: [
	{
	author: "",
	heading: "",
	image: "",
	blogId: 0,
	content: ""
	}
	]
}

const defaultComment = {
	blogId: 0,
	commentHeading: "",
	commentBody: "",
	commentator: "",
}

const blogPost = {
blog: {
	author: "",
	heading: "",
	image: "",
	blogId: 0,
	content: ""
},
cmnts: [
	{
		blogId: 0,
		commentHeading: "",
		commentbody: "",
		commentator: ""
	}
	]
}


export const userActions = (state = defaultUser, action = {}) => {
	switch(action.type) {
		case GET_USER_FIRST_NAME:
			return Object.assign({}, state, {firstname: action.payload});
		case GET_USER_LAST_NAME:
			return Object.assign({}, state, {lastname: action.payload})
		case GET_USER_EMAIL:
			return Object.assign({}, state, {email: action.payload})
		case GET_USER_PASSWORD:
			return Object.assign({}, state, {password: action.payload})
		default: return state;
	}
}

export const actionUpdates = (state = actionUpdate, action = {}) => {
	switch(action.type) {
		case CHECK_USER_PENDING:
			return Object.assign({}, state, {isProcessing: true});
		case CHECK_USER_SUCCESS:
			return Object.assign({}, state, {isProcessing: false}, action.payload);
		case CHECK_USER_FAILED:
			return Object.assign({}, state, {isProcessing: false}, action.payload);
		case ADDING_USER_PENDING:
			return Object.assign({}, state, {isProcessing: true});	
		case ADDING_USER_SUCCESS:
			return Object.assign({}, state, {isProcessing: false}, {message: action.payload});
		case ADDING_USER_FAILED:
			return Object.assign({}, state, {isProcessing: false}, {message: action.payload});		
		default: return state;
	}
}

export const cmntAddAction = (state = actionUpdate, action = {}) => {
	switch(action.type) {
	case ADDING_COMMENT_PENDING:
		return Object.assign({}, state, {isProcessing: true});
	case ADDING_COMMENT_SUCCESS:
		return Object.assign({}, state, {isProcessing: false}, action.payload);
	case ADDING_COMMENT_FAILED:
		return Object.assign({}, state, {isProcessing: false}, action.payload);
	default:
		return state;
	}
}

export const blogActions = (state = defaultBlog, action = {}) => {
	switch(action.type) {
		case GET_BLOG_HEADING:
			return Object.assign({}, state, {heading: action.payload});
		case GET_BLOG_CONTENT:
			return Object.assign({}, state, {content: action.payload});
		case GET_BLOG_AUTHOR:
			return Object.assign({}, state, {author: action.payload});
		case ADD_BLOG_ITEM:
			return Object.assign({}, state, {totalBlogs: [].concat(state.totalBlogs,
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
		default: return state;
	}
}

export const showBlogList = (state = blogList, action = {}) => {
	switch(action.type) {
		case GETTING_BLOG_PENDING:
			return Object.assign({}, state);
		case GETTING_BLOG_SUCCESS:
			return Object.assign({}, state, {blogs: action.payload} );
		case GETTING_BLOG_FAILED:
			return Object.assign({}, state, action.payload);
		default: return state;
	}
}

export const showBlogPost = (state = blogPost, action = {}) => {
	switch(action.type) {
		case GETTING_BLOGPOST_PENDING:
			return Object.assign({}, state);
		case GETTING_BLOGPOST_SUCCESS:
			return Object.assign({}, state, action.payload );
		case GETTING_BLOGPOST_FAILED:
			return Object.assign({}, state, action.payload);
		default: return state;
}
}

export const commentActions = (state = defaultComment, action = {}) => {
	switch(action.type) {
		case GET_COMMENT_HEADING:
			return Object.assign({}, state, {commentHeading: action.payload});
		case GET_COMMENT_BODY:
			return Object.assign({}, state, {commentBody: action.payload});
		case GET_COMMENTATOR:
			return Object.assign({}, state, {commentator: action.payload});
		default: return state;
	}
}

export const blogAddAction = (state = actionUpdate, action = {}) => {
	switch(action.type) {
		case ADDING_BLOG_PENDING:
			return Object.assign({}, state, {isProcessing: true});
		case ADDING_BLOG_SUCCESS:
			return Object.assign({}, state, {isProcessing: false}, action.payload);
		case ADDING_BLOG_FAILED:
			return Object.assign({}, state, {isProcessing: false}, action.payload);
		default: return state;
	}
}