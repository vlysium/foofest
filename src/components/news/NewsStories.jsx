import React from "react";
import "../../styles/news.scss";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Article from "./Article";

function NewsStories({ stories, newButton, newsHeadline, articleIngo }) {
  //console.log(stories);
  return (
    <section id="new-section">
      <div>{newsHeadline}</div>
      <div className="story-wrapper">
        <div className="story-grid">
          {stories.reverse().map((story, index) => (
            <>
              <div className="news-card" key={index}>
                <div style={{ backgroundImage: `url(../../public${story.image})` }} className="newsImage"></div>
                <div className="storyContent">
                  <h4>{story.headline}</h4>
                  <p>{story.story}</p>

                  <button
                    className="btn"
                    onClick={() => articleIngo(story.story, story.url, story.headline, story.image)}
                  >
                    <Link to={`/news/${story.url}`}>Read More</Link>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <div>{newButton}</div>
      </div>
    </section>
  );
}

export default NewsStories;
