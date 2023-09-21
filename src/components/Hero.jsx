import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <nav className="flex items-center justify-between w-full pt-3 mb-10">
        <div className="flex items-center h-12 p-1 rounded-md bg-[#fbedff] w-25">
          <img src={logo} alt="s&d_logo" className="object-contain w-10 h-10" />
          <p className="text-2xl font-bold text-orange-600">S&D READS </p>
        </div>

        <button
          type="button"
          onClick={() => window.open("https://yacinel.com", "_blank")}
          className="black_btn"
        >
          Developer website
        </button>
      </nav>

      <h1 className="head_text">
        Turn Long Reads To <br className="max-md:hidden" />
        <span className="navy_blue_gradient ">Short & Dense</span>
        <br className="max-md:hidden" />
        <span> Summaries </span>
      </h1>
      <h2 className=" desc">
        Simplify your reading with S&D, a simple but smart summarizer powered by
        Ai that transforms lengthy articles into clear and concise summaries.
        Try it out down bellow.
      </h2>
    </header>
  );
};

export default Hero;
