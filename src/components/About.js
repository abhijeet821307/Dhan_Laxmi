import React from 'react';

const About = () => {
    return (
        <section className="section about" id="about" aria-label="about">
            <div className="container">
                <figure className="about-banner img-holder" style={{ '--width': 400, '--height': 720 }}>
                    <img src="./assets/images/adami.jpeg" width="400" height="720" loading="lazy" alt="" className="img-cover" />

                </figure>
                <div className="about-content">
                    <p className="section-subtitle">Why Choose Us</p>
                    <h2 className="h2 section-title">We Are Professional Logistics & cargo Agency</h2>
                    <p className="section-text">
                        At Dhanlaxmi Logistic, we ensure fast, secure, and efficient cargo delivery. With global reach and local expertise, we provide reliable logistics solutions tailored to your needs. Move smarter, grow faster.</p>
                    <ul className="about-list">
                        <li className="about-item">
                            <div className="about-icon"><ion-icon name="chevron-forward"></ion-icon></div>
                            <p className="about-text">Go beyond logistics, make the world go round and revolutionize business.</p>
                        </li>

                    </ul>
                    <a href="#logisticsbanner" className="btn">Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default About;