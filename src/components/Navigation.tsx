import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="animate-on-load" style={{ '--animation-order': 5 } as React.CSSProperties}>
      <ul className="navigationList">
        <li>
          <a
            className="brightLink"
            href="https://www.linkedin.com/in/oscarcrespoc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            className="brightLink"
            href="https://github.com/oscarCrespo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="brightLink"
            href="https://x.com/OsCrsspo"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </li>

        {/* <li>
          <a
            className="brightLink"
            href="https://www.behance.net/puntoyguion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
