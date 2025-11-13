import React from 'react'
import CTA from "../Components/CTA.jsx"
import Navbar from '../Components/Navbar.jsx'

const Contact = () => {
  return (
    
      <section className="bg-white text-[#023436] px-6 sm:px-10 lg:px-20 py-16 space-y-16">
        <Navbar />
  {/* Behind Travactiv */}
  <div className="max-w-5xl mx-auto text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Behind Travactiv</h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      At Travactiv, we believe travel decisions should be guided by clarity, not confusion. 
      Built with the modern traveler in mind, our platform blends trusted global sources with 
      AI-powered insights—so you get accurate, timely, and practical information without the noise.
    </p>
    <p className="text-gray-700 leading-relaxed">
      We’re not just another travel platform; we’re your partner in navigating visas, rules, 
      advisories, and opportunities. Whether you’re a student chasing dreams abroad or a traveler 
      seeking safe, confident journeys, Travactiv was designed to put trustworthy information at your fingertips.
    </p>
  </div>

  {/* Why Choose Travactiv */}
  <div className="max-w-5xl mx-auto text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Why Choose Travactiv</h2>
    <p className="text-gray-700 leading-relaxed">
      At Travactiv, we go beyond ordinary travel updates. Every piece of information you see is AI-verified, 
      sourced from credible global channels, and tailored to your journey. No noise, no guesswork—just the 
      clarity you need to make informed decisions. Whether you’re navigating visa requirements, checking 
      safety advisories, or planning your next adventure, Travactiv ensures you stay one step ahead.
    </p>
  </div>

  {/* CTA Section */}
  <CTA />

  
</section>

    
  )
}

export default Contact