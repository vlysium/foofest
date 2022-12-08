import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Article({ headline, story }) {
  return (
    <div>
      <button>
        <Link to="/news">Back</Link>
      </button>
      <div>;saligjslfgijfijo;is;fgil;</div>
      <div>
        <h2>{headline}</h2>
        <p>{story}</p>
      </div>
    </div>
  );
}

export default Article;
