import "./Navigation.css";

export default function Navigation() {
  return (
    <nav>
      <ul className="navigationList">
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
            href="https://twitter.com/OsCrsspo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="brightLink"
            href="https://www.linkedin.com/in/oscarcrespoc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="brightLink"
            href="https://www.behance.net/puntoyguion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
        </li>
      </ul>
    </nav>
  );
}
