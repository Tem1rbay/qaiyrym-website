import React from 'react'
import '../styles/Navbar.css';
import logo from '../drawable/qaiyrym_logo.png'
import { GoSearch } from 'react-icons/go';
import { IoShareOutline } from 'react-icons/io5';

function Navbar() {
    return (
        <div className="navbarContainer">
            <div>
                <button className="icon" onClick={() => console.log("Search button clicked")}>
                    <GoSearch style={{ width: 20, height: 20 }} />
                </button>

                <button className="iconText" onClick={() => console.log("Search button clicked")}>
                    Поиск
                </button>
            </div>
            <div>
                <button className="icon" onClick={() => console.log("Share button clicked")}>
                    <IoShareOutline style={{ width: 22, height: 22 }} />
                </button>

                <button className="iconText" onClick={() => console.log("Shares button clicked")}>
                    Поделиться
                </button>
            </div>
            <div>
                <img className="logo" src={logo} alt="Logo" />
                <strong className="navbarText">Qaiyrym</strong>
            </div>
            <div>
                <button className="donateButton" onClick={() => console.log("Donate button clicked")}>
                    Пожертвовать сейчас
                </button>
            </div>

        </div>
    )
}

export default Navbar;
