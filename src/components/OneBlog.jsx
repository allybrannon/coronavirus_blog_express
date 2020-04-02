import React from "react";

const OneBlog = props => {
  const { blog } = props;
  return <p> {blog.blog}</p>;
};

export default OneBlog;
