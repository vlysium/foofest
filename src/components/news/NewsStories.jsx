import React from "react";
import "../../styles/news.scss";

function NewsStories({ stories, newButton, newsHeadline }) {
  console.log(stories);
  return (
    <section id="new-section">
      <div>{newsHeadline}</div>
      <div className="story-grid">
        {stories.map((story) => (
          <div className="news-card">
            <div
              style={{ backgroundImage: `url(../../public${story.image})` }}
              className="newsImage"
            ></div>
            <div className="storyContent">
              <h4>{story.headline}</h4>
              <p>{story.story}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
        {newButton}
      </div>
    </section>
  );
}

export default NewsStories;
