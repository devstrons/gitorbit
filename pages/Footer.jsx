import React from "react";
// import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="created-by">Copyright © All rights reserved.</div>
      <div className="foot">
        <a
          href="https://github.com/aminoxix/gitorbit/blob/master/README.md"
          target="blank"
        >
          <span>About</span>
        </a>
        <a href="https://github.com/aminoxix/gitorbit" target="blank">
          <span>Source</span>
        </a>
        <a
          href="https://github.com/aminoxix/gitorbit/blob/master/LICENSE"
          target="blank"
        >
          <span>Licence</span>
        </a>
      </div>
      <div className="created-by">
        created by{" "}
        <a href="https://github.com/aminoxix" target="blank">
          <b>@aminoxix</b>
        </a>
      </div>
    </footer>
  );
}
