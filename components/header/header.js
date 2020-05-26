import { useRef } from "react";
import { useSpring, animated, useChain } from "react-spring";

import {
  container,
  greeting,
  hero,
  heroDot,
  heroOverlay,
  headline,
} from "./header.module.css";

const config = {
  mass: 1,
  tension: 250,
  friction: 20,
};

const Greeting = ({ style }) => {
  return (
    <animated.div className={greeting} style={style}>
      <span>Hi, I'm</span>
    </animated.div>
  );
};

const Hero = ({ style }) => {
  return (
    <animated.h1 style={style} className={hero}>
      Bart Nowak
    </animated.h1>
  );
};

const HeroDot = ({ style }) => {
  return (
    <animated.h1 style={style} className={heroDot}>
      .
    </animated.h1>
  );
};

const HeroOverlay = ({ style }) => (
  <animated.div style={style} className={heroOverlay}></animated.div>
);

const Headline = ({ style }) => (
  <animated.h2 className={headline} style={style}>
    Hands-on contributor. Technology strategist. Servant team leader.
  </animated.h2>
);

const Header = () => {
  const greetingRef = useRef();
  const greetingAnimation = useSpring({
    config,
    ref: greetingRef,
    from: { transform: "translate3d(-6.5rem, -30rem, 0)", opacity: 0 },
    transform: "translate3d(-6.5rem, -9rem, 0)",
    opacity: 1,
  });
  const overlayRef = useRef();
  const overlayAnimation = useSpring({
    config: {
      ...config,
      friction: 30,
    },
    ref: overlayRef,
    from: { transform: "translate3d(-56.5rem, 0, 0)", width: "40rem" },
    to: [
      { transform: "translate3d(-6.5rem, 0, 0)", width: "40rem" },
      { transform: "translate3d(33.5rem, 0, 0)", width: "0rem" },
    ],
  });
  const heroRef = useRef();
  const heroAnimation = useSpring({
    config,
    ref: heroRef,
    from: {
      clipPath: "inset(0 33.5rem 0 0)",
    },
    to: [
      {
        clipPath: "inset(0px 0px 0px 0rem)",
      },
    ],
  });
  const heroDotRef = useRef();
  const heroDotAnimation = useSpring({
    config: {
      ...config,
      tension: 300,
      friction: 10,
    },
    ref: heroDotRef,
    from: { transform: "translate3d(31.25rem, 3rem, 0) scale3d(0, 0, 1)" },
    to: [{ transform: "translate3d(31.25rem, 0, 0) scale3d(1, 1, 1)" }],
  });
  const headlineRef = useRef();
  const headlineAnimation = useSpring({
   config,
   ref: headlineRef,
   from: { transform: "translate3d(0, 1rem, 0)", opacity: 0 },
   to: [{ transform: "translate3d(0, 0, 0)", opacity: 1 }],
 });

  useChain(
    [greetingRef, overlayRef, heroRef, heroDotRef, headlineRef],
    [0, 0.71, 1.26, 1.8, 1.8]
  );
  return (
    <header className={container}>
      <Greeting style={greetingAnimation} />
      <Hero style={heroAnimation} />
      <HeroDot style={heroDotAnimation} />
      <HeroOverlay style={overlayAnimation} />
      <Headline style={headlineAnimation} />
    </header>
  );
};

export default Header;
