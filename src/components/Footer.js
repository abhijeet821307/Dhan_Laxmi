import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top section">
                    <div className="footer-brand">
                        <a href="#" className="logo">Dhan Laxmi</a>
                        <p className="footer-text">
                            Get the best transport solution here.
                        </p>
                        {/* <ul className="social-list">
                            {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
                                <li key={platform}>
                                    <a href="#" className="social-link">
                                        <ion-icon name={`logo-${platform}`}></ion-icon>
                                    </a>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Quick Links</p>
                        </li>
                        {['About', 'Services', 'Blog', 'FAQ', 'Contact Us'].map((link) => (
                            <li key={link}>
                                <a href="#" className="footer-link">{link}</a>
                            </li>
                        ))}
                    </ul>
                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Services</p>
                        </li>
                        {['Express FTL', 'Express PTL', 'Air Services', 'Speed Truckig', 'Rail Services '].map((service) => (
                            <li key={service}>
                                <a href="#" className="footer-link">{service}</a>
                            </li>
                        ))}
                    </ul>
                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Community</p>
                        </li>
                        {['Business Consulting', 'Testimonials', 'Track Your Shipment', 'Privacy Policy', 'Terms & Condition'].map((community) => (
                            <li key={community}>
                                <a href="#" className="footer-link">{community}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">
                        &copy;. All Rights Reserved by <a href="#" className="copyright-link">Dhan Laxmi Logistic</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;