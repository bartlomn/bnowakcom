import cx from 'classnames';
import { forwardRef, useImperativeHandle } from 'react';
import { useEffect, useState } from 'react';
import { IconArrowLeft } from './../icons/icons';

import {
  aboutSection,
  sectionOpen,
  sectionClosed,
  blockReveal,
  revealOpen,
  revealClosed,
  backIcon,
  backLabel,
  backButton,
} from './about.scss';

const About = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const getIsVisible = () => isVisible;
  useImperativeHandle(ref, () => ({
    getIsVisible,
    setIsVisible,
  }));
  const hide = () => setIsVisible(false);
  return (
    <div
      ref={ref}
      {...props}
      className={cx(blockReveal, isVisible ? revealOpen : revealClosed)}
    >
      <section
        className={cx(aboutSection, isVisible ? sectionOpen : sectionClosed)}
      >
        <button className={backButton} onClick={hide} aria-hidden="true">
          <IconArrowLeft className={backIcon} />
          <span className={backLabel}>back</span>
        </button>
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
});

export default About;
