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