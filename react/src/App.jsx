import React from "react"

import { About, Footer, Header, Skill, Testimonial, Work } from "./container/index";
import { Navbar } from "./components";
import "./App.scss";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
