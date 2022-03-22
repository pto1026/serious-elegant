export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="#">Cars</a>
        </li>
        <li className="navbar__link">
          <a href="#">Others</a>
        </li>
        <li className="navbar__link">
          <a href="#">Exclusives</a>
        </li>
        <li className="navbar__link">
          <a href="#">FAQs</a>
        </li>
        <li className="navbar__link">
          <a href="#">Contact</a>
        </li>
      </ul>
      <h2 className="navbar__name">Winston&apos;s</h2>
      <a href="#" className="navbar__btn btn btn--primary">
        Request a service
      </a>
    </nav>
  );
}
