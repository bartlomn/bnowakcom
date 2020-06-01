import { animated } from "react-spring";

import { intro, introText, hrule } from "./introduction.scss";

const Introduction = ({ style } = {}) => {
  return (
    <animated.section className={intro} style={style}>
      <hr className={hrule} />
      <p className={introText}>
        It was around year 1999 that I had been first asked to build a website.
        Ever since then, I have been helping to deliver digital products and
        services across multitude of domains.
        <br />
      </p>
      <hr className={hrule} />
    </animated.section>
  );
};

export default Introduction;
