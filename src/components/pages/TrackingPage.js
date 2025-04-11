import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrackingPage.css";

export default function TrackingPage () {
    const navigate = useNavigate();
    const [consignmentNumber, setConsignmentNumber] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleTrack = async () => {
        if (!consignmentNumber.trim()) {
            setError("Please enter a valid consignment number.");
            return;
        }
        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                `https://dhanlaxmi.logisticsoftware.in/ajax.php?type=track_gr&gr_no=${consignmentNumber}&iswebsite=1`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch tracking information.");
            }

            const data = await response.json();

            if (!data || Object.keys(data).length === 0 || !data.book_gr || data.book_gr.length === 0) {
                throw new Error("Consignment number does not exist.");
            }

            localStorage.setItem("trackingData", JSON.stringify(data));
            navigate(`/track/${encodeURIComponent(consignmentNumber)}`);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleenter = (e) => {
        if (e.key === 'Enter') {
            handleTrack();
        }
    };

    return (
        <div>
            <nav className="navbar-track">
                <div className="logo-track">DHAN LAXMI LOGISTICS</div>
                <button className="home-button-track" onClick={() => navigate("/")}>Home</button>
            </nav>

            <div className="container-track">
                <div className="left-section-track">
                    <div className="tracking-container-track">
                        <div className="content-track">
                            <div className="promo-section-track">
                                <h2>Dhan Laxmi Logistics</h2>
                            </div>

                            <div className="tracking-section-track">
                                <h3>
                                    Track your order
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Enter your consignment number"
                                    value={consignmentNumber}
                                    onChange={(e) => setConsignmentNumber(e.target.value)}
                                    onKeyDown={handleenter} 
                                    className="input-box-track"
                                />
                                <button className="track-button-track" onClick={handleTrack} disabled={loading}>
                                    {loading ? "Tracking..." : "Track Now"}
                                </button>

                                {error && <p className="error-message-track">{error}</p>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-section-track">
                    <p>
                        Logistics involves planning, managing, and coordinating the movement of goods, services, and information.
                        It includes transportation, warehousing, inventory management, and supply chain optimization to ensure efficient
                        delivery and operations.
                    </p>
                </div>
            </div>
        </div>
    );
};
