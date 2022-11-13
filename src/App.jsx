import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewSection from "./components/NewSection";
import PostSection from "./components/PostSection";

function App() {
  document.title = "Indra News Homepage";
  return (
    <div className="container mx-auto space-y-10 pt-2 pb-20 lg:grid lg:grid-cols-3">
      <Navbar />
      <HeroSection />
      <NewSection />
      <PostSection />
    </div>
  );
}

export default App;
