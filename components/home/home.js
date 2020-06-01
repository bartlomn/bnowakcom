import { interpolate } from 'react-spring';
import HeaderComponent from './../header';
import IntroductionComponent from './../introduction';
import ContactLinks from './../contactlinks';
import renderScene from './../threejs/mainScene';
import { useHeaderSpring, useIntroSpring, useContactSpring } from './springs';

const config = {
  mass: 1,
  tension: 300,
  friction: 30,
};

const Home = () => {
  const onRest = () => {
    renderScene({
      initialCameraPos: [-30, 100, 300],
      targetCameraPos: [-50, 100, 175],
      duration: 15,
    });
  };
  const [{ y: headerPos }, headerRef] = useHeaderSpring({ config });
  const [{ y: introPos }, introRef] = useIntroSpring({ config, onRest });
  const [{ y: contactPos }, contactRef] = useContactSpring({ config });

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
          contactRef.current.start();
        }}
      />
      <IntroductionComponent
        style={{
          transform: introPos.interpolate(
            (pos) => `translate3d(0, ${pos}vh, 0)`
          ),
          opacity: introPos.interpolate((pos) => 1 - (pos * 4) / 100),
        }}
      />
      <ContactLinks
        style={{
          transform: contactPos.interpolate(
            (pos) => `translate3d(0, ${pos}vh, 0)`
          ),
          opacity: contactPos.interpolate((pos) => 1 - (pos * 4) / 100),
        }}
      />
    </>
  );
};

export default Home;
