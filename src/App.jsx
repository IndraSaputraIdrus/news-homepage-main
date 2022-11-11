import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewSection from "./components/NewSection";
import PostSection from "./components/PostSection";

function App() {
  document.title = "Indra News Homepage";
  return (
    <div className="container mx-auto grid grid-cols-1 gap-10 pt-2 pb-20">
      <Navbar />
      <HeroSection />
      <NewSection />
      <PostSection />
    </div>
  );
}

export default App;
