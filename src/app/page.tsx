import Navigation from "@/components/Navigation";
import "./page.css";

function MainTitle() {
  return (
    <header className="mainTitleSection lightText">
      <h1 className="bordered">
        Oscar <span>Crespo</span>
      </h1>
      <h2>Staff Software Engineer</h2>
    </header>
  );
}

function Abstract() {
  return (
    <section className="abstractContainer lightText">
      <div className="abstractContent">
        <h3 className="abstractTitle">
          Building beautiful apps and the robust systems behind them.
        </h3>
        <p className="abstractSubtitle">
          Over the last decade, I've helped startups across multiple industries turn ambitious product visions into delightful, consumer-facing experiences.
        </p>
      </div>
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
