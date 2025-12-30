import appreciationVid from "../assets/videos/appreciation.mp4";
import appreciation2Vid from "../assets/videos/appreciation-2.mp4";
import appreciation3Vid from "../assets/videos/appreciation-3.mp4";

const appreciationVideos = [
  appreciationVid,
  appreciation2Vid,
  appreciation3Vid,
];

const AppreciationSection = () => {
  return (
    <div className="mb-8">
      <div className="text-center mb-8">
        <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
          Special Recognition
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Show of Appreciation to the National President
        </h3>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          A heartfelt tribute presented by Owerri Branch in honor of our
          National President's dedication and leadership
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {appreciationVideos.map((video, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-black"
          >
            <video
              src={video}
              controls
              className="w-full aspect-[9/16] object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppreciationSection;
