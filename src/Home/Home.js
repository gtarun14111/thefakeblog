import React from 'react';
import HeadImg from './HeadImage/HeadImage';
import BlogCards from './BlogCards/BlogCards';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


class Home extends React.Component {

  componentDidMount() {
    this.props.showBlogs()();
  }

  render() {
    const { blog, blogSelection} = this.props;
  return (
    <div>
      <HeadImg />
      <BlogCards 
      totalBlogs = {blog}
      />
    </div>
  );
}
}

export default Home;
