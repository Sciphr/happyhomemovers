import { Clock, CheckCircle } from "lucide-react";

const PricingCard = ({
  title,
  startingPrice,
  description,
  features,
  notice,
}) => {
  return (
    <div className="bg-gray-900 p-8 rounded-lg border border-gold hover:border-gold-light transition-colors flex flex-col">
      <h3 className="text-2xl font-bold text-gold mb-6">{title}</h3>

      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-gold mb-2">
          Starting at {startingPrice}
        </div>
        <p className="text-gray-300">{description}</p>
      </div>

      <div className="space-y-4 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between">
            {feature.icon ? (
              <div className="flex items-center space-x-2">
                <feature.icon className="text-gold w-5 h-5" />
                <span>{feature.label}</span>
              </div>
            ) : (
              <>
                <span>{feature.label}</span>
                <span className="text-gold font-semibold">{feature.price}</span>
              </>
            )}
          </div>
        ))}
      </div>

      {notice && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            <Clock className="inline w-4 h-4 mr-1" />
            {notice}
          </p>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
