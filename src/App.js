import logo from "./logo.svg";
import "./App.css";
import QouteBox from "./components/UI/qoute_box";
import NewQuote from "./components/new_quote";
import { useSelector } from "react-redux";

function App() {
  const quote = useSelector((state) => state.quotes.value.text);
  const author = useSelector((state) => state.quotes.value.author);
  return (
    <div className="App">
      <QouteBox>
        <p id="text">{quote}</p> <br />
        <span id="author">{author}</span> <br />
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <button>tweet quote</button>
        </a>
        <NewQuote />
      </QouteBox>
    </div>
  );
}

export default App;
