import endOfYearImg from "../assets/images/end-of-year.jpeg";
import endOfYearVid from "../assets/videos/end-of-year.mp4";

type EndOfYearSectionProps = {
  onImageClick: (src: string) => void;
};

const EndOfYearSection = ({ onImageClick }: EndOfYearSectionProps) => {
  return (
    <div className="mb-16 bg-gradient-to-r from-green-800 to-green-900 rounded-3xl p-8 md:p-12 text-white">
      <div className="text-center mb-8">
        <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-3">
          November 29, 2025 • Brampton, Ontario
        </span>
        <h3 className="text-2xl md:text-3xl font-bold">
          End of Year Get-Together
        </h3>
        <p className="mt-3 text-green-100 max-w-3xl mx-auto">
          Celebrating another successful year together as a united community
        </p>
      </div>
      <div className="space-y-6">
        <div
          className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          onClick={() => onImageClick(endOfYearImg)}
        >
          <img
            src={endOfYearImg}
            alt="End of Year Get-Together"
            className="w-full h-auto max-h-[500px] object-contain bg-white/5 hover:opacity-95 transition-opacity"
          />
          <div className="bg-white/10 text-center py-2 text-sm text-white/80">
            Click image to view full size
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <video
            src={endOfYearVid}
            controls
            className="w-full aspect-video bg-black"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default EndOfYearSection;
