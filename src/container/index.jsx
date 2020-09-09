import React from "react";
import "./index.css";

const ctr = (options) => (Component) =>
  class extends React.Component {
    render() {
      const { header = "Header", footer = "Footer" } = options;
      return (
        <div className="container">
          <header className="header">{header}</header>
          <div className="content">
            <Component {...this.props} />
          </div>
          <footer className="footer">{footer}</footer>
        </div>
      );
    }
  };

export default ctr;
