import { useState } from "react";
import logoImg from "../assets/images/logo.jpeg";
import ImageLightbox from "./ImageLightbox";
import LetterSection from "./LetterSection";
import MembersSection from "./MembersSection";
import CulturalDaySection from "./CulturalDaySection";
import EndOfYearSection from "./EndOfYearSection";
import AppreciationSection from "./AppreciationSection";

const HomePage = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <ImageLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <img
                src={logoImg}
                alt="ICFN Logo"
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg border-4 border-green-700"
              />
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-green-800">
                Our Journey Together
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Celebrating unity, friendship, and progress within the Ideato
                community in Canada
              </p>
            </div>

            <LetterSection />
            <MembersSection onImageClick={setLightboxImage} />
            <CulturalDaySection />
            <EndOfYearSection onImageClick={setLightboxImage} />
            <AppreciationSection />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
