import React, { PureComponent } from "react";
import "./Home.css";
import Navigation from "./Navigation";
export default class Home extends PureComponent {
  render() {
    return (
      <main className="safe homeContainer">
        <div className="columns">
          <MainTitle />
          <Abstract />
        </div>
        <div className="navigationContainer">
          <Navigation />
        </div>
      </main>
    );
  }
}

const MainTitle = () => (
  <header className="mainTitleSection lightText">
    <h2 className="borderBottom">Hi, my name is</h2>
    <h1>
      Oscar <span>Crespo</span>
    </h1>
    <h2 className="borderTop">I build things</h2>
  </header>
);

const Abstract = () => (
  <section className="primaryBright abstractContainer">
    <ul className="abstractList">
      <li>
        I’m a Frontend developer passionate for the intersection of desing and
        engineering
      </li>
      <li>
        I'd describe myself as a creative technologist. My background in digital
        arts and and a extensive experience in software development (Web and
        Mobile) allow me to have a holistic approach to develop digital
        products.
      </li>
      <li>
        My mantra: <span className="bold">learn, create and have fun.</span>
      </li>
    </ul>
    {/* <button
      className="darkLink"
      onClick={() => {
        alert("In Progress... Will be ready next sprint 🙏");
      }}
    >
      More +
    </button> */}
    <p className="closingMessage lightText">
      Feel free to reach out by Twitter or linkedIn.
    </p>
  </section>
);
