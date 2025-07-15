import { AlertCircle } from "lucide-react";

const ContactForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  errors,
  clearError,
}) => {
  const handleFieldChange = (e) => {
    const { name } = e.target;
    handleInputChange(e);

    // Clear error when user starts typing
    if (errors[name]) {
      clearError(name);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClassName =
      "w-full p-3 bg-gray-800 border rounded-lg focus:outline-none transition-all duration-200";
    const errorClassName = "border-red-500 focus:border-red-400 bg-red-900/20";
    const normalClassName =
      "border-gray-600 focus:border-gold hover:bg-gray-700 hover:border-gray-500";

    return `${baseClassName} ${
      errors[fieldName] ? errorClassName : normalClassName
    }`;
  };
  return (
    <div className="bg-black p-8 rounded-lg border border-gold">
      {/* Form Type Selection */}
      <div className="mb-6">
        <label className="block text-gold font-semibold mb-3">
          What can we help you with?
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="formType"
              value="inquiry"
              checked={formData.formType === "inquiry"}
              onChange={handleInputChange}
              className="text-gold"
            />
            <span>Pricing Inquiry</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="formType"
              value="booking"
              checked={formData.formType === "booking"}
              onChange={handleInputChange}
              className="text-gold"
            />
            <span>Book a Move</span>
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div>
          <label htmlFor="name" className="block text-gold font-semibold mb-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFieldChange}
            className={getInputClassName("name")}
          />
          {errors.name && (
            <div className="mt-1 flex items-center text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-gold font-semibold mb-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFieldChange}
            className={getInputClassName("email")}
          />
          {errors.email && (
            <div className="mt-1 flex items-center text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-gold font-semibold mb-2">
            Phone *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleFieldChange}
            className={getInputClassName("phone")}
          />
          {errors.phone && (
            <div className="mt-1 flex items-center text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.phone}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="moveType"
            className="block text-gold font-semibold mb-2"
          >
            Move Type *
          </label>
          <select
            id="moveType"
            name="moveType"
            value={formData.moveType}
            onChange={handleFieldChange}
            className={getInputClassName("moveType")}
          >
            <option value="">Select move type</option>
            <option value="apartment">Apartment Moving</option>
            <option value="house">House Moving</option>
            <option value="furniture">Furniture Delivery</option>
          </select>
          {errors.moveType && (
            <div className="mt-1 flex items-center text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.moveType}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="homeType"
            className="block text-gold font-semibold mb-2"
          >
            Home Type
          </label>
          <select
            id="homeType"
            name="homeType"
            value={formData.homeType}
            onChange={handleFieldChange}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold focus:outline-none hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
          >
            <option value="">Select home type</option>
            <option value="bachelor">Bachelor/Studio</option>
            <option value="1bedroom">1 Bedroom</option>
            <option value="2bedroom">2 Bedroom</option>
            <option value="3bedroom">3 Bedroom</option>
            <option value="4bedroom">4+ Bedroom</option>
            <option value="house">House</option>
          </select>
        </div>
      </div>

      {/* Additional Services */}
      <div className="mt-6">
        <label className="block text-gold font-semibold mb-3">
          Additional Services
        </label>
        <div className="space-y-3">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="packing"
              checked={formData.packing}
              onChange={handleFieldChange}
              className="text-gold"
            />
            <span>Packing & Unpacking ($150/hour)</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="insurance"
              checked={formData.insurance}
              onChange={handleFieldChange}
              className="text-gold"
            />
            <span>Insurance Coverage</span>
          </label>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label className="block text-gold font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleFieldChange}
          rows={4}
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold focus:outline-none hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
          placeholder="Tell us about your move..."
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full mt-6 bg-gold text-black py-4 px-6 rounded-lg font-bold text-lg hover:bg-gold-light hover:shadow-lg hover:scale-105 transition-all duration-200"
      >
        {formData.formType === "inquiry" ? "Get Quote" : "Book Move"}
      </button>
    </div>
  );
};

export default ContactForm;
