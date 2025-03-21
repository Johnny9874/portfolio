import './../styles/Header.css'; // Import Header.css

const Header = () => {
    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>Johnny YE</div>
                <ul className='nav-links'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; // Export Header