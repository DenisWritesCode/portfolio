function Navbar({ onHamClick }) {
  return (
    <nav className="fixed top-0 h-16 z-10 w-full flex justify-between items-center bg-gray-800 text-gray-300 p-3">
      <div className="left">
        <h1 className="text-2xl">DenisWritesCode</h1>
      </div>
      <div className="middle hidden sm:block">
        <li className="flex">
          <ul className="py-1 px-3 text-gray-200 bg-gray-900 rounded-lg">Home</ul>
          <ul className="py-1 px-3">Blog</ul>
          <ul className="py-1 px-3">Resume</ul>
          <ul className="py-1 px-3">Contact</ul>
        </li>
      </div>
      <div className="right">
        <li className="flex">
          <ul className="py-1 px-3">
            <i className="fab fa-twitter fa-lg"></i>
          </ul>
          <ul className="py-1 px-3">
            <i className="fab fa-linkedin fa-lg"></i>
          </ul>
          <ul className="py-1 px-3">
            <i className="fas fa-envelope-open-text fa-lg"></i>
          </ul>
        </li>
      </div>
      <div className="menu sm:hidden" onClick={onHamClick}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
