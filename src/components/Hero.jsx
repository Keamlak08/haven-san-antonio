import confetti from 'canvas-confetti'
import { motion } from 'motion/react'

function Hero() {
  const handleRSVP = () => {
    confetti({
      particleCount: 100,
      spread: 75,
      startVelocity: 35,
      origin: {
        x: 0.18,
        y: 0.65,
      },
      colors: ['#ffc928', '#fff4d6', '#f08b79', '#176b4d'],
      disableForReducedMotion: true,
    })
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

        <motion.a
          className="rsvp-button"
          href="#"
          target="_blank"
          rel="noreferrer"
          onClick={handleRSVP}
          whileHover={{
            scale: 1.05,
            rotate: -2,
          }}
          whileTap={{
            scale: 0.95,
            rotate: 1,
          }}
        >
          RSVP
        </motion.a>
      </div>
    </section>
  )
}

export default Hero