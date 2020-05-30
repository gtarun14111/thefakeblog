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
  Link
} from "react-router-dom";
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
  addNewComment,
  selectBlog } from '../States/actions'


const mapStateToProps = state => {
  const { firstname, lastname, email, password, isSignedIn } = state.userActions;
  const blog = {...state.blogActions};
  const cmnt = {...state.commentActions};
      return {
        firstname, 
        lastname, 
        email, 
        password, 
        isSignedIn ,
        blog,
        cmnt
      }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFirstNameEnter: (event) => dispatch(getUserFirstName(event.target.value)),
    onLastNameEnter: (event) => dispatch(getUserLastName(event.target.value)),
    onEmailEnter: (event) => dispatch(getUserEmail(event.target.value)),
    onPasswordEnter: (event) => dispatch(getUserPassword(event.target.value)),
    addingBlogHeading: (event) => dispatch(getBlogHeading(event.target.value)),
    addingBlogAuthor: (author) => (event) => {dispatch(getBlogAuthor(author))},
    addingBlogContent: (event) => dispatch(getBlogContent(event.target.value)),
    addingBlogItem: (event) => dispatch(addNewBlog("")),
    addingCmntHeading: (event) => dispatch(getCommentHeading(event.target.value)),
    addingCommentator: (event) => {dispatch(getCommentator(event.target.value))},
    addingCmntBody: (event) => dispatch(getCommentBody(event.target.value)),
    addingCmntItem: (event) => dispatch(addNewComment("")),
    blogSelection: (bId) => (event) => dispatch(selectBlog(bId)),
  }
}


class App extends React.Component {

  render() {
    const {
      onFirstNameEnter,
      email,
      onLastNameEnter,
      onEmailEnter,
      onPasswordEnter,
      addingBlogHeading,
      addingBlogAuthor,
      blog,
      addingBlogContent,
      addingBlogItem,
      addingCmntHeading,
      addingCommentator,
      addingCmntBody,
      addingCmntItem,
      blogSelection,
      cmnt
    } = this.props; 

    return (
  	<Router>  	
    <div className="App">
    <Switch>
    <Route path = "/signin">
    	<SignIn
      getEmail = {onEmailEnter}
      addCommentator = {addingCommentator}
      getPassword = {onPasswordEnter}
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
       />
	</Route>
    <Route path="/">
    	<NavigationBar />
    	<Switch>
	    	<Route exact path = "/">
	    		<Home 
          email={email}

          blog = {blog.totalBlogs}
          blogSelection = {blogSelection}
          />
	    	</Route>
	    	<Route path = "/Blogpost">
	    		<Blogpost 
          blog = {blog}
          addCommentHeading = {addingCmntHeading}
          addCommentBody = {addingCmntBody}
          addCommentItem = {addingCmntItem}
          cmnt = {cmnt.totalComments}
          cmntHead = {cmnt.commentHeading}
          cmntBody = {cmnt.commentBody}
          />
	    	</Route>
        <Route path = "/blogAdder">
          <BlogAdder 
          addBlogHeading = {addingBlogHeading}
          addBlogContent = {addingBlogContent}
          addBlogAuthor = {addingBlogAuthor}
          addBlogItem = {addingBlogItem}
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

     