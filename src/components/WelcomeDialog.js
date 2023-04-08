import React from "react";

function WelcomeDialog() {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">Welcome</h1>
      <p>Thank You foir visiting our spacecraft</p>
    </FancyBorder>
  );
}

export default WelcomeDialog;

function FancyBorder(props) {
  return <div>{props.children}</div>;
}
