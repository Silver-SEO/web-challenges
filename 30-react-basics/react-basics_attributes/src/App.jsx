import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">Article Header H</h2>
      <label id="label" htmlFor="label">
        Test Article Lorem Ipsum Text
      </label>

      <input type="text" id="input-field" htmlFor="input-field"></input>

      <a className="article_link" href="https://www.wikipedia.org/">
        Wikipedia
      </a>
    </article>
  );
}
