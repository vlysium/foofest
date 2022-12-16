import { BrowserRouter as Router, Link, Routes, useParams } from "react-router-dom";
import "../../styles/news.scss";
import data from "../../assets/newstories.json";

function Article() {
  const params = useParams();
  let storyId = 0;
  data.forEach((e, i) => {
    if (e.url === params.id) {
      storyId = i;
    }
  });

  //console.log(params.id);
  return (
    <div className="article">
      <Link to="/news">
        <button className="btn">BACK</button>{" "}
      </Link>
      <div className="article-grid">
        <div
          style={{
            backgroundImage: `url(../..//${data[storyId].image})`,
          }}
          className="newsImage"
        ></div>
        <div className="article-content">
          <h2>{data[storyId].headline}</h2>
          <p>{data[storyId].story}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
