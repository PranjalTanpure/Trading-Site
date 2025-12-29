import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Global Trade</h2>
        <h6>Sourcing | Trading | Shipping</h6>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutUs">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
