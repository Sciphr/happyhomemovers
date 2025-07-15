import emailjs from "emailjs-com";
import ContactForm from "./ContactForm";
import useFormValidation from "./useFormValidation";

const ContactSection = ({
  formData,
  setFormData,
  handleInputChange,
  showToast,
}) => {
  const { errors, validateForm, clearError, clearAllErrors } =
    useFormValidation();
  const handleSubmit = () => {
    // Validate form before submission
    if (!validateForm(formData)) {
      showToast("Please fill in all required fields correctly.", "error");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          moveType: formData.moveType,
          homeType: formData.homeType,
          packing: formData.packing ? "Yes" : "No",
          insurance: formData.insurance ? "Yes" : "No",
          message: formData.message,
          formType:
            formData.formType === "inquiry"
              ? "Pricing Inquiry"
              : "Move Booking",
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        showToast(
          "Message sent successfully! We will contact you soon.",
          "success"
        );
        clearAllErrors();
        // Reset form
        setFormData({
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
      })
      .catch(() => {
        showToast("Failed to send message. Please try again.", "error");
      });
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gold mb-4">
            Get Your Free Quote
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="text-gray-300 mt-4">
            Ready to move? Get in touch for pricing or to book your move
          </p>
        </div>

        <ContactForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          errors={errors}
          clearError={clearError}
        />
      </div>
    </section>
  );
};

export default ContactSection;
