import * as CSS from "csstype";

function HeroSection() {
  const heroStyle: CSS.Properties = {
    height: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    background:
      "url('https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    marginBottom: "20px",
  };
  return (
    <div style={heroStyle} id="hero-section">
      <div
        id="hero-title"
        className="text-white text-2xl md:text-4xl font-extrabold lg:text-5xl shadow-lg lg:tracking-wider bg-black bg-opacity-50 p-5 rounded-md text-center"
      >
        Welcome to my personal blog <br />
        <span className="lg:text-3xl md:text-2xl text-xl font-normal">
          A place where I share my thoughts and ideas
        </span>
      </div>
    </div>
  );
}

export default HeroSection;
