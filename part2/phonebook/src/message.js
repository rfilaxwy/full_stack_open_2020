import React from "react";
const stylesSuccess = {
  border: "2px solid green",
  backgroundColor: "lightgray",
  fontWeight: "bold",
};
const stylesFail = {
  border: "2px solid red",
  backgroundColor: "lightgray",
  fontWeight: "bold",
};
const Message = (props) => {
  if (props.successMessage === null && props.failMessage === null) {
    return null;
  }
  return props.failMessage ? (
    <div style={stylesFail}>{props.failMessage}</div>
  ) : (
    <div style={stylesSuccess}>{props.successMessage}</div>
  );
};

export default Message;
