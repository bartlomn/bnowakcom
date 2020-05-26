import React from "react";
import headerComponent from "./../components/header";

const staticContent = () => (
  <>
    <section className="intro">
      <hr />
      <p className="main">
        It was around year 1999 that I had been first asked to build a website.
        Ever since then, I have been helping to deliver digital products and
        services across multitude of domains.
        <br />
      </p>
      <hr />
    </section>
    <section className="contact">
      <ul className="linklist">
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">past projects</a>
        </li>
        <li>
          <a href="#">front-end</a>
        </li>
        <li>
          <a href="#">back-end</a>
        </li>
        <li>
          <a href="#">dev&cloud ops</a>
        </li>

        <br />

        <li>
          <a id="email" href="mailto:hello@bart.rocks">
            hello@bart.rocks
          </a>
        </li>
        <li>
          <a
            href="http://www.linkedin.com/in/bartlomn"
            title="LinkedIn profile"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/bartlomn" title="GitHub profile">
            GitHub
          </a>
        </li>
        <li>
          <a href="http://twitter.com/" title="Twitter profile">
            Twitter
          </a>
        </li>
      </ul>
    </section>
  </>
);

const main = () => [headerComponent()];

export default main;
