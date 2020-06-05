import React from 'react';
import './App.css';
  import NavigationBar from '../NavigationBar/NavigationBar';
  import Footer from '../Footer/Footer';
  import Home from '../Home/Home';
  import Blogpost from '../Blogpost/Blogpost';
  import SignIn from '../SignIn/SignIn';
  import SignUp from '../SignUp/SignUp';
  import BlogAdder from '../BlogAdder/BlogAdder';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import { 
  getUserFirstName,
  getUserLastName,
  getUserEmail,
  getUserPassword,
  getBlogHeading,
  getBlogContent,
  getBlogAuthor,
  addNewBlog,
  getCommentBody,
  getCommentHeading,
  getCommentator,
  addComment,
  isUserValid,
  selectBlog,
  addingUser,
  getBlogList,
  getBlogPost,
  addBlog } from '../States/actions'


const mapStateToProps = state => {
  const { firstname, email, password } = state.userActions;
  const user = {...state.userActions};
  const blog = {...state.blogActions};
  const cmnt = {...state.commentActions};
  const actionUpdates = {...state.actionUpdates};
  const blogList = {...state.showBlogList};
  const blogPost = {...state.showBlogPost};
  const cmntAction = {...state.cmntAddAction};
      return {
        firstname,
        email, 
        password,
        user,
        blog,
        cmnt,
        actionUpdates,
        blogList,
        blogPost,
        cmntAction
      }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //User Actions
    onFirstNameEnter: (event) => dispatch(getUserFirstName(event.target.value)),
    onLastNameEnter: (event) => dispatch(getUserLastName(event.target.value)),
    onEmailEnter: (event) => dispatch(getUserEmail(event.target.value)),
    onPasswordEnter: (event) => dispatch(getUserPassword(event.target.value)),
    
    checkUser: (email, password) => (event) => dispatch(isUserValid(email, password)),
    addUser: (user) => (event) => dispatch(addingUser(user)),

    //Blog Actions
    addingBlogHeading: (event) => dispatch(getBlogHeading(event.target.value)),
    addingBlogAuthor: (author) => (event) => {dispatch(getBlogAuthor(author))},
    addingBlogContent: (event) => dispatch(getBlogContent(event.target.value)),
    addingBlogItem: (event) => dispatch(addNewBlog("")),
    showBlogs: () => (event) => dispatch(getBlogList()),
    showBlogPost: (location) => (event) => dispatch(getBlogPost(location)),
    addBlog: (author, heading, content, blogid) => (event) => dispatch(addBlog(author, heading, content, blogid)),

    //Comment Actions
    addingCmntHeading: (event) => dispatch(getCommentHeading(event.target.value)),
    addingCommentator: (event) => {dispatch(getCommentator(event.target.value))},
    addingCmntBody: (event) => dispatch(getCommentBody(event.target.value)),
    addingCmntItem: (location) => (commentator, cmntBody, cmntHeading) => (event) => dispatch(addComment(location, commentator, cmntBody, cmntHeading)),
    blogSelection: (bId) => (event) => dispatch(selectBlog(bId)),
  }
}


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


class App extends React.Component {

  render() {
    const {
      actionUpdates,

      onFirstNameEnter,
      onLastNameEnter,
      onEmailEnter,
      onPasswordEnter,
      email,
      password,
      user,
      checkUser,
      addUser,

      addingBlogHeading,
      addingBlogAuthor,
      blog,
      blogList,
      addingBlogContent,
      addingBlogItem,
      blogPost,
      showBlogs,
      showBlogPost,
      addBlog,


      addingCmntHeading,
      addingCommentator,
      addingCmntBody,
      addingCmntItem,
      blogSelection,
      cmnt
    } = this.props; 

    return (
  	<Router>
    <ScrollToTop />	
    <div className="App">
    <Switch>
    <Route path = "/signin">
    	<SignIn
      getEmail = {onEmailEnter}
      addCommentator = {addingCommentator}
      getPassword = {onPasswordEnter}
      checkUser = {checkUser(email, password)}
      actionUpdates = {actionUpdates}
       />
      }
      }
	</Route>
    <Route path = "/signup">
    	<SignUp
      getFirstName = {onFirstNameEnter}
      getLastName = {onLastNameEnter}
      getEmail = {onEmailEnter}
      getPassword = {onPasswordEnter}
      addUser = {addUser(user)}
      actionUpdates = {actionUpdates}
       />
      }
	</Route>
    <Route path="/">
    	<NavigationBar
          email={email} />
    	<Switch>
	    	<Route exact path = "/">
	    		<Home 
          email={email}
          blog = {blogList}
          blogSelection = {blogSelection}
          showBlogs = {showBlogs}
          />
	    	</Route>
	    	<Route path = "/Blogpost/">

	    		<Blogpost 
          blog = {blogPost}
          addCommentHeading = {addingCmntHeading}
          addCommentBody = {addingCmntBody}
          addCommentItem = {addingCmntItem}
          cmnt = {cmnt.totalComments}
          cmntHead = {cmnt.commentHeading}
          cmntBody = {cmnt.commentBody}
          commentator = {email}
          showBlogPost = {showBlogPost}
          />
	    	</Route>
        <Route path = "/blogAdder">
          <BlogAdder 
          addBlogHeading = {addingBlogHeading}
          addBlogContent = {addingBlogContent}
          addBlogAuthor = {addingBlogAuthor}
          addBlog = {addBlog(email, blog.heading, blog.content, blog.blogid)}
          author = {email}
          />
        </Route>
    	</Switch>
    	<Footer />
    </Route>
    </Switch>
    </div>
    </Router>
  );
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

     