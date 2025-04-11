import React from 'react';

const Blog = () => {
    return (
        <section className="section blog" aria-label="blog" id="blog">
            <div className="container">
                <p className="section-subtitle">Our Blogs</p>
                <h2 className="h2 section-title">Recent news & events</h2>
                <p className="section-text">
                </p>
                <ul className="blog-list grid-list">
                    {[
                        {
                            title: 'The Future of Logistics in India: Trends and Innovations'
                            , date: '02 Aug', image: './assets/images/blog_Green.webp'
                        },
                        { title: 'Going forward, a new normal that has evolved from generation. moving your products across all borders.', date: '21 Aug', image: './assets/images/Blog_AI.webp' },
                    ].map((blog, index) => (
                        <li key={index}>
                            <div className="blog-card">
                                <figure className="card-banner img-holder" style={{ '--width': 770, '--height': 500 }}>
                                    <img src={blog.image} width="770" height="500" loading="lazy" alt={blog.title} className="img-cover" />
                                </figure>
                                <div className="card-content">
                                    {/* <time className="card-meta" dateTime="2022-08-02">
                                        <span className="span">{blog.date}</span>
                                    </time> */}
                                    <h3 className="h3 card-title">
                                        <a href="#">{blog.title}</a>
                                    </h3>
                                    <p className="card-text">
                                        With growing environmental concerns, India’s logistics industry is shifting towards sustainability. Companies are adopting electric vehicles, eco-friendly packaging, and green warehouses to reduce carbon footprints and build an environmentally responsible supply chain..
                                    </p>
                                    {/* <a href="#" className="btn-link">
                                        <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
                                        <span className="span">Read More</span>
                                    </a> */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Blog;