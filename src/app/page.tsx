import Navigation from "@/components/Navigation";
import "./page.css";

function MainTitle() {
  return (
    <header className="mainTitleSection lightText">
      <h1 className="bordered">
        Oscar <span>Crespo</span>
      </h1>
      <h2>Product engineer with taste</h2>
    </header>
  );
}

function Abstract() {
  return (
    <section className="primaryBright abstractContainer">
      <ul className="abstractList">
        <li>
          I build consumer-facing web and mobile products that are as functional as they are beautiful, comfortably switching between high-level design and low-level implementation.
        </li>
        <li>
          Thrive in collaborative, high-autonomy environments where I own problems from conception to deployment.
        </li>
      </ul>
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
