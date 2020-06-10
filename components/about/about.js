import cx from 'classnames';
import { useEffect, useState } from 'react';

import {
  aboutSection,
  sectionOpen,
  sectionClosed,
  blockReveal,
  revealOpen,
  revealClosed,
} from './about.scss';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const clickListener = (event) => {
    if (event.target.localName === 'use' || event.target.localName === 'svg') return;
    const vis =
      event.target.innerText === 'about' && event.target.localName === 'a';
    setIsVisible(vis);
    document.querySelector('body').style.cssText = `overflow-y: ${
      vis ? 'hidden' : 'auto'
    }`;
  };
  useEffect(() => {
    const listener = document
      .querySelector('body')
      .addEventListener('click', clickListener, true);

    return () => {
      document
        .querySelector('body')
        .removeEventListener('click', clickListener, true);
    };
  }, []);
  return (
    <div className={cx(blockReveal, isVisible ? revealOpen : revealClosed)}>
      <section
        className={cx(aboutSection, isVisible ? sectionOpen : sectionClosed)}
      >
        <p>Dear reader,</p>
        <p>
          My name is Bart Nowak. I was born in Poland in 1983 and got
          commissioned to build a first digital project around the year 2000.
        </p>
        <p>
          In the past I've had the privilege of working with Nike, HSBC, JP
          Morgan and Sapient Global Markets amongst others.
        </p>
        <p>
          I am driven by the need to make a difference. I want to help other
          people by creating a better working environment, while building
          systems and solutions that make a positive impact.
        </p>
        <p>Thank you for stopping by.</p>
      </section>
    </div>
  );
};

export default About;
