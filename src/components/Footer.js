import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="heading-secondary">Runinc</h2>
      <p className="footer__text">Kannikegade 12</p>
      <p className="footer__text">8000 Aarhus C</p>
      <a href="tel:+4526132696" title="Call us" className="footer__link">
        Telefon 26132696
      </a>
      <a href="mailto:info@runinc.dk" title="Mail us" className="footer__link">
        info@runinc.dk
      </a>
    </footer>
  )
}

export default Footer
