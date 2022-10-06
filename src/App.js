import React from "react";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import "./styles.css";
import Modal from "./tools/Modal";
import Shapes from "./tools/Shapes";

function App() {
  return (
    <section>
      <Navigation />
      <Shapes />
      <Landing />
      <Modal />
      <Projects />
      <Footer />
    </section>
  );
}

export default App;
