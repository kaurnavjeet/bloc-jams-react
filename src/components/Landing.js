import React from "react";

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title">Turn the music up</h1>

    <section className="selling-point">
      <div className="point">
        <i className="fas fa-music fa-2x" />
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">
          The world is full of music; why should you listen to music that
          someone else chose?
        </p>
      </div>
      <div className="point">
        <i className="fas fa-headphones-alt fa-2x" />
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">
          No arbitrary limits. No distractions.
        </p>
      </div>
      <div className="point">
        <i className="fas fa-mobile-alt fa-2x" />
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">
          Listen to your music on the go. This streaming service is available on
          all mobile platform.
        </p>
      </div>
    </section>
  </section>
);

export default Landing;
