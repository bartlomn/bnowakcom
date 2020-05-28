import { animated } from "react-spring";
import { linkList, linkStyle, ulStyle } from "./contactLinks.module.css";

const links = [
  {
    href: "mailto:hibart@bart.rocks",
    title: "email",
    text: "hibart@bart.rocks",
  },
  {
    href: "http://www.linkedin.com/in/bartlomn",
    title: "LinkedIn profile",
    text: "LinkedIn",
  },
  {
    href: "https://github.com/bartlomn",
    title: "GitHub profile",
    text: "GitHub",
  },
//   {
//     href: "https://twitter.com/bartlomn",
//     title: "Twitter profile",
//     text: "Twitter",
//   },
];

const ContactLinks = ({ style }) => {
  return (
    <animated.section style={style}>
      <ul className={linkList}>
        {links.map(({ href, title, text }) => (
          <ul key={href} className={ulStyle}>
            <a href={href} title={title} className={linkStyle}>
              {text}
            </a>
          </ul>
        ))}
      </ul>
    </animated.section>
  );
};

export default ContactLinks;
