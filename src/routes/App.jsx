import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import About from "../pages/About";
import { Page404 } from "../pages/Page404";
import Contact from "../pages/Contact";
import SkillsAndHobbies from "../pages/SkillsAndHobbies";
import Formacion from "../pages/Formacion";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route
            path="/skillsandhobbies"
            exact
            element={<SkillsAndHobbies />}
          />
          <Route path="/education" exact element={<Formacion />} />
          <Route path="/contact" exact element={<Contact />} />

          <Route path="*" exact element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
