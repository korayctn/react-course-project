import React from "react";

function Course(props) {
  const { title, description } = props;

  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
}

export default Course;
