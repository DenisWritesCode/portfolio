function Navbar({ onHamClick }) {
  return (
    <nav className="fixed top-0 h-16 z-10 w-full flex justify-between items-center bg-gray-800 text-gray-300 p-3">
      <div className="left">
        <h1 className="text-2xl">
          <a href="#hero">DenisWritesCode</a>
        </h1>
      </div>
      <div className="middle hidden sm:block">
        <li className="flex">
          <ul className="cursor-pointer py-1 px-3 text-gray-200 bg-gray-900 rounded-lg">
            <a href="#hero" className="anchor">
              Home
            </a>
          </ul>
          <ul className="cursor-pointer py-1 px-3">
            <a href="#skillset">SkillSet</a>
          </ul>
          <ul className="cursor-pointer py-1 px-3">
            <a href="#projects" class="anchor">
              Experience
            </a>
          </ul>
        </li>
      </div>
      <div className="right">
        <li className="flex cursor-pointer">
          <ul className="py-1 px-3">
            <a href="https://twitter.com/DenisMMutinda/">
              <i className="cursor-pointer fab fa-twitter fa-lg"></i>
            </a>
          </ul>
          <ul className="py-1 px-3">
            <a href="https://www.linkedin.com/in/denis-mutinda-241500191/">
              <i className="cursor-pointer fab fa-linkedin fa-lg"></i>
            </a>
          </ul>
          <ul className="py-1 px-3">
            <a href="mailto:deniswritescode@gmail.com?subject=Mail from Portfolio">
              <i className="cursor-pointer fas fa-envelope-open-text fa-lg"></i>
            </a>
          </ul>
        </li>
      </div>
      <div className="menu sm:hidden" onClick={onHamClick}>
        <a href="#home">
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
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
