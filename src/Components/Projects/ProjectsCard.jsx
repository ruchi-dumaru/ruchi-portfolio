import { FaGithub } from "react-icons/fa";

const ProjectsCard = ({ title, main, img, url }) => {
  return (
    <div className=" group perspective-1000 w-full max-w-sm md:max-w-md">
      <div className="relative bg-gradient-to-br from-[#0b1120] via-[#102453] to-[#010e2d] rounded-xl p-6 transition-all duration-300 shadow-lg  hover:shadow-[0_0_15px_5px_rgba(6,182,212,0.3)] hover:scale-105  overflow-hidden">
        {/* Image */}
        <img
          src={img}
          alt={title}
          className="  w-full h-56 md:h-64 object-cover rounded-t-2xl"
        />

        {/* Content */}
        <div className="flex flex-col px-6 py-4">
          <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 text-md mb-4">{main}</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-auto">
            {/* <button className="flex-1 py-2 px-4 text-white rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md hover:scale-105 transition-transform duration-300">
              Demo
            </button> */}

            <a href={url} target="_blank" rel="noopener noreferrer">
              <button
                className="flex-1 flex items-center justify-center gap-2 py-2 px-4 
text-blue-300 bg-[#0b1120] border 
rounded-2xl 
hover:border-blue-500 
hover:shadow-[0_0_10px_rgba(59,130,246,0.3)]
transition-all duration-300"
              >
                <FaGithub className="text-lg" />
                Source Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsCard;
