import "./App.css";
import About from "./components/Aboutme/About";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Blogs />
    </div>
  );
}

export default App;
