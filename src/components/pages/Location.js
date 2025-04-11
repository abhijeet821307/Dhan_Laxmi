import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

const data = [
    {
        state: "Delhi",
        cities: [
            {
                name: "Qutub Road",
                shopOwner: "Mr. Sunil",
                Address: "4297/1 Pul Mithai, Near American TPC, Opp. Pili Kothi",
                contact: "95551-34976, 88105-43913",
            },
            {
                name: "Wazirpur",
                shopOwner: "Mr. Ajay Dhaka",
                Address: "C-11, Wazirpur Industrial Area, Near Allahabad Bank",
                contact: "81785-24982",
            },
            {
                name: "Kamla Market",
                shopOwner: "Mr. Rabindra Pandey",
                Address: "Shop No. 34, Punjabi Market, Opp. 227 K Market",
                contact: "93509-83820, 89293-99702",
            },
            {
                name: "Kamla Market",
                shopOwner: "Mr. Raman Rai",
                Address: "196, Kamla Market, Ajmeri Gate, New Delhi-110002",
                contact: "80767-43835, 93542-10948",
            },
            {
                name: "Sanjay Gandhi Transport Nagar",
                shopOwner: "Mr. Manoj Kumar",
                Address: "AG-377, Near Shri Ram Dharamkanta, Delhi-110042",
                contact: "011-47525507, 80930-04664, 95408-15713",
            },
            {
                name: "Daya Basti",
                shopOwner: "Mr. Ram Kumar",
                Address: "19/93, Near Bhaskar Bhawan",
                contact: "95404-32309",
            },
            {
                name: "Mayapuri",
                shopOwner: "Mr. Hemant Bhardwaj",
                Address:
                    "4/4, Phase-11, Opp. Punjab And Sindh Bank, Delhi Facility Centre",
                contact: "90157-90751",
            },
            {
                name: "Karol Bagh",
                shopOwner: "Mr. Ramakant",
                Address:
                    "43/75 D.B. Gupta Road, Near Delhi Jal Board Gate No. 02, New Delhi-05",
                contact: "95556-08762,95556-08762, 93128-05403",
            },
            {
                name: "Libaspur",
                shopOwner: "Mr. Mahendra",
                Address:
                    "66, Gupta Road, Galli No. 04, Godown No. 01, Near Peer Baba Ki Mazaar",
                contact: "88003-84495, 96675-79301, 98919-93044",
            },
            {
                name: "Shahadra Vishwas Nagar",
                shopOwner: "Mr. Ershad Anwar",
                Address: "500/20/B-1, Gali No. 12/13 Nala Side, Vishwas Nagar",
                contact: "98116-89946, 87007-06393",
            },
            {
                name: "Mangolpuri",
                shopOwner: "Mr. Raj Kumar",
                Address: "B-13, Oil Market",
                contact: "93107-88275, 85953-45840",
            },
            {
                name: "Narela",
                shopOwner: "Mr. Satyendra",
                Address:
                    "Plot No. 47, B-4, Pocket-8, New Punjabi Colony, Narela, Delhi-110040",
                contact: "79824-45840",
            },
            {
                name: "Bawana",
                shopOwner: "Mr. Naresh Kumar",
                Address:
                    "154/2, Firni Road, Opp. Petrol Pump, Phoot Karth Bawana, Delhi-110039",
                contact: "95555-23436, 74790-00556",
            },
            {
                name: "Gandhi Nagar",
                shopOwner: "Mr. Nitish",
                Address:
                    "IX/1102 New Post Office, Opp. Gurudwara Gandhi Nagar, Delhi-110031",
                contact: "92679-15557",
            },
        ],
    },
    {
        state: "Uttar Pradesh",
        cities: [
            {
                name: "UP Border Ghaziabad",
                shopOwner: "Mr. Monu Sharma/Mr. Anam Sah",
                Address:
                    "Prem Crane Compound, Near Shahid Nagar Metro Station, Chikambarpur, Ghaziabad",
                contact: "98005-00773, 85095-76006",
            },

            {
                name: "Meerut",
                shopOwner: "Mr. B N Malhotra",
                Address: "266, Transport Nagar, Meerut",
                contact: "87556-86841",
            },
            {
                name: "Agra",
                shopOwner: "Mr. Yogesh Sharma",
                Address: "21/35A, Freeganj Road, Agra-282004",
                contact: "93199-67212",
            },
            {
                name: "Aligarh",
                shopOwner: "Mr. Mukesh",
                Address: "Jhammanlal Saria Mill Compound, Sasni Gate, Agra Road",
                contact: "82183-91549",
            },
        ],
    },
    {
        state: "Haryana",
        cities: [
            {
                name: "Hisar",
                shopOwner: "Mr. Purushottam",
                Address: "M.N. School Road, Shastri Nagar, Opp. LPG Limited, Rohtak",
                contact: "84483-20221, 85953-84221",
            },
            {
                name: "Faridabad",
                shopOwner: "Mr. Aftab Ali",
                Address: "Mathura Road, Sarpanch Colony, Opp. Metro Pillar No. 755",
                contact: "98998-25181",
            },
            {
                name: "Panipat",
                shopOwner: "Mr. Priyam Sharma",
                Address: "Devendra Dhabe Wali Galli, Near Amar Transport, Sanoli",
                contact: "90348-17976, 99967-17976",
            },
            {
                name: "Bhiwani",
                shopOwner: "Mr. Kumar",
                Address: "Delhi Road, Near Bus Stand, Bhiwani-127021",
                contact: "84483-10221",
            },
        ],
    },
    {
        state: "West Bengal",
        cities: [
            {
                name: "Siliguri",
                shopOwner: "Mr. Gajendra Prasad Sah",
                Address:
                    "Om Tower, Mittal Gardens, Sevoke Road, Opp. Anandaloke Hospital",
                contact:
                    "93324-19425, 83719-40524, 70472-11951, 75018-86321, 70018-96791",
            },
            {
                name: "Jaigaon",
                shopOwner: "Mr. Pukhraj Pandiya",
                Address: "Agrasen Bhawan, Jaigaon-736182",
                contact: "99339-46722",
            },
            {
                name: "Cooch Behar",
                shopOwner: "Mr. Partha Saha",
                Address: "S.N Road, Near Durga Bari, Near Bajrang Bali Statue",
                contact: "98323-57800, 93333-16806",
            },
        ],
    },
    {
        state: "Skikim",
        cities: [
            {
                name: "Sikkim",
                shopOwner: "Mr. Aniket Sah",
                Address: "N/A",
                contact: "62952-59708, 83719-40524",
            },
        ],
    },
    {
        state: "Gujarat",
        cities: [
            {
                name: "Rajkot",
                shopOwner: "Mr. Nemi Chand Verma",
                Address:
                    "Near Old Swati Park, Main Road, Jeet Industrial Area, Kotaria (South Rajkot-360003)",
                contact: "95101-07775, 82649-50883",
            },
            {
                name: "Ahmedabad",
                shopOwner: "Mr. Sandeep Verma",
                Address:
                    "Vaibhav Laxmi Commercial Park, Godown No. 15, Daskroi, Aslali-382427",
                contact: "90165-49661",
            },
            {
                name: "Jamnagar",
                shopOwner: "Mr. Nemi Chand Verma",
                Address: "N/A",
                contact: "95101-07775, 82649-50883",
            },
            {
                name: "Halol",
                shopOwner: "Mr. Atul Sharma",
                Address:
                    "83, Reliance Industrial State, Behind Bansal Mall, GIC Road, Halol-389350",
                contact: "80002-11109, 80008-38422",
            },
            {
                name: "Bhavnagar",
                shopOwner: "Mr. J. T. Yadav & Mr. Manish Yadav",
                Address:
                    "Near Maru Petrol Pump, Krishna Industrial Area, Godown No A/10, Bhavnagar-364001",
                contact: "97271-56626, 94269-17297",
            },
            {
                name: "Vadodara",
                shopOwner: "Mr. Atul Sharma",
                Address: "N/A",
                contact: "80002-11109, 80008-38422",
            },
            {
                name: "Vapi",
                shopOwner: "Mr. Gopal Chowdhury",
                Address: "N/A",
                contact: "99253-61008",
            },
        ],
    },
    {
        state: "Maharashtra",
        cities: [
            {
                name: "Bhiwandi & Mumbai City",
                shopOwner: "Mr. Binod Mishra",
                Address: "N/A",
                contact: "80071-31250",
            },
        ],
    },
];

