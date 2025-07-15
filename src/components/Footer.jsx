const Footer = () => {
  return (
    <footer className="bg-black border-t border-gold py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-gold mb-4">Happy Home Movers</h3>
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
  );
};

export default Footer;
