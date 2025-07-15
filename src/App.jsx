import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

const HappyHomeMovers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    moveType: "",
    homeType: "",
    packing: false,
    insurance: false,
    message: "",
    formType: "inquiry",
  });

  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({
      isVisible: true,
      message,
      type,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  const scrollToTeam = () => {
    const teamSection = document.getElementById("team-section");
    teamSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header scrollToTeam={scrollToTeam} />
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ContactSection
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
        showToast={showToast}
      />
      <Footer />

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
};

export default HappyHomeMovers;
