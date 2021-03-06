function HeroFull() {
  return (
    <section className="resume bg-gray-800 text-gray-100 pb-2">
      <div className="resume-content px-5">
        <div className="resume-intro text-center pb-5">
          <h1 className="text-2xl tracking-wider text-semibold font-semibold text-center">
            Projects and Testimonials
          </h1>
          <p className="text-lg">
            Here is a list of some of the people I have being fortunate enough
            to work with and their experience of working with me.
          </p>
        </div>
        <div className="testimonial-container">
          <div className="client-testimonial flex w-11/12 mx-auto mt-5">
            <div className="client hidden md:block mx-3">
              <img
                src="https://picsum.photos/id/1025/300"
                alt="Client"
                className="client logo rounded-xl"
              />
            </div>
            <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
              <div className="photo my-auto mx-auto">
                <img
                  className="w-48 h-48 rounded-full mt-3"
                  src="https://picsum.photos/id/237/200/300"
                  alt="Placeholder for client"
                />
              </div>
              <div className="words flex flex-col ml-3 pt-1 my-auto">
                <p className="review text-gray-900 font-semibold text-lg">
                  <span className="text-3xl">“</span>
                  Denis was great to work with. He delivered in record time and
                  even went far and beyond what we had agreed on. 10/10 would
                  recommend him again.<span className="text-3xl">”</span>
                </p>
                <figcaption className="pl-5 text-lg font-medium p-1">
                  <p className="name  text-gray-700">John Doe</p>
                  <p className="title text-gray-500 text-sm">CEO @ Xyz</p>
                </figcaption>
              </div>
            </div>
          </div>
          <div className="client-testimonial flex w-11/12 mx-auto mt-5">
            <div className="client hidden md:block mx-3">
              <img
                src="https://picsum.photos/id/1025/300"
                alt="Client"
                className="client logo rounded-xl"
              />
            </div>
            <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
              <div className="photo my-auto mx-auto">
                <img
                  className="w-48 h-48 rounded-full mt-3"
                  src="https://picsum.photos/id/237/200/300"
                  alt="Placeholder for client"
                />
              </div>
              <div className="words flex flex-col ml-3 pt-1 my-auto">
                <p className="review text-gray-900 font-semibold text-lg">
                  <span className="text-3xl">“</span>
                  Denis was great to work with. He delivered in record time and
                  even went far and beyond what we had agreed on. 10/10 would
                  recommend him again.<span className="text-3xl">”</span>
                </p>
                <figcaption className="pl-5 text-lg font-medium p-1">
                  <p className="name  text-gray-700">John Doe</p>
                  <p className="title text-gray-500 text-sm">CEO @ Xyz</p>
                </figcaption>
              </div>
            </div>
          </div>
          <div className="client-testimonial flex w-11/12 mx-auto mt-5">
            <div className="client hidden md:block mx-3">
              <img
                src="https://picsum.photos/id/1025/300"
                alt="Client"
                className="client logo rounded-xl"
              />
            </div>
            <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
              <div className="photo my-auto mx-auto">
                <img
                  className="w-48 h-48 rounded-full mt-3"
                  src="https://picsum.photos/id/237/200/300"
                  alt="Placeholder for client"
                />
              </div>
              <div className="words flex flex-col ml-3 pt-1 my-auto">
                <p className="review text-gray-900 font-semibold text-lg">
                  <span className="text-3xl">“</span>
                  Denis was great to work with. He delivered in record time and
                  even went far and beyond what we had agreed on. 10/10 would
                  recommend him again.<span className="text-3xl">”</span>
                </p>
                <figcaption className="pl-5 text-lg font-medium p-1">
                  <p className="name  text-gray-700">John Doe</p>
                  <p className="title text-gray-500 text-sm">CEO @ Xyz</p>
                </figcaption>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroFull;
