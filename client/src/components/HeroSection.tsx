import React from 'react'

type HeroSectionProps = {
  onLearnMore: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center">
      <div className="w-full flex justify-center">
        <div className="w-[90%] max-w-5xl bg-[#F8F9FA] rounded-2xl p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-snug">
            Ideato Committee of Friends of Nigeria (ICFN)
          </h1>

          <span className="inline-block bg-red-600 text-white mt-6 px-5 py-2 rounded-md font-semibold text-sm tracking-wide">
            CANADA BRANCH
          </span>

          <p className="mt-6 text-xl text-gray-700 italic">
            Friendship and Progress
          </p>

          <button
            onClick={onLearnMore}
            className="mt-8 px-10 py-3 bg-green-800 text-white rounded-full font-semibold text-lg shadow-md hover:bg-green-900 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
