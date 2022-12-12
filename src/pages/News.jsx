import React from "react";
import NewsStories from "../components/news/NewsStories";
import "../styles/news.scss"
import data from "../assets/newstories.json"

function News({ articleIngo }) {
    //reverses the json order, putting newiest stories first.
    const stories =[]
    data.forEach(e =>{
        stories.unshift(e)
    })

    console.log(stories);

  return (
    <NewsStories
      stories={stories}
      articleIngo={articleIngo}
      newsHeadline={<h2>FOOFEST NEWS</h2>}
    />
  );
}

export default News;
