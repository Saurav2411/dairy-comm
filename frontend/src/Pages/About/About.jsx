import React from "react";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="bg-[#fefefe] py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#007580] mb-4">
          About Gokul Dairy
        </h1>
        <p className="text-[#444] max-w-2xl mx-auto text-lg">
          Pure. Fresh. Local. Bringing farm-fresh dairy products straight to your doorstep.
        </p>
      </div>

      {/* Company Introduction */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/src/assets/about/farm_milk.jpg"
            alt="Gokul Dairy Farm"
            className="rounded-xl shadow-md w-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#007580] mb-4">Who We Are</h2>
            <p className="text-[#333] text-lg mb-4">
              Gokul Dairy is a family-run business committed to providing the highest quality dairy
              products. Our farm-to-home approach ensures freshness, nutrition, and taste in every
              product you receive.
            </p>
            <p className="text-[#555]">
              From milking to packaging, everything is done with the utmost care and hygiene. We
              believe in ethical farming, happy cows, and delivering wholesome goodness to your
              home.
            </p>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-[#f0f9f9] py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#007580] mb-6">Our Mission & Values</h2>
          <p className="text-[#333] text-lg mb-4">
            Our mission is to bring purity and freshness to your table. We are dedicated to
            supporting local farmers, preserving traditional dairy methods, and ensuring every drop
            of milk is as natural as nature intended.
          </p>
          <p className="text-[#555]">
            Trust, transparency, and taste are at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#007580] mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="/src/assets/about/icon_fresh.png"
              alt="Fresh Milk"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Farm Fresh Quality</h3>
            <p className="text-[#555]">
              Milked, processed and delivered within hours to ensure freshness and flavor.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="/src/assets/about/icon_natural.png"
              alt="Natural Process"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">100% Natural</h3>
            <p className="text-[#555]">
              No preservatives. No additives. Just wholesome, natural dairy goodness.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="/src/assets/about/icon_local.png"
              alt="Local Support"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Support Local</h3>
            <p className="text-[#555]">
              Every product you buy supports our farmers and the local economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
