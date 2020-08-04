import cx from 'classnames';
import { forwardRef, useImperativeHandle, useRef, createRef } from 'react';
import { useEffect, useState } from 'react';
import { IconArrowLeft } from './../icons/icons';

import {
  aboutSection,
  sectionOpen,
  sectionClosed,
  blockReveal,
  revealOpen,
  revealClosed,
  postTransitionReveal,
  backIcon,
  backLabel,
  backButton,
} from './about.scss';

const About = forwardRef((props, ref) => {
  const [isVisible, _setIsVisible] = useState(false);
  const [isInTransition, setIsInTransition] = useState(false);
  const getIsVisible = () => isVisible;
  const setIsVisible = (value) => {
    _setIsVisible(value);
    setIsInTransition(true);
  };
  useImperativeHandle(ref, () => ({
    getIsVisible,
    setIsVisible,
  }));
  const hide = () => setIsVisible(false);
  const sectionRef = createRef();
  const onTransitionEnd = () => {
    setIsInTransition(false)
  };
  useEffect(() => {
    const s = sectionRef.current;
    s.addEventListener('transitionend', onTransitionEnd);

    return () => {
      s.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [sectionRef]);
  return (
    <div
      ref={ref}
      {...props}
      className={cx(
        blockReveal,
        isVisible ? revealOpen : revealClosed,
        isInTransition ? '' : postTransitionReveal
      )}
    >
      <section
        className={cx(aboutSection, isVisible ? sectionOpen : sectionClosed)}
        ref={sectionRef}
      >
        <button className={backButton} onClick={hide} aria-hidden="true">
          <IconArrowLeft className={backIcon} />
          <span className={backLabel}>back</span>
        </button>
        <p>Dear reader,</p>
        <p>
          I have started my adventure as a graphic designer and got commissioned
          to build my first digital, web project in the year 2000.
        </p>
        <p>
          Since then I have gained experience in market areas such as Finance,
          Healthcare, eCommerce/Retail, including the privilege of working with
          Nike, HSBC, JP Morgan, and Sapient Global Markets amongst others.
        </p>
        <p>
          Today my main focus areas are end-to-end web architecture, efficient
          CI/CD processes, mentoring developers, and integration within a wider,
          corporate context.
        </p>
        <p>
          I am driven by the need to make a difference. I want to help other
          people succeed by empowering them to deliver at the top of their
          performance, while building systems and solutions that make a positive
          impact.
        </p>
        <p>Thank you for stopping by.</p>
      </section>
    </div>
  );
});

export default About;
