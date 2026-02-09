import Navigation from "@/components/Navigation";
import "./page.css";

function MainTitle() {
  return (
    <header className="mainTitleSection lightText">
      <h2 className="borderBottom">Hi, my name is</h2>
      <h1>
        Oscar <span>Crespo</span>
      </h1>
      <h2 className="borderTop">I build things</h2>
    </header>
  );
}

function Abstract() {
  return (
    <section className="primaryBright abstractContainer">
      <ul className="abstractList">
        <li>
          I am a software engineer specialized in front-end development. My
          Design background and experience in software development allow me to
          have a holistic view of development.
        </li>
        <li>
          My career started back when Jquery was modern, and producing a website
          was as simple as creating an index.html. Today I work with Typescript,
          React and (React Native), Redux, Jest, AWS, and other modern technology
          stacks.
        </li>
        <li>
          I enjoy working in autonomous, collaborative, and high-performance
          environments. Constant learner. My tagline: There must be a better
          way.
        </li>
      </ul>
      <p className="closingMessage lightText">
        Feel free to reach out by Twitter or linkedIn.
      </p>
    </section>
  );
}

export default function Page() {
  return (
    <div className="App">
      <main className="safe homeContainer">
        <div className="columns">
          <MainTitle />
          <Abstract />
        </div>
        <div className="navigationContainer">
          <Navigation />
        </div>
      </main>
    </div>
  );
}
