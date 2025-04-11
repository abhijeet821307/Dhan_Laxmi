import React from 'react';
export default function Services() {
    return (
        <section className=" service" id="service" aria-label="service">
            <div className="container">
                <p className="section-subtitle">All Services</p>
                <h2 className="h2 section-title">Trusted For Our Services</h2>
                <p className="section-text">
                    We take pride in delivering seamless logistics and cargo solutions. From transportation to warehousing, our services are designed for speed, security, and efficiency. Trust us to move your business forward with precision and care.
                </p>
                <ul className="service-list grid-list">
                    {[
                        {
                            title: 'Express - FTL', description: 'Fast and dedicated truck transportation for large shipments, ensuring quicker deliveries.'
                            , icon: './assets/images/service-icon-1.png'
                        },
                        {
                            title: 'Express PTL', description: 'Cost-effective shipping for smaller loads, sharing space while maintaining speed.',
                            icon: './assets/images/service-icon-1.png'
                        },
                        { title: 'Air Services', description: 'Swift and secure air cargo solutions for time-sensitive shipments.', icon: './assets/images/service-icon-3.png' },
                        { title: 'Speed Trucking:', description: 'High-priority trucking services for urgent deliveries at you will all teh time.', icon: './assets/images/service-icon-1.png' },
                        { title: 'Warehousing', description: 'Safe and efficient storage solutions for your goods, ensuring smooth supply chain operations.', icon: './assets/images/service-icon-5.png' },
                        { title: 'Rail Services', description: 'Rail Services: Reliable and economical freight transport via rail networks.', icon: './assets/images/service-icon-4.png' },
                    ].map((service, index) => (
                        <li key={index}>
                            <div className="service-card">
                                <div className="card-icon">
                                    <img src={service.icon} width="80" height="60" loading="lazy" alt={service.title} />
                                </div>
                                <h3 className="h3 card-title">
                                    <span className="span">{String(index + 1).padStart(2, '0')}</span> {service.title}
                                </h3>
                                <p className="card-text">{service.description}</p>
                                {/* <a href="#" className="btn-link">
                                    <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                                    <span className="span">View Detail</span>
                                </a> */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

