import { animated } from 'react-spring';
import { linkList, linkStyle, ulStyle, section } from './contactLinks.scss';

const links = [
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
  //   {
  //     href: "https://twitter.com/bartlomn",
  //     title: "Twitter profile",
  //     text: "Twitter",
  //   },
];

const ContactLinks = ({ style }) => {
  return (
    <animated.section style={style} className={section}>
      <ul className={linkList}>
        {links.map(({ href, title, text }) => (
          <li key={href} className={ulStyle}>
            <a href={href} title={title} className={linkStyle}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </animated.section>
  );
};

export default ContactLinks;
