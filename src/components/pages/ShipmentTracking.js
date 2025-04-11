import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ShipmentTracking.css";

const ShipmentTracking = () => {
    const { consignmentNumber } = useParams();
    const navigate = useNavigate();
    const decodedConsignmentNumber = decodeURIComponent(consignmentNumber);
    const trackingData = JSON.parse(localStorage.getItem("trackingData"));

    useEffect(() => {
        if (!trackingData || !trackingData.book_gr || trackingData.book_gr.length === 0) {
            navigate("/");
        }
    }, [trackingData, navigate]);

    if (!trackingData || !trackingData.book_gr || trackingData.book_gr.length === 0) {
        return <div>Tracking information not found.</div>;
    }

    const bookGR = trackingData.book_gr[0];

    const determineStatus = (shipment) => {
        if (trackingData.pod && trackingData.pod.length > 0) {
            return "Delivered";
        }
        if (trackingData.challan && trackingData.challan.length > 0) {
            const latestChallan = trackingData.challan[trackingData.challan.length - 1];
            if (shipment.vehicle_moved) {
                return "In Transit";
            }
            return "Dispatched";
        }
        if (shipment.gr_entry) {
            return "Pending";
        }
        return "Unknown";
    };

    const status = determineStatus(bookGR);

    const handlePrint = () => {
        window.print();
    };

    const getStatusClass = (step) => {
        const statusOrder = ["Pending", "Dispatched", "In Transit", "Delivered"];
        const currentIndex = statusOrder.indexOf(status);
        const stepIndex = statusOrder.indexOf(step);
        
        if (stepIndex < currentIndex) return "completed";
        if (stepIndex === currentIndex) return "active";
        return "";
    };

    return (
        <div className="shipment-container-ship">
            <button className="print-button-ship" onClick={handlePrint}>Print</button>
            <h2 className="header-ship">
                Waybill No: {bookGR.gr_id} | GR No: {bookGR.gr_no}
            </h2>

            <div className="progress-tracker-ship">
                <div className={`progress-step-ship ${getStatusClass("Pending")}`}>
                    <div className="step-icon-ship">1</div>
                    <div className="step-label-ship">Pending</div>
                </div>
                <div className={`progress-step-ship ${getStatusClass("Dispatched")}`}>
                    <div className="step-icon-ship">2</div>
                    <div className="step-label-ship">Dispatched</div>
                </div>
                <div className={`progress-step-ship ${getStatusClass("In Transit")}`}>
                    <div className="step-icon-ship">3</div>
                    <div className="step-label-ship">In Transit</div>
                </div>
                <div className={`progress-step-ship ${getStatusClass("Delivered")}`}>
                    <div className="step-icon-ship">4</div>
                    <div className="step-label-ship">Delivered</div>
                </div>
            </div>

            <div className="shipment-details-ship">
                <table className="shipment-table-ship">
                    <tbody>
                        <tr>
                            <td className="table-header-ship">GR No.</td>
                            <td className="table-data-ship">{bookGR.gr_no}</td>
                        </tr>
                        <tr>
                            <td className="table-header-ship">Booking Date</td>
                            <td className="table-data-ship">{bookGR.gr_date}</td>
                        </tr>
                        <tr>
                            <td className="table-header-ship">No. of Packages</td>
                            <td className="table-data-ship">{bookGR.t_pkg}</td>
                        </tr>
                        <tr>
                            <td className="table-header-ship">Weight</td>
                            <td className="table-data-ship">{bookGR.act_wt} kg</td>
                        </tr>
                        <tr>
                            <td className="table-header-ship">From</td>
                            <td className="table-data-ship">{bookGR.source}</td>
                        </tr>
                        <tr>
                            <td className="table-header-ship">To</td>
                            <td className="table-data-ship">{bookGR.destination}</td>
                        </tr>
                        <tr>
                            <td className="table-header-ship">Booking Mode</td>
                            <td className="table-data-ship">{bookGR.mode}</td>
                        </tr>
                        <tr>
                            <td className="table-header-ship">Status</td>
                            <td className={`table-data-ship status-${status.toLowerCase().replace(' ', '-')}`}>
                                {status}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShipmentTracking;