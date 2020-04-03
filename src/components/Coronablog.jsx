import React, { Component } from "react";
import { Link } from "react-router-dom";

class CoronaBlog extends Component {
  state = {
    blog: [],
  };

  async getInfo() {
    const response = await fetch("http://localhost:3000/all");
    const data = await response.json();
    console.log("returned:", data);
    return data;
  }

  async componentDidMount() {
    const apiblog = await this.getInfo();

    this.setState({
      blog: apiblog,
    });
  }

  render() {
    const { blog } = this.state;
    console.log("blog:", blog);
    return (
      <div>
        <ul>
          {blog.length > 0 ? (
            blog.map((blog) => (
              <li key={blog.id}>
                <br />
                <Link className="links" to={`/blog/${blog.id}`}>
                  {blog.blog_name} {blog.date_blogpost}
                </Link>
              </li>
            ))
          ) : (
            <li>No Issue Data</li>
          )}
        </ul>
      </div>
    );
  }
}

export default CoronaBlog;
