import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="url">
        <div className="list">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
          </ul>
        </div>
        <div className="list">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Information</li>
            <li>Returns and Exchanges</li>
          </ul>
        </div>
        <div className="list">
          <h4>Services</h4>
          <ul>
            <li>Consulting</li>
            <li>Custom Solutions</li>
            <li>Product Support</li>
            <li>Training</li>
          </ul>
        </div>
      </div>

      <div className="copyright">Copyright © 2022-2024 AnhCBT. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
