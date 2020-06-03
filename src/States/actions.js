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



export const getUserFirstName=(name) => ({
	type: GET_USER_FIRST_NAME,
	payload: name,
})

export const getUserLastName = (name) => ({
	type: GET_USER_LAST_NAME,
	payload: name,
})

export const getUserEmail = (email) => ({
	type: GET_USER_EMAIL,
	payload: email,
})

export const getUserPassword = (pwd) => ({
	type: GET_USER_PASSWORD,
	payload: pwd,
})

export const getBlogHeading = (heading) => ({
	type: GET_BLOG_HEADING,
	payload: heading
})

export const getBlogContent = (content) => ({
	type: GET_BLOG_CONTENT,
	payload: content
})

export const getBlogAuthor = (author) => ({
	type: GET_BLOG_AUTHOR,
	payload: author
})

export const addNewBlog = (text) => ({
	type: ADD_BLOG_ITEM,
	payload: text
})

export const selectBlog = (text) => ({
	type: BLOG_SELECTED,
	payload: text
})

export const getCommentHeading = (text) => ({
	type: GET_COMMENT_HEADING,
	payload: text
})

export const getCommentBody = (text) => ({
	type: GET_COMMENT_BODY,
	payload: text
})

export const getCommentator = (text) => ({
	type: GET_COMMENTATOR,
	payload: text
})

export const addNewComment = (text) => ({
	type: ADD_COMMENT,
	payload: text
})

export const isUserValid = (email, password) => (dispatch) => {
	dispatch({type: CHECK_USER_PENDING});
	fetch('https://pure-refuge-29809.herokuapp.com/signin', {
			method: 'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
		.then(response => response.json())
		.then(data => dispatch({ type: CHECK_USER_SUCCESS, payload: data}))
		.catch(err => dispatch({ type: CHECK_USER_FAILED, payload: err}))
}

export const addingUser = (user) => (dispatch) => {
	dispatch({type: ADDING_USER_PENDING});
	fetch('https://pure-refuge-29809.herokuapp.com/signup', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			user: user
		})
	})
	.then(response => response.json())
	.then(data => dispatch({ type: ADDING_USER_SUCCESS, payload: data}))
	.catch(err => dispatch({type: ADDING_USER_FAILED, payload: err}))
}

export const getBlogList = () => (dispatch) => {
	dispatch({type: GETTING_BLOG_PENDING});
	fetch('https://pure-refuge-29809.herokuapp.com/')
		.then(response => response.json())
		.then(data => dispatch({ type: GETTING_BLOG_SUCCESS, payload: data}))
		.catch(err => dispatch({ type: GETTING_BLOG_FAILED, payload: err}))
}

export const getBlogPost = (location) => (dispatch) => {
	location = "https://pure-refuge-29809.herokuapp.com/BlogPost/" + location;
	dispatch({type: GETTING_BLOGPOST_PENDING});
	fetch(location)
	.then(response => response.json())
	.then(data => dispatch({ type: GETTING_BLOGPOST_SUCCESS, payload: data}))
	.catch(err => dispatch({ type: GETTING_BLOGPOST_FAILED, payload: err}))
}

export const addComment = (location, commentator, commentBody, commentHeading) => (dispatch) => {
	location = "https://pure-refuge-29809.herokuapp.com/BlogPost/" + location + "/commented";
	dispatch({type: ADDING_COMMENT_PENDING});
	fetch(location, {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			commentator: commentator,
			commentBody: commentBody,
			commentHeading: commentHeading, 
		})
	})
	.then(response => response.json())
	.then(data => dispatch({ type: ADDING_COMMENT_SUCCESS, payload: data}))
	.catch(err => dispatch({ type: ADDING_COMMENT_FAILED, payload: err}))
}

export const addBlog = (author, heading, content, blogId) => (dispatch) => {
	dispatch({type: ADDING_BLOG_PENDING});
	fetch("https://pure-refuge-29809.herokuapp.com/BlogAdder", {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			author: author,
			heading: heading,
			image: "",
			content: content,
			blogId: blogId
		})
	})
	.then(response => response.json())
	.then(data => dispatch({ type: ADDING_BLOG_SUCCESS, payload: data}))
	.catch(err => dispatch({ type: ADDING_BLOG_FAILED, payload: err}))
}