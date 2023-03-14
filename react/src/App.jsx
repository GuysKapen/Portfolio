import React from "react"

import { About, Footer, Header, Skill, Work } from "./container/index";
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
      <Footer />
    </div>
  )
}

export default App
