import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../../styles/news.scss"
function Article({ headline, story, image}) {
    console.log(story)
  return (
    <div className="article">
      <button>
        <Link to="/news">Back</Link>
      </button>
        <div className="article-grid">
      <div
        style={{ backgroundImage: `url(../../public/${image})` }}
        className="newsImage"
      ></div>
      <div>
        <h2>{headline}</h2>
        <p>{story}</p>
      </div>
      </div>
    </div>
  );
}

export default Article;
