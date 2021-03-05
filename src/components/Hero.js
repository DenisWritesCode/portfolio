import React from "react";
import profile from "../images/Profile.jpg";

function Hero() {
  return (
    <header className="bg-gray-800 text-gray-100 max-h-screen relative">
      <div className="header-content">
        <div className="flex items-center content-center justify-around pt-20 z-50">
          <div className="left w-1/2 text-center">
            <h1 className="text-4xl font-semibold m-3">
              Turning your ideas into reality
            </h1>
            <h2 className="text-3xl m-2">
              Using <span>&lt;Code/&gt;</span> to make a difference
            </h2>
            <p className="text-xl">
              Hey there 👋🏾, I am <span className="text-2xl font-semibold"> Denis Mutinda</span>. A
              junior Full-Stack Web developer.
            </p>
            <p className="text-xl">
              I give wings to your ideas and you decide where to fly!
            </p>

            <button class="inline-flex items-center h-10 px-5 text-gray-800 bg-gray-100 text-xl font-semibold rounded-2xl relative top-10 -left-20 animate-bounce">
              <span className="mr-2">Let's Start</span>
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
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                ></path>
              </svg>
            </button>
          </div>
          <div className="right w-1/3">
            <img
              alt="Denis Profile"
              class="cursor-pointer hover:shadow-outline w-96 h-96 rounded-full object-cover object-center"
              src={profile}
            />
          </div>
        </div>

        <div className="relative z-0 -mt-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="wave block"
          >
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,128L60,154.7C120,181,240,235,360,224C480,213,600,139,720,128C840,117,960,171,1080,170.7C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Hero;
