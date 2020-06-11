import { animated } from 'react-spring';
import {
  linkList,
  linkStyle,
  listItemStyle,
  section,
} from './contactLinks.scss';

const links = [
  {
    href: '#',
    title: 'about',
    text: 'about',
    onClick: (ref) => (event) => {
      event.preventDefault();
      ref.current.setIsVisible(!ref.current.getIsVisible());
    },
  },
  {
    href: 'mailto:hi@bart.rocks',
    title: 'email',
    text: 'hi@bart.rocks',
  },
  {
    href: 'http://www.linkedin.com/in/bartlomn',
    title: 'LinkedIn profile',
    text: 'LinkedIn',
  },
  {
    href: 'https://github.com/bartlomn',
    title: 'GitHub profile',
    text: 'GitHub',
  },
];

const ContactLinks = ({ style, aboutRef }) => {
  return (
    <animated.section style={style} className={section}>
      <ul className={linkList}>
        {links.map(({ href, title, text, onClick = () => null }) => (
          <li key={href} className={listItemStyle}>
            <a
              href={href}
              title={title}
              className={linkStyle}
              data-text={text}
              onClick={onClick(aboutRef)}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </animated.section>
  );
};

export default ContactLinks;
