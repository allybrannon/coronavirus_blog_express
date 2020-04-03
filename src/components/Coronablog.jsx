import React, { Component } from "react";
import { Link } from "react-router-dom";

class CoronaBlog extends Component {
  state = {
    blog: []
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
      blog: apiblog
    });
  }

  render() {
    const { blog } = this.state;
    console.log("blog:", blog);
    return (
      <div>
        {blog.map((post, index) => (
          <div>
            <p className="blogDate">blog date: {blog[index].date_blogpost}</p>
            <p className="blogName">
              <strong>blog title: </strong>
              {blog[index].blog_name}
            </p>
            <p className="blogPost">
              <strong>blog post:</strong> {blog[index].blogpost}
            </p>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default CoronaBlog;
