import { useRef } from 'react';
import { useSpring } from 'react-spring';

export const useGreetingSpring = ({ config }) => {
  const ref = useRef();
  return [
    useSpring({
      config,
      ref,
      from: { transform: 'translate3d(-4rem, -37rem, 0)', opacity: 0 },
      to: [{ transform: 'translate3d(-4rem, -7rem, 0)', opacity: 1 }],
    }),
    ref,
  ];
};

export const useOverlaySpring = ({ config }) => {
  const ref = useRef();
  return [
    useSpring({
      config: {
        ...config,
        friction: 30,
      },
      ref,
      from: { transform: 'translate3d(-56.5rem, -9rem, 0)', width: '40rem' },
      to: [
        { transform: 'translate3d(-6.5rem, -9rem, 0)', width: '40rem' },
        { transform: 'translate3d(33.5rem, -9rem, 0)', width: '0rem' },
      ],
    }),
    ref,
  ];
};

export const useHeroSpring = ({ config }) => {
  const ref = useRef();
  return [
    useSpring({
      config,
      ref,
      from: {
        clipPath: 'inset(0 33.5rem 0 0)',
      },
      to: [
        {
          clipPath: 'inset(0px 0px 0px 0rem)',
        },
      ],
    }),
    ref,
  ];
};

export const useHeroDotSpring = ({ config }) => {
  const ref = useRef();
  return [
    useSpring({
      config: {
        ...config,
        tension: 300,
        friction: 10,
      },
      ref,
      from: { transform: 'translate3d(0, 3rem, 0) scale3d(0, 0, 1)' },
      to: [{ transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)' }],
    }),
    ref,
  ];
};

export const useHeadlineSpring = ({ config, onRest }) => {
  const ref = useRef();
  return [
    useSpring({
      config,
      ref,
      from: {
        transform: `translate3d(0, 4rem, 0)`,
        opacity: 0,
      },
      to: [
        {
          transform: `translate3d(0, 0, 0)`,
          opacity: 1,
        },
      ],
      onRest,
    }),
    ref,
  ];
};
