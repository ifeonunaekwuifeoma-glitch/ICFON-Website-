import letterImg from "../assets/images/letter.jpeg";

const LetterSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img
            src={letterImg}
            alt="Letter to Prospective Pioneer Members"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-green-50 to-white">
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
            Historical Document
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Letter to Prospective Pioneer Members of Canada Branch
          </h3>
          <p className="text-gray-600">
            A significant piece of our history marking the beginning of ICFN
            Canada Branch's journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetterSection;
