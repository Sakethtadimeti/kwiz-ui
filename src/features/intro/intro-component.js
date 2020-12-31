import React from "react";
import { Button } from "rebass";
import "./intro-component.scss";
import { withRouter } from "react-router-dom";

const IntroComponent = (props) => {
  const { history } = props;
  return (
    <div className="kwiz-intro-page">
      <div className="left-intro">
        <h1 className="title">Kwiz</h1>
        <div className="intro-text">
          <p>
            Consequat magna esse velit elit in voluptate id nulla Lorem. Amet
            aute proident ut commodo labore quis occaecat veniam non est laboris
            ipsum fugiat. Exercitation est culpa eu cupidatat laborum mollit.
            Occaecat aliqua dolor non sunt commodo occaecat mollit. In ea cillum
            nulla reprehenderit id. Commodo exercitation irure in excepteur
            aliqua culpa eu duis esse. Commodo eiusmod aute Lorem nisi laborum.
          </p>
          <p>Sit et labore nostrud non laborum.</p>
        </div>
      </div>
      <div className="right-intro">
        <Button
          variant="outline"
          className="get-started-btn"
          mr={2}
          onClick={() => history.push("/dashboard")}
        >
          Let's Get Started
        </Button>
      </div>
    </div>
  );
};

export default withRouter(IntroComponent);
