import React from "react";

function Resume() {
  return (
    <section class="resume pt-14">
      <div className="content-container text-gray-200">
        <div className="about bg-gray-800 pb-24 md:pb-60 p-5">
          <h1 className="text-center text-3xl text-gray-100 font-bold p-2">
            Tech Stack
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error,
            fugiat veritatis ducimus a, quae veniam autem mollitia perspiciatis,
            praesentium reiciendis totam esse consectetur? Minus aspernatur
            maxime officiis natus delectus.
          </p>
        </div>
        <div class="cards text-gray-800 md:flex md:-mt-40 w-4/5 mx-auto">
          
          <div className="skill-container p-4 mb-20 pt-20 -mt-20">
            <div class="skill shadow-xl md:w-1/3 md:m-3 p-3 bg-gray-50 rounded-xl">
              <div className="skill-content relative flex-col items-center mb-2">
                <div className="img -mt-20">
                  <img
                    src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    className="sm:w-64 w-60 object-fit rounded-md mx-auto"
                  />
                </div>
                <div className="text m-2 top-2">
                  <p className="text-3xl font-semibold text-gray-800 text-center">
                    React
                  </p>
                  <p className="text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    earum dolores necessitatibus maxime, culpa incidunt, soluta
                    quia voluptate similique inventore voluptas consequuntur
                    totam voluptatibus. Blanditiis repudiandae sed minima in
                    porro?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-container p-4 mb-20 pt-20 -mt-20">
            <div class="skill shadow-xl md:w-1/3 md:m-3 p-3 bg-gray-50 rounded-xl">
              <div className="skill-content relative flex-col items-center mb-2">
                <div className="img -mt-20">
                  <img
                    src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    className="sm:w-64 w-60 object-fit rounded-md mx-auto"
                  />
                </div>
                <div className="text m-2 top-2">
                  <p className="text-3xl font-semibold text-gray-800 text-center">
                    React
                  </p>
                  <p className="text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    earum dolores necessitatibus maxime, culpa incidunt, soluta
                    quia voluptate similique inventore voluptas consequuntur
                    totam voluptatibus. Blanditiis repudiandae sed minima in
                    porro?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-container border-2 border-green-500 mb-3 p-4 pt-20 -mt-20">
            <div class="skill shadow-xl md:w-1/3 md:m-3 p-3 bg-gray-50 rounded-xl">
              <div className="skill-content relative flex-col items-center mb-2">
                <div className="img -mt-20">
                  <img
                    src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    className="sm:w-64 w-60 object-fit rounded-md mx-auto"
                  />
                </div>
                <div className="text m-2 top-2">
                  <p className="text-3xl font-semibold text-gray-800 text-center">
                    React
                  </p>
                  <p className="text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                    earum dolores necessitatibus maxime, culpa incidunt, soluta
                    quia voluptate similique inventore voluptas consequuntur
                    totam voluptatibus. Blanditiis repudiandae sed minima in
                    porro?
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Resume;
