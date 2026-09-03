import { useState } from 'react'

function Hero() {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleRSVP = () => {
    setShowConfetti(true)

    setTimeout(() => {
      setShowConfetti(false)
    }, 1200)
  }

  return (
    <section className="hero">
      <div className="hero-art" aria-hidden="true">
        <div className="hero-art-placeholder">
          ARTWORK
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">HAVEN: SAN ANTONIO</p>

        <h1>
          Culture
          <br />
          &amp; Code
        </h1>

        <p className="hero-description">
          A game jam celebrating culture, creativity, and code in San Antonio.
        </p>

        <div className="hero-details">
          <span>November 11–12, 2026</span>
          <span>San Antonio, Texas</span>
        </div>

        <a
          className="rsvp-button"
          href="#"
          target="_blank"
          rel="noreferrer"
          onClick={handleRSVP}
        >
          RSVP
        </a>
      </div>
    </section>
  )
}

export default Hero