function Navbar({ onHamClick }) {
  return (
    <nav class="fixed h-16 z-10 w-full flex justify-between items-center bg-gray-800 text-gray-300 p-3">
      <div class="left">
        <h1 class="text-2xl">DenisWritesCode</h1>
      </div>
      <div class="menu sm:hidden" onClick={onHamClick}>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      <div class="middle hidden sm:block">
        <li class="flex">
          <ul class="py-1 px-3 text-gray-200 bg-gray-900 rounded-lg">Home</ul>
          <ul class="py-1 px-3">Blog</ul>
          <ul class="py-1 px-3">Resume</ul>
          <ul class="py-1 px-3">Contact</ul>
        </li>
      </div>
      
    </nav>
  );
}

export default Navbar;
