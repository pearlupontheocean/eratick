import React from 'react';
import './styles.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h2 className="footer__title">ERATICK</h2>
        <p className="footer__text">
          ERATICK is a cutting-edge men's fashion brand known for its contemporary and stylish clothing. 
          The company focuses on providing high-quality, trendy apparel that caters to modern men's diverse 
          fashion needs. ERATICK's collections feature a blend of classic elegance and bold designs, perfect 
          for both casual and formal occasions. With a commitment to sustainability, ERATICK uses eco-friendly 
          materials and ethical production practices. The brand aims to redefine men's fashion by offering 
          innovative and versatile wardrobe essentials.
        </p>
      </div>

      <div className="footer__section">
        <h2 className="footer__title">Contact Us</h2>
        <p className="footer__text">Do you have any questions or suggestions?</p>
        <p className="footer__email">Contact@eratick.au</p>
        <p className="footer__text">Do you need support? Give us a call.</p>
        <p className="footer__phone">+61 404 777 780</p>
        <p className="footer__text">#460 Church St Parramatta NSW, Australia - 2150</p>
        <p className="footer__text">www.eratick.au</p>
      </div>
    </footer>
  );
};

export default Footer;
