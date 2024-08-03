import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import LandingPage from "./routes/landingPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <LandingPage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
