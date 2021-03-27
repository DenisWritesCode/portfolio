import cedPic from "./../images/Ced.jpg";
import cedLogo from "./../images/Logicae.jpg";
import sekaniLogo from "./../images/sekani_logo.jpg";
import lumPic from "./../images/Lum.jpeg";

function Testimonials() {
  return (
    <section id="projects" className="resume bg-gray-800 text-gray-100 pb-2">
      <div className="resume-content px-5">
        <div className="resume-intro text-center pb-5">
          <h1 className="text-3xl tracking-wider text-semibold font-semibold text-center">
            Projects and Testimonials
          </h1>
          <p className="text-lg">
            I will let the people I have previously worked with convince you I
            am the right fit to work on your project for you.
          </p>
          <p className="text-lg">
            Here is a list of some of the people I have being fortunate enough
            to work with and what they had to say of their experience of working
            with me.
          </p>
        </div>
        <div className="testimonial-container">
          
        <div className="client-testimonial flex w-11/12 mx-auto mt-5 items-center">
            <div className="client hidden md:block mx-3">
              <img
                src={cedLogo}
                alt="Client"
                className="client logo rounded-xl w-48 h-52"
              />
            </div>
            <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
              <div className="photo my-auto mx-auto md:w-1/5">
                <img
                  className="w-48 h-48 rounded-full my-3 mx-auto object-cover object-center"
                  src={cedPic}
                  alt="Lumona for client"
                />
              </div>
              <div className="words flex flex-col ml-3 pt-1 my-auto md:w-4/5">
                <p className="review text-gray-900 font-semibold text-lg">
                  <span className="text-3xl">“</span>
                  Denis is the very definition of dedicated customer service. Over the course of multiple projects I’ve worked with him on, his diligence, commitment and expertise have continuously proved invaluable in ensuring the timely delivery of said projects while always maintaining his characteristic quality standards. He is quite the fast learner and his intellectual curiosity is perhaps one of the most priceless assets he brings into any developer team.
                  <span className="text-3xl">”</span>
                </p>
                <figcaption className="pl-5 text-lg font-medium p-1 md:flex md:justify-between">
                  <div className="left">
                    <p className="name  text-gray-700">Cedrique Wekesa</p>
                    <p className="title text-gray-500 text-sm">
                    Co-Founder & CEO of Logicae Science
                    </p>
                  </div>
                  <div className=" right text-gray-800 pr-5"><a href="https://logicae.science/">View Work</a></div>
                </figcaption>
              </div>
            </div>
          </div><div className="client-testimonial flex w-11/12 mx-auto mt-5 items-center">
            <div className="client hidden md:block mx-3">
              <img
                src={sekaniLogo}
                alt="Client"
                className="client logo rounded-xl w-48 h-52"
              />
            </div>
            <div className="testimonial bg-gray-100 flex flex-col w-11/12 mx-auto my-3 rounded-xl px-2 md:flex-row">
              <div className="photo my-auto mx-auto md:w-1/5">
                <img
                  className="w-48 h-48 rounded-full my-3 mx-auto object-cover object-center"
                  src={lumPic}
                  alt="Lumona for client"
                />
              </div>
              <div className="words flex flex-col ml-3 pt-1 my-auto md:w-4/5">
                <p className="review text-gray-900 font-semibold text-lg">
                  <span className="text-3xl">“</span>
                  I recently worked with Denis to improve my company's web app. He delivered everything I  asked for in a timely manner .He is extremely helpful in guiding through the whole process and overall,  I am beyond pleased with Denis's impeccable service.
                  <span className="text-3xl">”</span>
                </p>
                <figcaption className="pl-5 text-lg font-medium p-1 md:flex md:justify-between">
                  <div className="left">
                    <p className="name  text-gray-700">Lumona Mulengwa</p>
                    <p className="title text-gray-500 text-sm">
                    CTO Sekani
                    </p>
                  </div>
                  <div className=" right text-gray-800 pr-5"><a href="https://sekani.tech/">View Work</a></div>
                </figcaption>
              </div>
            </div>
          </div>

          {/*
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
