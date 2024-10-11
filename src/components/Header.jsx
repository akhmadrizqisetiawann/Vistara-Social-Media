import { useState } from 'react'
import './Header.css'
import Vistara from '/vistara_logo.png'


function Header() {
    const [count, setCount] = useState(0)
        return (
        <>
        <header>
            <div class="nav-logo">
                <img src={Vistara} alt="Logo" />
            </div>
            <nav class="nav-menu">
                <ul>
                    <li><a href="#home">H</a></li>
                    <li><a href="#about">A</a></li>
                    <li><a href="#contact">C</a></li>
                </ul>
            </nav>
            <div className="settings-menu">
                <a href="#home">S</a>
            </div>
        </header>
        </>
    )
}

export default Header