const StateCityTable = () => {
    const [selectedState, setSelectedState] = useState(null);
    const [expandedCities, setExpandedCities] = useState({});

    const toggleState = (stateIndex) => {
        setSelectedState((prev) => (prev === stateIndex ? null : stateIndex));
        setExpandedCities({});
    };

    const toggleCity = (stateIndex, cityIndex) => {
        setExpandedCities((prev) => ({
            ...prev,
            [`${stateIndex}-${cityIndex}`]: !prev[`${stateIndex}-${cityIndex}`],
        }));
    };

    const navigate = useNavigate();

    return (
        <div className="container-location">
            <nav className="navbar-location">
                <div className="logo-location">DHAN LAXMI LOGISTICS</div>
                <button className="home-button-location" onClick={() => navigate("/")}>Home</button>
            </nav>
            <div className="table-container-location">
                <h2 className="heading-location">Our Branches</h2>
                <table className="table-location">
                    <thead>
                        <tr className="table-header-location">
                            <th className="state-header-location">State</th>
                            <th className="city-header-location">City</th>
                            <th className="incharge-header-location">Branch Incharge</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((stateData, stateIndex) => (
                            <React.Fragment key={stateIndex}>
                                <tr
                                    className="state-row-location"
                                    onClick={() => toggleState(stateIndex)}
                                >
                                    <td colSpan="3">
                                        {stateData.state}{" "}

                                        {selectedState === stateIndex ? "▲" : "▼"}

                                    </td>
                                </tr>

                                {selectedState === stateIndex &&
                                    stateData.cities.map((city, cityIndex) => (
                                        <React.Fragment key={cityIndex}>
                                            <tr
                                                className="city-row-location"
                                                onClick={() => toggleCity(stateIndex, cityIndex)}
                                            >
                                                <td className="empty-cell-location"></td>
                                                <td className="city-data-location">
                                                    {city.name}{" "}

                                                    {expandedCities[`${stateIndex}-${cityIndex}`]
                                                        ? "▲"
                                                        : "▼"}

                                                </td>
                                                <td className="empty-cell-location"></td>
                                            </tr>

                                            {expandedCities[`${stateIndex}-${cityIndex}`] && (
                                                <tr className="details-row-location">
                                                    <td className="empty-cell-location"></td>
                                                    <td className="empty-cell-location"></td>
                                                    <td className="details-data-location">
                                                        <p className="details-text-location">
                                                            <strong>Owner:</strong> {city.shopOwner} <br />
                                                            <strong>Address:</strong> {city.Address} <br />
                                                            <strong>Contact:</strong> {city.contact}
                                                        </p>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default function App() {
    return <StateCityTable />;
}