import { Phone } from "lucide-react";

const Header = ({ scrollToTeam }) => {
  return (
    <header className="bg-black border-b border-gold">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gold">Happy Home Movers</h1>
            <p className="text-gray-300 mt-1">Making Your Move Stress-Free</p>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTeam}
              className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-gold-light transition-colors cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold hidden sm:inline">
                Call for Quote
              </span>
              <span className="font-semibold sm:hidden">Call</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
