import "./App.css";
import "./style/Pages.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AddmissionPage from "./pages/AddmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import Footer from "./components/Footer/Footer";
import Navbar from "./pages/Navbar"; // ✅ import Navbar

const App = () => {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar /> {/* ✅ show on every page */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/addmission" element={<AddmissionPage />} />
        </Routes>

        <ChatbotComponent />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
