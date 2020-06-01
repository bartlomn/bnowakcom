import Home from './../components/home';

const staticContent = () => (
  <>
    <section className="contact">
      <ul className="linklist">
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">past projects</a>
        </li>
        <li>
          <a href="#">front-end</a>
        </li>
        <li>
          <a href="#">back-end</a>
        </li>
        <li>
          <a href="#">dev&cloud ops</a>
        </li>

        <br />
      </ul>
    </section>
  </>
);

const Page = () => <Home />;

export default Page;
