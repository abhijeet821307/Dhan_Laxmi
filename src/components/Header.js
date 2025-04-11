
import React from 'react';

export default function Header({ isActive }) {
    return (
        <header className={`header ${isActive ? 'active' : ''}`} data-header>
            <div className="container">
                <h1>
                    <a href="#" className="logo">Dhan Laxmi Logistic</a>
                </h1>
                <nav className="navbar" data-navbar>
                    <div className="navbar-top">
                        <a href="#" className="logo" >Logistics</a>
                        <button className="nav-close-btn" aria-label="Close menu" data-nav-toggler>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>
                    <ul className="navbar-list">
                        <li className="navbar-item"><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
                        <li className="navbar-item"><a href="#about" className="navbar-link" data-nav-link>About</a></li>
                        <li className="navbar-item"><a href="#service" className="navbar-link" data-nav-link>Service</a></li>
                        <li className="navbar-item"><a href="#blog" className="navbar-link" data-nav-link>Blog</a></li>
                        <li className="navbar-item"><a href="#" className="navbar-link" data-nav-link>Contact</a></li>
                    </ul>
                </nav>
                <div className="header-contact">
                    <div>
                        <p className="contact-label">ANIKET SHAH</p>
                        <a href="tel:12345678910" className="contact-number">9332419425</a>
                        <a href="tel:12345678910" className="contact-number">8371940524</a>
                    </div>
                    <div className="contact-icon">
                        <ion-icon name="call-outline"></ion-icon>
                    </div>
                </div>
                <button className="nav-open-btn" aria-label="Open menu" data-nav-toggler>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
                <div className="overlay" data-nav-toggler data-overlay></div>
            </div>
        </header>
    );
};