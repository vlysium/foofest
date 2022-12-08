import React from "react";
import NewsStories from "../components/news/NewsStories";
import "../styles/news.scss"
import stories from "../assets/newstories.json"

function News({ articleIngo }) {
  return <NewsStories stories={stories} articleIngo={articleIngo} />;
}

export default News;
