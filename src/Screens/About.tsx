import { skills, Skillset, socialLinks } from "@/Lib/AboutMeData";

export default function About() {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-10">
        <div className="md:text-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">Narasimha Vaddala</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I’m a <span className="font-semibold">Full Stack Developer</span>{" "}
            with hands-on experience in building{" "}
            <span className="font-semibold">web applications</span>,
            <span className="font-semibold"> cross-platform mobile apps</span>,
            . I enjoy transforming ideas into functional, scalable, and
            user-friendly digital experiences.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold md:text-center">
            Skills & Expertise
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            {Skillset.map((e, index) => {
              return (
                <li key={index}>
                  {e.emoji} <span className="font-semibold">{e.title}</span>:{" "}
                  {e.text}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-wrap md:justify-center gap-3 mt-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-medium px-4 py-2 rounded-full text-sm shadow-sm  hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="md:text-center space-y-4">
          <h3 className="text-2xl font-bold">Connect with Me</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            I’m open to collaborations, freelance projects, and full-time
            opportunities where I can apply my MERN stack, React, and backend
            expertise to deliver impactful solutions.
          </p>
          <div className="flex justify-center gap-5">
            {socialLinks.map((e, index) => {
              return (
                <a
                  key={index}
                  href={e.link}
                  target="_blank"
                  className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors shadow-md"
                >
                  <e.icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
