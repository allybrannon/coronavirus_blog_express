import React, { Component } from "react";

class CoronaBlog extends Component {
  state = {
    blog: []
  };

  getInfo = async () => {
    const response = await fetch("http://localhost:3000/all");
    const blog = await response.json();
    return blog;
  };

  async componentDidMount() {
    const blog = await this.getInfo();

    this.setState({
      blog: blog
    });
  }
  render() {
    const { blog } = this.state;

    return (
      <div>
        <p>{blog.blogger}</p>
        <p>{blog.blogpost}</p>
      </div>
    );
  }
}

export default CoronaBlog;
