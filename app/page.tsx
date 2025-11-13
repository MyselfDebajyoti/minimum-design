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
      <PSWhyShouldntYouHireUs />
    </div>
  );
}
