import React from "react";
import profile from "../images/Suit.png";

function Hero() {
  return (
    <header id="hero" className="bg-gray-800 text-gray-100 pt-16">
      <div className="top-content bg-gray-800 flex flex-col-reverse md:flex-row md:-mb-28">
        <div className="left flex flex-col justify-center text-left md:w-1/2 md:relative md:top-1 md:pl-5 px-3">
          <h1 className="text-4xl font-semibold">
            Turning Your Ideas into Reality
          </h1>
          <h2 className="text-3xl mt-2">
            Bettering the world one line of{" "}
            <span className="italic">&lt;Code/&gt;</span> at a time.
          </h2>
          <p className="text-xl my-2">
            Hey there 👋🏾, I am
            <span className="text-2xl font-semibold"> Denis Mutinda</span>. A
            junior Full-Stack Web developer.
          </p>
          <p className="text-xl mb-5 ">
            I give wings to your ideas and you decide where to fly!🚀
          </p>
          <div className="btn relative top-10 md:left-28">
            <a href="mailto:deniswritescode@gmail.com?subject=Mail from Portfolio">
              <button className="flex align-center justify-center text-xl text-gray-800 bg-gray-100 font-semibold rounded-2xl animate-bounce p-3">
                <span className="mr-2">Contact Me</span>
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
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="right flex justify-center p-2 md:w-1/2">
          <img
            alt="Denis Profile"
            className="cursor-pointer hover:shadow-outline rounded-full object-cover object-center h-96 w-96 md:relative md:top-10"
            src={profile}
          />
        </div>
      </div>
      <div className="bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1f2937"
            fillOpacity="1"
            d="M0,256L34.3,266.7C68.6,277,137,299,206,282.7C274.3,267,343,213,411,186.7C480,160,549,160,617,176C685.7,192,754,224,823,213.3C891.4,203,960,149,1029,154.7C1097.1,160,1166,224,1234,229.3C1302.9,235,1371,181,1406,154.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
      <hr />
    </header>
  );
}

export default Hero;
