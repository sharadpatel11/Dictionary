import React from 'react';
import "./Footer.css";

function Footer() {

    function handleSubmit() {
        alert('A button was clicked');
      };
    
  return (
    <div className='footer'>
      <div className="join">
        <h2>Join Our Word Community</h2>
      </div>
      <div className="thank">
        <p>Thank you for visiting! Discover more words, tips, and insights by bookmarking us. Share your favorites with friends!</p>
      </div>
      <div className='buttons'>
        <button className="bookmark" onClick={handleSubmit}>Bookmark Us</button>
        <button className="share" onClick={handleSubmit}>Share</button>
      </div>
    </div>
  )
}

export default Footer
