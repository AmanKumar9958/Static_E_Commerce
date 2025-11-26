import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-[#fcf9f6]">
      {/* Hero Section */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center">
        <img
          src="/about_banner.png"
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-80 rounded-xl"
        />
        <div className="relative z-10 text-center text-white w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Story, Woven Into Every Thread.</h1>
          <p className="mb-6 text-lg md:text-xl">Discover the passion, craftsmanship, and values that define our brand and our commitment to timeless fashion for the whole family.</p>
        </div>
      </section>

      {/* Simple Idea Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">From a Simple Idea to Your Wardrobe</h2>
          <p className="text-gray-700 mb-4">Founded with a passion for timeless style and a commitment to quality, our journey began with a simple sketch. We believe in creating pieces that are not only beautiful but are made to last, ethically sourced, and designed for every member of the family.</p>
          <p className="text-gray-700">Our mission is to inspire confidence through clothing that feels as good as it looks, blending classic silhouettes with modern sensibilities to create your future heirlooms.</p>
        </div>
        <div>
          <img src="/about_hero.png" alt="Studio" className="rounded-xl w-full object-cover" />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#f7f5f2] py-16">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Our Core Values</h2>
          <p className="text-gray-600">The principles that guide every stitch and decision we make.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-[#fbeee0] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl">🧵</span>
            </div>
            <h3 className="font-semibold mb-2">Quality Craftsmanship</h3>
            <p className="text-sm text-gray-600 text-center">We obsess over every detail, from fabric selection to the final stitch, ensuring longevity and comfort.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#eaf7ea] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="font-semibold mb-2">Sustainable Sourcing</h3>
            <p className="text-sm text-gray-600 text-center">Committed to the planet, we prioritize eco-friendly materials and ethical production partners.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#fbeee0] rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-semibold mb-2">Community Focused</h3>
            <p className="text-sm text-gray-600 text-center">We believe in building a diverse and inclusive community, celebrating individuality and style.</p>
          </div>
        </div>
      </section>

      {/* Meet The Founders Section */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Meet The Founders</h2>
          <p className="text-gray-600">The creative minds and driving force behind VogueWear.</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img src="https://www.chaicafeteria.com/images/Owner.webp" alt="Sachida Kumar Singh" className="rounded-full w-28 h-28 object-cover mb-4" />
            <div className="font-semibold">Shri Sachida Kumar Singh</div>
            <div className="text-md font-semibold text-[#e07a5f] mb-2">Owner</div>
            <p className="text-sm text-gray-600 text-center">With a background in fine arts and a love for textiles, Jane leads our creative vision, ensuring every collection is a work of art.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#f7f5f2] py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Become Part of Our Story</h2>
          <p className="text-gray-600 mb-6">Explore our latest arrivals and find pieces that tell your own story.</p>
          <Link to="/collection" className="inline-block bg-[#e07a5f] text-white px-6 py-3 rounded-md font-bold hover:bg-[#d66a4a] transition">Explore Our Collections</Link>
        </div>
      </section>
    </div>
  );
}