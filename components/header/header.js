import { animated, useChain } from "react-spring";
import { useMediaQuery } from "react-responsive";

import {
  useGreetingSpring,
  useOverlaySpring,
  useHeroSpring,
  useHeroDotSpring,
  useHeadlineSpring,
} from "./springs";

import {
  container,
  greeting,
  hero,
  heroDot,
  heroOverlay,
  headline,
} from "./header.scss";

const config = {
  mass: 1,
  tension: 250,
  friction: 20,
};

const Greeting = ({ style } = {}) => {
  return (
    <animated.div className={greeting} style={style}>
      <span>Hi, I'm</span>
    </animated.div>
  );
};

const Hero = ({ style } = {}) => {
  return (
    <animated.h1 style={style} className={hero}>
      Bart Nowak
    </animated.h1>
  );
};

const HeroDot = ({ style } = {}) => {
  return (
    <animated.h1 style={style} className={heroDot}>
      .
    </animated.h1>
  );
};

const HeroOverlay = ({ style } = {}) => (
  <animated.div style={style} className={heroOverlay}></animated.div>
);

const Headline = ({ style } = {}) => (
  <animated.h2 className={headline} style={style}>
    Hands-on contributor. Technology strategist. Servant team leader.
  </animated.h2>
);

const Header = ({ headerStyle, onAnimationEnd = () => null } = {}) => {
  const isPortrait = useMediaQuery({
    query: "(orientation: portrait) and (max-width: 639px)",
  });

  const [greetingAnimation, greetingRef] = useGreetingSpring({ config });
  const [overlayAnimation, overlayRef] = useOverlaySpring({ config });
  const [heroAnimation, heroRef] = useHeroSpring({ config });
  const [heroDotAnimation, heroDotRef] = useHeroDotSpring({ config });
  const [headlineAnimation, headlineRef] = useHeadlineSpring({
    config,
    isPortrait,
    onRest: onAnimationEnd,
  });

  useChain(
    [greetingRef, overlayRef, heroRef, heroDotRef, headlineRef],
    [0, 0.71, 1.26, 1.8, 1.8]
  );
  return (
    <animated.header className={container} style={headerStyle}>
      <Greeting style={greetingAnimation} />
      <Hero style={heroAnimation} />
      <HeroDot style={heroDotAnimation} />
      <HeroOverlay style={overlayAnimation} />
      <Headline style={headlineAnimation} />
    </animated.header>
  );
};

export default Header;
