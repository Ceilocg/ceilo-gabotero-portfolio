import zeldaLogo from '/src/assets/zeldax.png';

export default function TopNav() {
    return (
        <nav className="topnav">
            <img src={zeldaLogo} alt="ZeldaX Logo" className="logo" />
        </nav>
    );
}