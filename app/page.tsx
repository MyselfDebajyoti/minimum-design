import Hero from "../components/Hero";
import WhoAreWe from "../components/WhoAreWe";
import OurEthos from "../components/OurEthos";
import WhatOurShopSells from "../components/WhatOurShopSells";
import GetInTouch from "../components/GetInTouch";
import PSWhyShouldntYouHireUs from "../components/PSWhyShouldntYouHireUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoAreWe />
      <OurEthos />
      <WhatOurShopSells />
      <GetInTouch />

      {/* Placeholder sections for navigation */}
      {/* <section id="portfolio" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-600">Coming Soon</p>
        </div>
      </section>

      <section id="people" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">People</h2>
          <p className="text-gray-600">Coming Soon</p>
        </div>
      </section>

      <section id="careers" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Careers</h2>
          <p className="text-gray-600">Coming Soon</p>
        </div>
      </section> */}

      <PSWhyShouldntYouHireUs />
    </div>
  );
}
