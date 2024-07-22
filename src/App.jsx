import ppic from "./assets/ppic.png";

function App() {
  return (
    <div className="h-auto min-h-screen w-screen bg-gradient-to-b from-zinc-900 to-zinc-700 pb-20">
      <p className="text-center font-black text-5xl text-gray-50 pt-20">Farhan Mohamed</p>

      <div className=" w-2/3 mx-auto mt-2 h-auto" id="profile-pic">
        <img className="mx-auto mt-10 border-white rounded-xl border-2" src={ppic} alt="" />
      </div>

      <p className="text-center font-black text-2xl text-gray-50 pt-20">About</p>
      <div className="w-2/3 border-gray-100 border rounded-xl mx-auto mt-2 h-auto" id="about">
        <p className="p-5 text-white">
          I'm eager to bring my imaginative flair to the tech world and play a part in shaping its future. I'm seeking a
          role in tech where I can learn and make an impact. I am looking for a growth-oriented environment where I can
          develop innovative ideas.
        </p>
      </div>

      <p className="text-center font-black text-2xl text-gray-50 pt-20">Skills</p>
      <div className="p-5 text-white w-2/3 border-gray-100 rounded-xl border-2 mx-auto mt-2 h-auto" id="skills">
        <div className="flex justify-center">
          <div className="text-center grid grid-cols-2 gap-40">
            <ol>
              <li>Rust</li>
              <li>Ruby</li>
              <li>Javascript</li>
              <li>C#</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>PostgresSQL</li>
            </ol>
            <ol>
              <li>Ruby on Rails</li>
              <li>Reactjs</li>
              <li>Tailwindcss</li>
              <li>Bootstrap</li>
              <li>Git</li>
              <li>Github</li>
              <li>Unity</li>
            </ol>
          </div>
        </div>
      </div>

      <p className="text-center font-black text-2xl text-gray-50 pt-20">Projects</p>
      <div className="w-2/3 pb-10 border-gray-100 border-2 mx-auto mt-2 h-auto" id="projects">
        <p className="text-center font-bold text-xl text-white pt-5">Web Dev</p>
        <div className="flex flex-col text-white">
          <div id="project-block" className="text-left w-1/2 pl-5">
            <p>Fittr</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur similique autem, laboriosam iste ad
              enim velit corporis molestiae commodi quibusdam.
            </p>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-gray-300">Repo</button>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-gray-300">Demo</button>
          </div>
          <div id="project-block" className="text-left w-1/2 pl-5">
            <p>JS Fun Box</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur similique autem, laboriosam iste ad
              enim velit corporis molestiae commodi quibusdam.
            </p>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-gray-300">Repo</button>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-gray-300">Demo</button>
          </div>
          <div id="project-block" className="text-left w-1/2 pl-5">
            <p>TextRPG</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur similique autem, laboriosam iste ad
              enim velit corporis molestiae commodi quibusdam.
            </p>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-gray-300">Repo</button>
            <button className="border-2 border-white p-1 w-20 rounded-xl hover:bg-gray-300">Demo</button>
          </div>
        </div>

        <p className="text-center font-bold text-xl text-white pt-5">Rust</p>
        <div className="flex flex-col text-white">
          <p>hi</p>
        </div>
      </div>
    </div>
  );
}

export default App;
