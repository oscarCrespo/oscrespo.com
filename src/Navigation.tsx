import React, { PureComponent } from "react";
import "./Navigation.css";
export default class Navigation extends PureComponent {
  render() {
    return (
      <nav>
        <ul className="navigationList">
          {/* <li
            onClick={() => {
              alert("In Progress... Will be ready next sprint 🙏");
            }}
          >
            <a className="brightLink">Projects</a>
          </li> */}
          <li>
            <a
              className="brightLink"
              href="https://github.com/oscarCrespo"
              target="blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="brightLink"
              href="https://twitter.com/OsCrsspo"
              target="blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="brightLink"
              href="https://www.linkedin.com/in/oscarcrespoc/"
              target="blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="brightLink"
              href="https://www.behance.net/puntoyguion"
              target="blank"
            >
              Behance
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
