import "./App.scss";

import { About, Blog, Footer, Header, Skills, Work } from "./Container";

import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Blog />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
