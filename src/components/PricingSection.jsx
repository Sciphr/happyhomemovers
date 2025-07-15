import { Clock, CheckCircle, Package, Shield } from "lucide-react";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Apartment Moving",
      startingPrice: "$800",
      description: "Based on apartment size",
      features: [
        { label: "Bachelor - 1 Bedroom", price: "$800-850" },
        { label: "2 Bedroom", price: "$1000-1500" },
        { label: "3-4 Bedroom", price: "Contact Us" },
      ],
      notice: "1 week notice required",
    },
    {
      title: "House Moving",
      startingPrice: "$5,000",
      description: "All homes are different",
      features: [
        { label: "Custom pricing based on size", icon: CheckCircle },
        { label: "Professional assessment", icon: CheckCircle },
      ],
      notice: "2 weeks notice required",
    },
    {
      title: "Furniture Delivery",
      startingPrice: "$500 Base",
      description: "1-4 items from store",
      features: [
        { label: "Price increases with more items", icon: Package },
        { label: "Careful handling guaranteed", icon: Shield },
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Packing & Unpacking",
      description: "Professional packing service",
      price: "$150/hour",
    },
    {
      title: "Insurance Coverage",
      description: "Protect your belongings",
      price: "Contact for rates",
    },
  ];

  return (
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
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-gold"
            >
              <h4 className="text-xl font-bold text-gold mb-4">
                {service.title}
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-lg">{service.description}</span>
                <span className="text-gold font-semibold text-xl">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
