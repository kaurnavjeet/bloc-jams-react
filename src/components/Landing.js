import React from 'react'

const Landing = () => (
  <section className="landing">
    <div className="head-title">
      <div className="music-title">
        <h1 className="hero-title">Turn the music up</h1>
        <div className="slider left"></div>
        <div className="slider right"></div>
        <div className="diamond"></div>
      </div>
    </div>


    <section className="selling-point">
      <div className="point-left">
        <h2 className="title">Choose your music</h2>
        <p className="description">The world is full of music; why should you listen to music that someone else chose?</p>
      </div>
      <div className="point-center">
        <h2 className="title">Unlimited, streaming, ad-free</h2>
        <p className="description">No arbitrary limits. No distractions.</p>
       </div>
        <div className="point-right">
        <h2 className="title">Mobile enabled</h2>
        <p className="description">Listen to your music on the go. This streaming service is available on all mobile platform.</p>
      </div>
    </section>
  </section>
)

export default Landing;