import React from 'react';

// Sample project data
const projects = [
    {
        id: 1,
        image: './assets/images/project-1.jpg',
        alt: 'Warehouse inventory',
        tag: 'Warehousing, Distribution',
        title: 'Warehouse Inventory',
        link: '#',
    },
    {
        id: 2,
        image: './assets/images/project-2.jpg',
        alt: 'Minimize Manufacturing',
        tag: 'Logistics, Analytics',
        title: 'Minimize Manufacturing',
        link: '#',
    },
    {
        id: 3,
        image: './assets/images/project-3.jpg',
        alt: 'Warehouse inventory',
        tag: 'Warehousing, Distribution',
        title: 'Warehouse Inventory',
        link: '#',
    },
    {
        id: 4,
        image: './assets/images/project-4.jpg',
        alt: 'Minimize Manufacturing',
        tag: 'Logistics, Analytics',
        title: 'Minimize Manufacturing',
        link: '#',
    },
    {
        id: 5,
        image: './assets/images/project-5.jpg',
        alt: 'Warehouse inventory',
        tag: 'Warehousing, Distribution',
        title: 'Warehouse Inventory',
        link: '#',
    },
    {
        id: 6,
        image: './assets/images/project-6.jpg',
        alt: 'Minimize Manufacturing',
        tag: 'Logistics, Analytics',
        title: 'Minimize Manufacturing',
        link: '#',
    },
];

const ProjectSection = () => {
    return (
        <section className="section project" aria-label="project">
            <div className="container">
                <p className="section-subtitle">Projects</p>
                <h2 className="h2 section-title">Featured Projects</h2>
                <p className="section-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
                    the when an printer took.
                </p>

                <ul className="project-list">
                    {projects.map((project) => (
                        <li className="project-item" key={project.id}>
                            <div className="project-card">
                                <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                                    <img
                                        src={project.image}
                                        width="397"
                                        height="352"
                                        loading="lazy"
                                        alt={project.alt}
                                        className="img-cover"
                                    />
                                </figure>

                                <button className="action-btn" aria-label="View image">
                                    <ion-icon name="expand-outline"></ion-icon>
                                </button>

                                <div className="card-content">
                                    <p className="card-tag">{project.tag}</p>
                                    <h3 className="h3">
                                        <a href={project.link} className="card-title">{project.title}</a>
                                    </h3>
                                    <a href={project.link} className="card-link">Read More</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjectSection;