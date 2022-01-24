 
import './css/App.css';

function App() {
  return (
    <>
      <div id="quote-box">
        This is quote box
        <div id="text">this is text</div>
        <div id="author">this is author</div>
        <button>
          <div id="new-quote">this is new quote</div>
        </button>
        <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">
          Twitter
        </a>
      </div>
    </>
  );
}

export default App;
