import React from "react";

function MobileNav() {
  return (
    <div className="bg-gray-800 text-gray-300 flex justify-center pt-16 -mb-16">
      <li class="flex flex-col text-center">
        <ul class="py-1 px-3 border-b-2 border-gray-300 text-gray-200 bg-gray-900 rounded-lg rounded-b-none">Home</ul>
        <ul class="py-1 px-3 border-b-2 border-gray-300 ">Blog</ul>
        <ul class="py-1 px-3 border-b-2 border-gray-300 ">Resume</ul>
        <ul class="py-1 pb-2 px-3 ">Contact</ul>
      </li>
    </div>
  );
}

export default MobileNav;
