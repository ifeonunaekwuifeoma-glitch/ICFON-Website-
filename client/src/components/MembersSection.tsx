import membersImg from "../assets/images/members .jpeg";
import members2Img from "../assets/images/members-2.jpeg";
import members3Img from "../assets/images/members-3.jpeg";
import members4Img from "../assets/images/members-4.jpeg";

const memberImages = [
  { src: membersImg, label: "Photo I" },
  { src: members2Img, label: "Photo II" },
  { src: members3Img, label: "Photo III" },
  { src: members4Img, label: "Photo IV" },
];

type MembersSectionProps = {
  onImageClick: (src: string) => void;
};

const MembersSection = ({ onImageClick }: MembersSectionProps) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
          June 29, 2025 • Brampton, Ontario
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          General Meeting with Port Harcourt Branch Chairman
        </h3>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          Some members of ICFN Canada Branch in a group photograph with the
          visiting Port Harcourt Branch Chairman during our General Meeting
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {memberImages.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            onClick={() => onImageClick(img.src)}
          >
            <img
              src={img.src}
              alt="Members with Port Harcourt Branch Chairman"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
              <p className="text-white font-medium text-sm">{img.label}</p>
              <span className="text-white/80 text-xs">Click to view</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersSection;
