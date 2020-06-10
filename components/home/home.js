import ControlIcons from './../icons';
import HeaderComponent from './../header';
import IntroductionComponent from './../introduction';
import ContactLinks from './../contactlinks';
import About from './../about';
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
      initialCameraPos: [30, 160, 550],
      targetCameraPos: [
        -100 + window.innerWidth / (window.innerWidth / 60),
        130,
        175,
      ], // 32
      duration: 10,
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
      <About />
      <ControlIcons />
    </>
  );
};

export default Home;
