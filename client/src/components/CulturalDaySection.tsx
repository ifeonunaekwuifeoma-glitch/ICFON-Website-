import generalAssemblyVid from "../assets/videos/general-assembly.mp4";

const CulturalDaySection = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
          August 9, 2025 • Toronto
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Orlu General Assembly Cultural Day
        </h3>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          Our outing and show of solidarity with Orlu General Assembly Cultural
          Day celebration
        </p>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <video
          src={generalAssemblyVid}
          controls
          className="w-full aspect-video bg-black"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default CulturalDaySection;
