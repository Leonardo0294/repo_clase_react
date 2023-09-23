import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from "../src/components/Header.jsx";
import MainContent from "../src/components/MainContent.jsx";
import Footer from "../src/components/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
