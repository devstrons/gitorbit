import React from "react";
// import "../styles/Footer.scss";

export default function Footer() {
    return (
        <footer>
            <div className="created-by">Copyright © All rights reserved.</div>
            <div className="foot">
                <a
                    href="https://github.com/amino19/gitOrbit/blob/master/README.md"
                    target="blank"
                >
                    <span>About</span>
                </a>
                <a href="https://github.com/amino19/gitOrbit" target="blank">
                    <span>Source</span>
                </a>
                <a
                    href="https://github.com/amino19/gitOrbit/blob/master/LICENSE"
                    target="blank"
                >
                    <span>Licence</span>
                </a>
            </div>
            <div className="created-by">
                created by{" "}
                <a
                    href="https://github.com/amino19"
                    target="blank"
                >
                    <b>@amino19</b>
                </a>
            </div>
        </footer>
    );
}