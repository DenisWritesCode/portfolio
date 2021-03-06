function HeroFull() {
  return (
    <section className="resume bg-gray-200">
      <div className="about bg-gray-800 text-gray-100 p-5 pb-32 md:relative">
        <h1 className="text-3xl font-semibold text-center tracking-wider">
          Current Skillset
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          recusandae laudantium voluptas, quis voluptatibus nemo nihil et ipsa
          delectus minus, optio quo esse necessitatibus asperiores voluptates
          totam eveniet voluptatum quisquam?
        </p>
        <div className="btn relative top-5 flex align-center justify-center md:absolute md:mt-32 md:inset-x-1/3">
          <button className="flex align-center justify-center text-xl text-gray-800 bg-gray-100 font-semibold rounded-2xl p-3">
            <span className="mr-2">Github </span>
            <svg
              className="w-6 h-6"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </button>
        </div>
      </div>
      <div className="skills-wrapper border-2 border-red-500 flex flex-col md:flex-row md:w-11/12 mx-auto">
        <div className="skill mb-5 -mt-20 border-2 border-yellow-500 pt-3 md:w-1/3">
          <div className="skill-contents flex flex-col items-center px-5 -mt-16 relative">
            <img
              className="h-36 w-52 object-cover object-center relative -bottom-14 rounded-lg"
              src="https://picsum.photos/seed/200/300?blur"
              alt="Skillset image"
            ></img>
            <div className="p-6 bg-gray-100 text-gray-800 shadow-2xl mx-auto flex-col flex rounded-t-lg">
              <h2 className="mx-auto text-2xl text-gray-800 pt-8">Web Development</h2>
              <p className="text-lg">
                With a technical knowledge in HTML, CSS, Vanilla Javascript and various Javascript frameworks like React and NodeJs, you can be sure your project will be well suited for real world use.
              </p>
              <div className="stack">
              <h3 className="mt-2 mb-1 text-xl font-semibold text-center">Current Stack</h3>
              <p><span>Front-End - </span>HTML, CSS, TailwindCSS & React.</p> 
              <p><span>Back-End  - </span>NodeJS, Flask & Django</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skill pt-3 border-2 border-green-500 md:w-1/3">
          <div className="skill-contents flex flex-col items-center px-5 -mt-16 relative">
            <img
              className="h-36 w-52 object-cover object-center relative -bottom-14 rounded-lg"
              src="https://picsum.photos/seed/200/300?blur"
              alt="Skillset image"
            ></img>
            <div className=" p-6 bg-gray-100 text-gray-800 shadow-2xl mx-auto flex-col flex rounded-t-lg">
              <h2 className="mx-auto text-2xl text-gray-800 pt-8">React</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                consequatur mollitia, perspiciatis totam omnis porro, error sint
                asperiores, qui unde esse nihil architecto rem odit quis at quam
                dolores incidunt?
              </p>
            </div>
          </div>
        </div>
        <div className="skill mb-5 md:-mt-20 border-2 border-gray-500 md:w-1/3">
          <div className="skill-contents flex flex-col items-center px-5 -mt-10 relative">
            <img
              className="h-36 w-52 object-cover object-center relative -bottom-14 rounded-lg"
              src="https://picsum.photos/seed/200/300?blur"
              alt="Skillset image"
            ></img>
            <div className=" p-6 bg-gray-100 text-gray-800 shadow-2xl mx-auto flex-col flex rounded-t-lg">
              <h2 className="mx-auto text-2xl text-gray-800 pt-8">React</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                consequatur mollitia, perspiciatis totam omnis porro, error sint
                asperiores, qui unde esse nihil architecto rem odit quis at quam
                dolores incidunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroFull;
