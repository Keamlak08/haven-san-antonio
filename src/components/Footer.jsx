function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <img
          src="/haven-logo.png"
          alt="Haven"
          className="footer-logo"
        />

        <p>Haven: San Antonio</p>
        <p>Culture & Code</p>
      </div>

      <div className="footer-info">
        <p>
          A Hack Club event.
        </p>

        <p>
          Hack Club is a 501(c)(3) nonprofit organization
          helping teenagers build and create through technology.
        </p>

        <p>
          Made with ♥ by teenagers at Hack Club
        </p>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Hack Club</span>

        <a
          href="https://hackclub.com"
          target="_blank"
          rel="noreferrer"
        >
          Hack Club
        </a>
      </div>
    </footer>
  )
}

export default Footer