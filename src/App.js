import { useEffect, useState } from "react";
import "./App.css";
const Functional = () => {
  const [p, setP] = useState("");
  const [state, setState] = useState([]);
  const [name, setName] = useState("Confucius");
  const [Quote, setQuote] = useState(
    "Everything has beauty, but not everyone can see."
  );
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((elem) => setState(elem));
  }, []);

  const handleValues = () => {
    var Author;
    var Quote;
    let result = Math.floor(Math.random() * 101);
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    for (const [key, value] of Object.entries(state)) {
      Author = value[result].author;
      Quote = value[result].quote;
      setName(Author);
      setQuote(Quote);
      setP(`#${randomColor}`);
    }
    return Author;
  };
  return (
    <div style={{ height: "100vh", width: "100%", background: p }}>
      <div id="wrapper" className="container-md wrapper">
        <div id="quote-box " className="card">
          <blockquote className="blockquote lead">
            <i id="quote-mark" style={{ color: p }} className="bi bi-quote"></i>
            <p id="text" style={{ color: p }}>
              {Quote}
            </p>
          </blockquote>
          <figcaption
            id="author"
            style={{ color: p }}
            className="blockquote-footer"
          >
            {name}
          </figcaption>
          <button
            type="button"
            class="btn btn-secondary btn-sm"
            style={{ background: p }}
            onClick={handleValues}
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Functional;
