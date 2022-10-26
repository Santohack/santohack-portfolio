import "./App.scss";

import { About, Blog, Footer, Header, Skills, Work } from "./Container";

import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Work />
      <Skills />
      <Header />
      <Blog />
    </div>
  );
}

export default App;
