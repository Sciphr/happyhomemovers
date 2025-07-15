import { CheckCircle, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          <span className="text-white">Professional Moving Services</span>
          <br />
          <span className="text-gold">You Can Trust</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Starting with two friends with a big dream to help families move in a
          more affordable way. We make your move easier, less stressful, and a
          great experience to look forward to.
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
  );
};

export default HeroSection;
