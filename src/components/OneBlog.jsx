import React, { Component } from "react";

class OneBlog extends Component {
  state = {
    blogs: [],
  };

  async getBlog() {
    const { id } = this.props.match.params;
    const response = await fetch(`http://localhost:3000/blog/${id}`);
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const blogs = await this.getBlog();

    this.setState({
      blogs: blogs,
    });
  }

  render() {
    const { blogs } = this.state;
    console.log("here's some data! ", blogs);
    return (
      <div>
        {blogs.map((blog) => (
          <p key={blog.id}>
            {blog.date_blogpost}
            <br />
            {blog.blogpost}
          </p>
        ))}
      </div>
    );
  }
}

export default OneBlog;
