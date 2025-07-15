import { Users, CheckCircle } from "lucide-react";
import TeamMember from "./TeamMember";

const AboutSection = () => {
  return (
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
              in a more affordable way. It's always been a goal to help families
              make their moves easier, less stress and a great experience to
              look forward to when going to their new home.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Whether it's moving apartments, houses or that new fridge and sofa
              set you got from the store. We have you taken care of.
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
        <div id="team-section" className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gold mb-4">Meet Our Team</h3>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
            <p className="text-gray-300 mt-4">
              The dedicated professionals who make your move stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamMember
              name="Aaron"
              image="/worker1.webp"
              phone="+1234567890"
              description="Dedicated to making your move seamless"
            />
            <TeamMember
              name="Mandeep"
              image="/worker2.webp"
              phone="+0987654321"
              description="Committed to exceptional service"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
