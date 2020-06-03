import { useRef } from 'react';
import { useSpring } from 'react-spring';

const common = {
  from: {
    y: 30,
  },
  to: [
    {
      y: 0,
    },
  ],
};

export const useHeaderSpring = ({ config }) => {
  const ref = useRef();
  return [
    useSpring({
      config,
      ref,
      ...common,
    }),
    ref,
  ];
};

export const useIntroSpring = ({ config, onRest, delay = 50 }) => {
  const ref = useRef();
  return [
    useSpring({
      config,
      ref,
      ...common,
      delay,
      onRest,
    }),
    ref,
  ];
};

export const useContactSpring = ({ config, onRest, delay = 75 }) => {
  const ref = useRef();
  return [
    useSpring({
      config,
      ref,
      ...common,
      delay,
      onRest,
    }),
    ref,
  ];
};
