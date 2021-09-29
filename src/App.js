import react from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <Modal />
      <div className="app">
        <Sidebar />
        <div className="main-section">
          <Topbar />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
