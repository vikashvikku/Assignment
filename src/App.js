import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ServicePage from "./components/Service/ServicePage";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
