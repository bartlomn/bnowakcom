import { useRef } from "react";
import { useSpring, animated, interpolate } from "react-spring";

import HeaderComponent from "./../components/header";
import renderScene from "./../components/threejs/mainScene";

const config = {
  mass: 1,
  tension: 300,
  friction: 30,
};

const Intro = ({ style } = {}) => {
  return (
    <animated.section className="intro" style={style}>
      <hr />
      <p className="main">
        It was around year 1999 that I had been first asked to build a website.
        Ever since then, I have been helping to deliver digital products and
        services across multitude of domains.
        <br />
      </p>
      <hr />
    </animated.section>
  );
};

const staticContent = () => (
  <>
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

const Main = () => {
  const headerRef = useRef();
  const { y: headerPos } = useSpring({
    config,
    ref: headerRef,
    from: {
      y: 25,
    },
    to: [
      {
        y: 0,
      },
    ],
  });
  const introRef = useRef();
  const { y: introPos } = useSpring({
    config,
    ref: introRef,
    from: {
      y: 25,
    },
    to: [
      {
        y: 0,
      },
    ],
    delay: 50,
    onRest: () => renderScene(),
  });

  return (
    <>
      <HeaderComponent
        headerStyle={{
          transform: headerPos.interpolate(
            (pos) => `translate3d(0, ${pos}vh, 0)`
          ),
        }}
        onAnimationEnd={() => {
          headerRef.current.start();
          introRef.current.start();
        }}
      />
      <Intro
        style={{
          transform: introPos.interpolate(
            (pos) => `translate3d(0, ${pos}vh, 0)`
          ),
          opacity: introPos.interpolate((pos) => 1 - (pos * 4) / 100),
        }}
      />
    </>
  );
};

export default Main;
