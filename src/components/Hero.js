import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

export default function Hero() {
    const navigate = useNavigate();
    return (
        <section
            className="section hero"
            aria-label="home"
            id="home"
            style={{
                backgroundImage: "url('./assets/images/banner_new.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh"
            }}
        >
            <div className="container-hero">
                <div className="hero-content">
                    <h2 className="h1 hero-title">
                        <span className="span">SWift</span > Safe and Simple
                    </h2>
                    <p className="hero-text">
                        To provide the best services to our customers   Fast, Safe, and Simple
                    </p>
                    <div className="button-cont">
                        <a href="#" className="btn-outline" onClick={() => navigate('/tracking')}>Track Shipment</a>
                        <a href="#" className="btn-outline" onClick={() => navigate('/location')} >
                            Branch Locator
                        </a>
                        <a href="#" className="btn-outline" onClick={() => navigate('/pickup-request')}>Pickup Request</a>
                    </div>

                    <div className="hero-shape shape-1">
                        <img
                            src="./assets/images/logo.jpg"
                            width="116"
                            height="116"
                            loading="lazy"
                            alt="Decoration"
                        />
                    </div>
                </div>
            </div>
            <div className="social-media-container">
            <a
                    href="https://www.facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Facebook"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://www.twitter.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Twitter"
                >
                    <FaTwitter />
                </a>
                <a
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                >
                    <FaYoutube />
                </a>
                <a
                    href="https://www.linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                >
                    <FaWhatsapp />
                </a>
            </div>
        </section>
    );
}