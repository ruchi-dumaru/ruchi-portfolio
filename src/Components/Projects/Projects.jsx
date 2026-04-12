import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="px-6 bg-gradient-to-br from-[#0b1120] via-[#0f1c3a] to-[#1a2a4f]
  shadow-lg shadow-blue-500/20 md:px-24 py-20 text-white   "
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
        <ProjectsCard
          title="Note App"
          main="A note app with add, delete, and complete functionalities. Built with react & Tailwind CSS."
          img="noteapp.png"
          url="https://github.com/ruchi-dumaru/note-app"
        />

        <ProjectsCard
          title="Todo App"
          main="A simple  todo app with add, delete, and complete functionalities. Built with JS & Tailwind CSS."
          img="todo.png"
          url="https://github.com/ruchi-dumaru/Todo-App"
        />

        <ProjectsCard
          title="Amazon Clone"
          main="A full frontend clone of Amazon with product listing, cart functionality, and responsive design."
          img="amazone.png"
        />

        <ProjectsCard
          title="Add Remove User App"
          main="A  web application built using HTML, CSS, and JavaScript that allows users to dynamically add and remove user."
          img="add_remove_user.png"
          url="https://github.com/ruchi-dumaru/Add-Remove-Users"
        />

        <ProjectsCard
          title="Digital Watch"
          main="Custom digital watch app with live time, stopwatch, and alarm functionality."
          img="digital_clock.png"
          url="https://github.com/ruchi-dumaru/Digital-Clock"
        />
      </div>

      <div></div>
    </div>
  );
};

export default Projects;
