import ppic from "./assets/ppic.png";
import rust from "./assets/skills/rust.png";
import csharp from "./assets/skills/csharp.png";
import bootstrap from "./assets/skills/bootstrap.png";
import ruby from "./assets/skills/ruby.png";
import js from "./assets/skills/js.png";
import html from "./assets/skills/html.png";
import css from "./assets/skills/css.png";
import react from "./assets/skills/react.png";
import rails from "./assets/skills/rails.png";
import postgres from "./assets/skills/postgres.png";
import tailwindcss from "./assets/skills/tailwindcss.png";
import npm from "./assets/skills/npm.png";
import git from "./assets/skills/git.png";
import cargo from "./assets/skills/cargo.png";
import linkedin from "./assets/links/linkedin.png";
import github from "./assets/links/github.png";
import calendly from "./assets/links/calendly.png";

function App() {
  return (
    <div className="h-auto min-h-screen w-screen bg-gradient-to-b from-zinc-900 to-zinc-700 ">
      <p className="text-center font-black text-5xl text-gray-50 pt-20">Farhan Mohamed</p>

      <div className=" w-2/3 mx-auto mt-2 h-auto" id="profile-pic">
        <img className="mx-auto mt-10 border-white rounded-xl border-2" src={ppic} alt="" />
      </div>

      <p className="text-center font-black text-2xl text-gray-50 pt-20 pb-5">About</p>
      <div className="w-2/3 border-gray-100 border rounded-xl mx-auto mt-2 h-auto" id="about">
        <p className="w-1/2 text-center mx-auto p-5 text-white">
          I'm eager to bring my imaginative flair to the tech world and play a part in shaping its future. I'm seeking a
          role in tech where I can learn and make an impact. I am looking for a growth-oriented environment where I can
          develop innovative ideas.
        </p>
        <div className=" flex flex-row justify-center gap-5 pb-5" id="links">
          <a href="https://www.linkedin.com/in/farhanjmohamed/">
            <img title="Linkedin" src={linkedin} className="h-10 w-auto" />
          </a>
          <a href="https://github.com/farhanjmohamed">
            <img title="Github" src={github} className="h-10 w-auto" />
          </a>
          <a href="https://calendly.com/farhanjmohamed">
            <img title="Calendly" src={calendly} className="h-10 w-auto" />
          </a>
        </div>
      </div>

      <p className="text-center font-black text-2xl text-gray-50 pt-20 pb-5">Skills</p>
      <div className="p-5 text-white w-2/3 border-gray-100 rounded-xl border-2 mx-auto mt-2 h-auto" id="skills">
        <div className="flex justify-center">
          <div className="text-center grid grid-cols-2 gap-10">
            <ol>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={rust} className="w-auto h-10 pb-2" />
                <p>Rust </p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={ruby} className="w-auto h-10 pb-2" />
                <p>Ruby</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={js} className="w-auto h-10 pb-2" />
                <p>Javascript</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={csharp} className="w-auto h-10 pb-2" />
                <p>C#</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={html} className="w-auto h-10 pb-2" />
                <p>HTML</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={css} className="w-auto h-10 pb-2" />
                <p>CSS</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={postgres} className="w-auto h-10 pb-2" />
                <p>PostgresSQL</p>
              </li>
            </ol>
            <ol>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={rails} className="w-auto h-10 pb-2" />
                <p>Ruby on Rails</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={react} className="w-auto h-10 pb-2" />
                <p>Reactjs</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={tailwindcss} className="w-auto h-10 pb-2" />
                <p>TailwindCSS</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={bootstrap} className="w-auto h-10 pb-2" />
                <p>Bootstrap</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={git} className="w-auto h-10 pb-2" />
                <p>Git</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={npm} className="w-auto h-10 pb-2" />
                <p>Npm</p>
              </li>
              <li className="flex flex-row justify-start items-center gap-5">
                <img src={cargo} className="w-auto h-10 pb-2" />
                <p>Cargo</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <p className="text-center font-black text-2xl text-gray-50 pt-20 scroll-pb-0.5">Projects</p>
      <div className="w-2/3 pb-10 border-gray-100 rounded-xl border-2 mx-auto mt-2 mb-10 h-auto" id="projects">
        <p className="text-center font-bold text-xl text-white pt-5 pb-5">Web Dev</p>
        <div className="flex flex-col text-white justify-center items-center">
          <div id="project-block" className="text-left w-1/2 p-4 border border-white rounded-xl ml-5 mb-5">
            <p className="pb-2 text-lg">Fittr</p>
            <p className="pb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur similique autem, laboriosam iste ad
              enim velit corporis molestiae commodi quibusdam.
            </p>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-zinc-950 mr-2">Repo</button>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-zinc-950">Demo</button>
          </div>
          <div id="project-block" className="text-left w-1/2 p-4 border border-white rounded-xl ml-5 mb-5">
            <p className="pb-2 text-lg">JS Fun Box</p>
            <p className="pb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur similique autem, laboriosam iste ad
              enim velit corporis molestiae commodi quibusdam.
            </p>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-zinc-950 mr-2">Repo</button>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-zinc-950">Demo</button>
          </div>
          <div id="project-block" className="text-left w-1/2 p-4 border border-white rounded-xl ml-5 mb-5">
            <p className="pb-2 text-lg">TextRPG</p>
            <p className="pb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur similique autem, laboriosam iste ad
              enim velit corporis molestiae commodi quibusdam.
            </p>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-zinc-950 mr-2">Repo</button>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-zinc-950">Demo</button>
          </div>
        </div>

        <p className="text-center font-bold text-xl text-white pt-5 pb-5">Rust</p>
        <div className="flex flex-col text-white justify-center items-center">
          <div id="project-block" className="text-left w-1/2 p-4 border border-white rounded-xl ml-5 mb-5">
            <p className="pb-2 text-lg">Temp Converter</p>
            <p className="pb-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur similique autem, laboriosam iste ad
              enim velit corporis molestiae commodi quibusdam.
            </p>
            <div className="hover:cursor-pointer border-2 border-white p-1 w-20 text-center rounded-xl hover:bg-zinc-950 mr-2">
              <a href="https://github.com/farhanjmohamed/temp-converter">Repo</a>
            </div>
          </div>
        </div>
      </div>

      <footer className=" mt-20 bg-zinc-700 border-t border-white">
        <div className="mx-auto max-w-screen-xl px-2 py-4 ">
          <div className="flex items-center justify-center">
            <p className="text-center text-sm text-gray-200">Farhan J Mohamed {new Date().getFullYear()}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
