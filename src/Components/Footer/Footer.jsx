import { MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [msg, setMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "dce6ca8b-a236-454f-8e39-137a41bab2d2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setMsg(" Message sent successfully!");
        event.target.reset();
      } else {
        setMsg("Something went wrong. Try again!");
      }

      setTimeout(() => {
        setMsg("");
      }, 5000);
    } catch (error) {
      setMsg(" ERROR!");
    }
  };

  return (
    <div
      id="Footer"
      className="bg-gradient-to-r from-[#0a0f1f] via-[#0d1b34] to-[#0a0f1f] text-white  p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center "
    >
      {/* Left Contact Info */}
      <div className="flex-1 items-start  flex flex-col md:ml-30 gap-6">
        <h1 className="text-4xl md:text-6xl md:font-semibold font-bold">
          Contact Me
        </h1>
        <div className="flex flex-col gap-4 text-lg">
          <div className="flex items-center gap-3 hover:text-blue-300 transition-all cursor-pointer">
            <MdEmail size={26} />
            <a href="mailto:contact@example.com">dumaruruchee@gmail.com</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/ruchi.dumaru.3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare
                size={22}
                className="hover:text-blue-300 transition-all"
              />
            </a>

            <a
              href="https://www.instagram.com/ruchidumaru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={22}
                className="hover:text-blue-300 transition-all"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ruchi-dumaru-a5b4852a6/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwvCeJWj%2FSy%2B1b6bncyWJ2A%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={22}
                className="hover:text-blue-300 transition-all"
              />
            </a>

            <a
              href="https://github.com/ruchi-dumaru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={22}
                className="hover:text-blue-300 transition-all"
              />
            </a>
          </div>
        </div>

        <a
          href="/Ruchi_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-max bg-blue-700 hover:bg-blue-900 transition-all text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl"
        >
          Download CV
        </a>
      </div>

      {/* Right Form */}
      <div className="flex-1">
        <form onSubmit={onSubmit} className="flex  flex-col gap-4 ">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            minLength={2}
            className="bg-[#465697] text-white p-3 rounded placeholder-white/70 focus:outline-none ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            className="bg-[#465697] text-white p-3 rounded placeholder-white/70 focus:outline-none ring-2 focus:ring-blue-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            minLength={10}
            pattern="^[A-Za-z0-9 .,!?'-]{10,}$"
            rows={5}
            className="bg-[#465697] text-white p-3 rounded placeholder-white/70 focus:outline-none ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 transition-all text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl mt-2 cursor-pointer"
          >
            Submit
          </button>
        </form>
        {msg && (
          <h1 className="text-start mt-2 ml-2 text-lg font-semibold text-green-400">
            {msg}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Footer;
