import { Phone } from "lucide-react";

const TeamMember = ({ name, image, phone, description }) => {
  const handleImageError = (e) => {
    e.target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI0Q0QUYzNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=`;
  };

  return (
    <div className="text-center group">
      <div className="relative overflow-hidden rounded-lg border-2 border-gold mb-4 hover:border-gold-light transition-colors duration-200">
        <img
          src={image}
          alt={`Team Member ${name}`}
          className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <h4 className="text-xl font-bold text-gold mb-2">{name}</h4>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={`tel:${phone}`}
        className="inline-flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-gold-light transition-colors font-semibold"
      >
        <Phone className="w-4 h-4" />
        <span>Call {name}</span>
      </a>
    </div>
  );
};

export default TeamMember;
