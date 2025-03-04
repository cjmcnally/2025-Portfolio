import "./App.css";
import Title from "./components/Title";

function App() {
  // Structure of App

  /*
    1. Navbar At Top Centered
    2. Title & Picture of Myself
    3. Button Scrolls Down to Projects
    4. Projects Section: 3 Projects, 3 seperate containers
    5. About Me Section, include Skills section next to it
    6. Footer with Contact Information
  */

  // 1. Navbar At Top Centered
  return (
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About Me</a>
      </li>
      <li>
        <a href="/projects">My Projects</a>
      </li>
      <li>
        <a href="/contact">Contact Me</a>
      </li>
    </ul>
  </nav>
  );
    <h1>
      <Title />
    </h1>
}

export default App;
