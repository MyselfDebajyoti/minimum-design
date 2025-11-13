"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Hero Image - Full Display */}
      <div className="absolute inset-0">
        <Image
          src="/images/Group 1171275812.png"
          alt="Minimum Design Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
