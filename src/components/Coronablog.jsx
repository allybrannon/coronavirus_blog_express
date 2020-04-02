import React, { Component } from "react";
import OneBlog from "./OneBlog";

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
            <p>
              blog date: {blog[index].date_blogpost} blog name:
              {blog[index].blog_name}blog post: {blog[index].blogpost}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default CoronaBlog;
