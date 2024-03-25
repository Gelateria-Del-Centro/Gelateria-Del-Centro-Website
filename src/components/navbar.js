import React from 'react';
import styled from 'styled-components';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { HiHome } from 'react-icons/hi'; // Import HomeIcon

const OrderButton = styled.button`
    background-color: #ff6347; // Tomato color
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-top: 30px;
    margin-right: 140px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ff4500; // Orangered color
    }

    @media (max-width: 415px) {
        font-size: 14px; /* Decrease font size for smaller screens */
        margin-left: auto; /* Push the button to the right */
        margin-right: 0; /* Remove right margin for smaller screens */
    }
`;

const Navbar = ({ toggleModal }) => {
    const location = useLocation();

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-item">
                    {location.pathname !== "/" && (
                        <Link to="/">
                            <HiHome size={35} style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} />
                        </Link>
                    )}
                    <p>2017 Tuolumne St Fresno, CA 93721</p>
                </div>
                <OrderButton className="navbar-item order-now" onClick={toggleModal}>
                    ORDER NOW
                </OrderButton>
            </nav>
        </div>
    );
}

export default Navbar;