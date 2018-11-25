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
      <li>I’m a Fullstack developer with an eye for design</li>
      <li>
        I’m passionate about software, design, animation, music and travel.
      </li>
      <li>
        I have a holistic mindset and enjoy working with energetic teams on
        great products.
      </li>
      <li>I was born in Mexico City; currently living in Wilmington, NC.</li>
      <li>
        My mantra. <span className="bold">learn, create and have fun.</span>
      </li>
    </ul>
    <button
      className="darkLink"
      onClick={() => {
        alert("In Progress... Will be ready next sprint 🙏");
      }}
    >
      More +
    </button>
    <p className="closingMessage lightText">
      Feel free to reach out by Twitter or linkedIn.
    </p>
  </section>
);
