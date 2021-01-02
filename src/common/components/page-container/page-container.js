import React from "react";
import "./page-container.scss";
const PageContainer = (props) => {
  return <div className="kwiz-page-container">{props.children}</div>;
};

export default PageContainer;
