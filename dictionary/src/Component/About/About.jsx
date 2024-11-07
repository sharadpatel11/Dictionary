import React from 'react';
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="information">
        <div className="infoHeading">
            <h2>Explore</h2>
            <h2>Language</h2>
            <h2>at a Glance</h2>
        </div>
        <p>Get more than just definitions. From finding the perfect synonym to understanding word origins and how to use terms effectively, we’ve got every tool to sharpen your language skills.</p>
      </div>
      <div className="images">
        <div className="one">
            <div class="feature-box">
                <div class="icon pen">
                    <span>🖋</span>
                </div>
                <div class="content">
                    <h3>Definitions</h3>
                    <p>Precise meanings for every word, from simple to complex.<br />Find clarity in every term.</p>
                </div>
             </div>
             <div class="feature-box">
                <div class="icon refresh">
                    <span>&#128472;</span>
                </div>
                <div class="content">
                    <h3>Word Origins</h3>
                    <p>Explore the history behind the words you use.<br />Every word has a story.</p>
                </div>
             </div>
        </div>
        <div>
            <div className="two">
                <div class="feature-box">
                    <div class="icon">
                        <span>★</span>
                    </div>
                    <div class="content">
                        <h3>Synonyms & Antonyms</h3>
                        <p>Broaden your vocabulary with alternative words.<br />Say it differently, express it better.</p>
                    </div>
                </div>
                <div class="feature-box">
                    <div class="icon braces">
                        <span>&#10100; &#10101;</span>
                    </div>
                    <div class="content">
                        <h3>Usage Examples</h3>
                        <p>See how words fit into your sentences. <br /> Master context, not just meaning.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
