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
import Header from "./components/Header/Header"; // Assuming Navbar is here

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header /> {/* Navbar/Header shown on all pages */}

        <main className="page-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/addmission" element={<AddmissionPage />} />
          </Routes>
        </main>

        <ChatbotComponent />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
