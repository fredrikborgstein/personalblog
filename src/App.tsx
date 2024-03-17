// import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
// import BlogPostSection from "./components/BlogPostSection";
import BlogCardGrid from "./components/blogcardgrid";
import FeaturedPosts from "./components/featuredposts";
import "./App.css";

function App() {
  return (
    <>
      <HeroSection />
      <div className="flex justify-center">
        <FeaturedPosts />
      </div>
      <BlogCardGrid />
    </>
  );
}

export default App;
