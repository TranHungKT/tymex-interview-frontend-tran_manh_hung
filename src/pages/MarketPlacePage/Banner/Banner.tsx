import React from 'react';
import './styles.css';
export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner_background-image">
        <img
          src={`/assets/images/new-arrival-text.png`}
          alt="New arrival text"
          className="banner_new-arrival-image"
        />

        <img src={`/assets/images/topic.png`} alt="topic" className="banner_topic-image" />
        <img src={`/assets/images/dj.png`} alt="dj" className="banner_dj-image" />
        <img src={`/assets/images/dj-text.png`} alt="dj-text" className="banner_dj-text-image" />
      </div>
    </div>
  );
}
