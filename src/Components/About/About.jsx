import { FaUser, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="About"
      className="min-h-screen px-6 md:px-20 py-16 bg-gradient-to-br from-[#0b1120] via-[#0b142a] to-[#141924]
  shadow-lg shadow-blue-500/20 text-white"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-3 mb-12">
        ABOUT <span className="text-blue-400">ME</span>
      </h1>

      {/* Single Box */}
      <div className="bg-gradient-to-r from-[#04060c] via-[#060b14] to-[#0a0f1f] rounded-2xl p-10 transition-transform duration-300 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* {image} */}

          <div>
            <div className="flex justify-center items-center">
              <img
                src="portimg.jpg"
                alt="img"
                className="w-full max-w-lg h-[500px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right - About */}
          <div className="max-w-xl lg:max-w-2xl mx-auto">
            {/* Passion */}
            <div className="flex items-center gap-3 mb-5">
              <FaUser className="text-blue-400 text-xl" />
              <h2 className="text-2xl font-semibold">Passion</h2>
            </div>

            <p className="text-blue-100 text-base lg:text-lg leading-relaxed text-justify">
              I am a passionate Frontend Developer who enjoys building clean,
              modern and user-friendly web applications. I love transforming
              ideas into interactive digital experiences that are both visually
              appealing and highly functional.
              <br />
              <br />
              My focus is on writing clean and efficient code while creating
              smooth user experiences. I continuously explore new technologies
              and trends to improve my skills and stay updated in the fast
              evolving world of web development.
            </p>

            {/* Education */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap className="text-green-400 text-xl" />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>

              {/* Timeline */}
              <div className="relative border-l-2 border-blue-500 pl-6">
                <div className="mb-6">
                  <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[7px] top-2"></div>

                  <p className="text-blue-100 font-medium text-lg">BSc. CSIT</p>
                  <p className="text-blue-100 text-base">
                    Tribhuvan University
                  </p>
                  <p className="text-blue-300 text-sm">2023 - 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
