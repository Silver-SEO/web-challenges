import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article>
      <h2 className="article_header">Article Header H</h2>
      <label id="label">Test Article Lorem Ipsum Text</label>
      <br />
      <input htmlFor="test"></input>
      <br />
      <a className="article_link" href="https://www.wikipedia.org/">
        Wikipedia
      </a>
    </article>
  );
}
