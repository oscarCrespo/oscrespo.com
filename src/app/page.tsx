import Navigation from "@/components/Navigation";
import "./page.css";

function MainTitle() {
  return (
    <header className="mainTitleSection lightText">
      <h1 className="bordered animate-on-load" style={{ '--animation-order': 1 } as React.CSSProperties}>
        Oscar <span>Crespo</span>
      </h1>
      <h2 className="animate-on-load" style={{ '--animation-order': 2 } as React.CSSProperties}>Staff Software Engineer</h2>
    </header>
  );
}

function Abstract() {
  return (
    <section className="abstractContainer lightText">
      <div className="abstractContent">
        <h3 className="abstractTitle animate-on-load" style={{ '--animation-order': 3 } as React.CSSProperties}>
          Building <span className="bright-emphasis">beautiful apps</span> and the <span className="bright-emphasis">robust systems</span> behind them.
        </h3>
        <p className="abstractSubtitle animate-on-load" style={{ '--animation-order': 4 } as React.CSSProperties}>
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
