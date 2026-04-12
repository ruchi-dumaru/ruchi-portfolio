import { FaCode, FaPalette, FaServer, FaTools, FaGitAlt } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const SkillCard = ({ icon, title, skills }) => {
  return (
    <div className="bg-[#050a1b] border border-[#1e3a8a]/50 rounded-2xl p-6 transition-transform duration-300 hover:scale-105">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-[#143052] text-blue-200 px-3 py-1 text-sm rounded-full hover: transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skill = () => {
  return (
    <div
      id="Skills"
      className="scroll-mt-24 min-h-screen px-6 md:px-20 py-16 bg-gradient-to-r from-[#02040b] via-[#081327] to-[#0a0f1f]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white opacity-80 mb-12">
        My <span className="text-cyan-500">Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard
          icon={<FaCode className="text-white" />}
          title="Frontend"
          skills={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "Tailwind CSS",
            "Next.js",
            "React",
            "TypeScript",
          ]}
        />

        <SkillCard
          icon={<FaServer className="text-blue-400" />}
          title="Backend"
          skills={[
            "Node.js",
            "Express",
            "RESTful APIs",
            "MongoDB",
            "SQL",
            "Firebase Auth",
          ]}
        />

        <SkillCard
          icon={<FaPalette className="text-purple-400" />}
          title="Design"
          skills={["Figma", "Adobe ", "UI/UX", "Responsive Design"]}
        />

        <SkillCard
          icon={<FaTools className="text-orange-400" />}
          title="Tools"
          skills={["VS Code", "Vite", "npm/pnpm", "Webpack"]}
        />

        <SkillCard
          icon={<FaGitAlt className="text-green-400" />}
          title="Version Control"
          skills={["Git", "GitHub"]}
        />

        <SkillCard
          icon={<MdOutlineMiscellaneousServices className="text-red-400" />}
          title="Other"
          skills={[
            "Problem Solving",
            "SEO",
            "Debugging & Testing",
            "Authentication & Security",
          ]}
        />
      </div>
    </div>
  );
};

export default Skill;
