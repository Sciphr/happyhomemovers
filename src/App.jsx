import { useState } from "react";
import {
  Phone,
  Users,
  Shield,
  Package,
  Clock,
  CheckCircle,
} from "lucide-react";
// import emailjs from "emailjs-com";

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
    formType: "inquiry", // 'inquiry' or 'booking'
  });

  const handleSubmit = () => {
    // emailjs.send("service_id", "template_id", formData, "user_id").then(() => {
    //   alert("Message sent successfully!");
    // });
    console.log("Form Submitted!");
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
      {/* Header */}
      <header className="bg-black border-b border-gold">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gold">
                Happy Home Movers
              </h1>
              <p className="text-gray-300 mt-1">Making Your Move Stress-Free</p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-gold-light transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold hidden sm:inline">
                  Call for Quote
                </span>
                <span className="font-semibold sm:hidden">Call</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-white">Professional Moving Services</span>
            <br />
            <span className="text-gold">You Can Trust</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Starting with two friends with a big dream to help families move in
            a more affordable way. We make your move easier, less stressful, and
            a great experience to look forward to.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-gold text-black px-6 py-3 rounded-lg font-semibold">
              <CheckCircle className="w-5 h-5" />
              <span>Affordable Pricing</span>
            </div>
            <div className="flex items-center space-x-2 bg-gold text-black px-6 py-3 rounded-lg font-semibold">
              <Shield className="w-5 h-5" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2 bg-gold text-black px-6 py-3 rounded-lg font-semibold">
              <Clock className="w-5 h-5" />
              <span>On-Time Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gold mb-4">
              About Happy Home Movers
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Starting with two friends with a big dream to help families move
                in a more affordable way. It's always been a goal to help
                families make their moves easier, less stress and a great
                experience to look forward to when going to their new home.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Whether it's moving apartments, houses or that new fridge and
                sofa set you got from the store. We have you taken care of.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="text-gold w-8 h-8" />
                <span className="text-xl font-semibold text-white">
                  Trusted by Families Across the City
                </span>
              </div>
            </div>

            <div className="bg-black p-8 rounded-lg border border-gold">
              <h3 className="text-2xl font-bold text-gold mb-6">
                Our Services Include:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span>Apartment & House Moving</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span>Furniture Delivery</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span>Packing & Unpacking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span>Insurance Coverage</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gold mb-4">
                Meet Our Team
              </h3>
              <div className="w-16 h-1 bg-gold mx-auto"></div>
              <p className="text-gray-300 mt-4">
                The dedicated professionals who make your move stress-free
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="relative overflow-hidden rounded-lg border-2 border-gold mb-4 hover:border-gold-light transition-colors duration-200">
                  <img
                    src="/worker1.webp"
                    alt="Team Member 1"
                    className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI0Q0QUYzNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIDEgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==";
                    }}
                  />
                  <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-gold mb-2">Aaron</h4>
                <p className="text-gray-300">
                  Dedicated to making your move seamless
                </p>
              </div>

              <div className="text-center group">
                <div className="relative overflow-hidden rounded-lg border-2 border-gold mb-4 hover:border-gold-light transition-colors duration-200">
                  <img
                    src="/worker2.webp"
                    alt="Team Member 2"
                    className="w-full h-96 object-center object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI0Q0QUYzNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIDIgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==";
                    }}
                  />
                  <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-gold mb-2">Mandeep</h4>
                <p className="text-gray-300">
                  Committed to exceptional service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gold mb-4">
              Transparent Pricing
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-300 mt-4">
              Affordable rates with no hidden fees
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Apartment Pricing */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gold hover:border-gold-light transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-gold mb-6">
                Apartment Moving
              </h3>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gold mb-2">
                  Starting at $800
                </div>
                <p className="text-gray-300">Based on apartment size</p>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center justify-between">
                  <span>Bachelor - 1 Bedroom</span>
                  <span className="text-gold font-semibold">$800-850</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>2 Bedroom</span>
                  <span className="text-gold font-semibold">$1000-1500</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>3-4 Bedroom</span>
                  <span className="text-gold font-semibold">Contact Us</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  <Clock className="inline w-4 h-4 mr-1" />1 week notice
                  required
                </p>
              </div>
            </div>

            {/* House Moving */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gold hover:border-gold-light transition-colors flex flex-col">
              <h3 className="text-2xl font-bold text-gold mb-6">
                House Moving
              </h3>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gold mb-2">
                  Starting at $5,000
                </div>
                <p className="text-gray-300">All homes are different</p>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span>Custom pricing based on size</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span>Professional assessment</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  <Clock className="inline w-4 h-4 mr-1" />2 weeks notice
                  required
                </p>
              </div>
            </div>

            {/* Furniture Delivery */}
            <div className="bg-gray-900 p-8 rounded-lg border border-gold hover:border-gold-light transition-colors">
              <h3 className="text-2xl font-bold text-gold mb-6">
                Furniture Delivery
              </h3>
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gold mb-2">
                  $500 Base
                </div>
                <p className="text-gray-300">1-4 items from store</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Package className="text-gold w-5 h-5" />
                  <span>Price increases with more items</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="text-gold w-5 h-5" />
                  <span>Careful handling guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gold">
              <h4 className="text-xl font-bold text-gold mb-4">
                Packing & Unpacking
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-lg">Professional packing service</span>
                <span className="text-gold font-semibold text-xl">
                  $150/hour
                </span>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gold">
              <h4 className="text-xl font-bold text-gold mb-4">
                Insurance Coverage
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-lg">Protect your belongings</span>
                <span className="text-gold font-semibold text-xl">
                  Contact for rates
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
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
                <label className="block text-gold font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold focus:outline-none hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-gold font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold focus:outline-none hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-gold font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold focus:outline-none hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-gold font-semibold mb-2">
                  Move Type *
                </label>
                <select
                  name="moveType"
                  value={formData.moveType}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-gold focus:outline-none hover:bg-gray-700 hover:border-gray-500 transition-all duration-200"
                >
                  <option value="">Select move type</option>
                  <option value="apartment">Apartment Moving</option>
                  <option value="house">House Moving</option>
                  <option value="furniture">Furniture Delivery</option>
                </select>
              </div>
              <div>
                <label className="block text-gold font-semibold mb-2">
                  Home Type
                </label>
                <select
                  name="homeType"
                  value={formData.homeType}
                  onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    className="text-gold"
                  />
                  <span>Packing & Unpacking ($150/hour)</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="insurance"
                    checked={formData.insurance}
                    onChange={handleInputChange}
                    className="text-gold"
                  />
                  <span>Insurance Coverage</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-gold font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gold mb-4">
            Happy Home Movers
          </h3>
          <p className="text-gray-300 mb-4">
            Making Your Move Stress-Free Since Day One
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>Professional Service</span>
            <span>•</span>
            <span>Affordable Rates</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HappyHomeMovers;
