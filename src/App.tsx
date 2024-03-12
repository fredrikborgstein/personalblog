import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "./components/NavBar";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
// import BlogPostSection from "./components/BlogPostSection";
import BlogCardGrid from "./components/blogcardgrid";
import FeaturedPosts from "./components/featuredposts";

import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <NavBar />
      </div>
      <HeroSection />
      <FeaturedPosts />
      <BlogCardGrid />
    </ThemeProvider>
  );
}

export default App;
