import React from 'react'

const Award = () => {
  return (
    <section className="py-12 px-6 md:px-24 bg-[#f9f9f9]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-slide-up">
          <a
            href="https://top216.com/vote"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow-md transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-playfair text-[#E91E63] mb-2">🏆 Vote Top216</h2>
            <p className="text-base">Support your favorites from Los Angeles in the Top216 showcase.</p>
          </a>

          <a
            href="https://thetop36.com/highlights"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl shadow-md transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-playfair text-[#E91E63] mb-2">✨ Explore TheTop36</h2>
            <p className="text-base">Dive into curated highlights from LA’s creative community.</p>
          </a>
        </div>
      </section>
  )
}

export default Award