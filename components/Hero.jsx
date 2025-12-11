"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* Desktop Hero Section */}
      <section className="hidden md:block relative w-full h-screen">
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

      {/* Mobile Hero Section */}
      <section className="md:hidden relative w-full">
        <Image
          src="/images/mobile-hero.jpg"
          alt="Minimum Design Hero Mobile"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </section>
    </>
  );
};

export default Hero;
