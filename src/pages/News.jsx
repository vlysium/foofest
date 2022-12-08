import React from "react";
import NewsStories from "../components/news/NewsStories";
import "../styles/news.scss"
import stories from "../assets/newstories.json"

function News() {
  return (
    <NewsStories stories={stories} getArticleContent={getArticleContent} />
  );
}

export default News;
