import React from "react";
const LogisticsBanner = () => {
    return (
        <section id="logisticsbanner">
            <div className=" container service">
                <p className="section-subtitle" style={{ textAlign: "center" }}>About us</p>
                <h2 className="h2 section-title" style={{ textAlign: "center" }}>Our Organisation</h2>
                {/* <p className="section-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.
                </p> */}

                <div className="logistics-container pading">

                    <div className="left-section">
                        <h1 className="banner-heading">PREMIER LOGISTICS COMPANY</h1>
                        <img
                            src="https://images.unsplash.com/photo-1592963219385-53b52b371dd1?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Tablet showing logistics data"
                            className="tablet-image"
                        />
                    </div>


                    <div className="right-section">
                        {/* <h3>ABOUT US</h3> */}
                        {/* <h2>Our Organisation</h2> */}
                        <p>
                            OM Logistics, with more than three decades of expertise, proudly
                            stands as the premier supply chain and logistics management company in
                            India. We have meticulously developed a state-of-the-art
                            infrastructure, committed to delivering unparalleled services to all
                            our stakeholders.
                        </p>
                        <p>
                            We cater to large commercial enterprises as well as mid and
                            small-scale businesses. Embark on a journey of innovation,
                            reliability, and excellence with our team at OM Logistics as we
                            redefine the standards of the supply chain and logistics industry.
                        </p>


                        <div className="mission-box">
                            <p>
                                To promote teamwork and create a work environment that encourages
                                our workforce to continuously strive for quality & excellence,
                                thereby providing high-quality service to our customers.
                            </p>
                        </div>

                        <h3>OUR MISSION STATEMENT</h3>
                        <p className="mission-subtext">
                            Message From Our Managing Director's Desk
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default LogisticsBanner;
