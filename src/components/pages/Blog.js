import React from "react";
import "./styles.css";

const blogs = [
    {
        title: "The Future of AI",
        image:
            "https://images.unsplash.com/photo-1706466614967-f4f14a3d9d08?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content:
            "Artificial Intelligence is transforming industries, creating new opportunities, and revolutionizing the way we interact with technology. The future of AI holds endless possibilities...",
        additionalImages: [
            "https://images.unsplash.com/photo-1717501218511-768944e2c325?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1717501218347-64853a917fd8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
    },
    {
        title: "Sustainable Living in 2025",
        image:
            "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content:
            "As we move towards a more sustainable future, adopting eco-friendly habits is more important than ever. From renewable energy to zero-waste lifestyles, sustainability is shaping our world...",
        additionalImages: [
            "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1717501218385-55bc3a95be94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D",
        ],
    },
];

const BlogSite = () => {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img
                        src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Logo"
                        className="logo-image"
                    />
                    <span>Dhan Laxmi Logistics</span>
                </div>
                <nav className="header-nav">
                    <button className="home-button">Home</button>
                </nav>
            </header>
            <div className="blog-container">
                <h1 className="blog-title">Latest Blogs</h1>
                {blogs.map((blog, index) => (
                    <article key={index} className="blog-post">
                        <h2 className="blog-heading">{blog.title}</h2>
                        <img src={blog.image} alt={blog.title} className="blog-image" />
                        <p className="blog-content">{blog.content}</p>
                        <div className="blog-images">
                            {blog.additionalImages.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt="Related visual"
                                    className="blog-additional-image"
                                />
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default BlogSite;
