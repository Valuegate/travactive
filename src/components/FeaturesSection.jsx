// // src/components/FeaturesSection.js

// import React from 'react';

// const FeatureCard = ({ title, body, imageUrl, filterClass }) => (
//   <div className="flex flex-col">
//     {/* Image */}
//     <div className={`h-80 w-full overflow-hidden rounded-lg mb-6 ${filterClass}`}>
//         {/* Placeholder image with object-cover */}
//         <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
//     </div>
    
//     {/* Text block, including the green checkmark/icon */}
//     <div className="p-0">
//         <div className="flex items-start mb-2">
//             <svg className="w-6 h-6 text-travactiv-teal flex-shrink-0 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
//             <h3 className="text-xl font-bold text-gray-800">{title}</h3>
//         </div>
//         <p className="text-sm text-gray-500">{body}</p>
//     </div>
//   </div>
// );

// const FeaturesSection = () => {
//     const features = [
//         {
//             title: "Safety Alerts & Risk Scores",
//             body: "We go beyond general travel data to deliver clear, actionable risk scores and real-time security alerts and updates.",
//             imageUrl: "https://via.placeholder.com/300x400?text=Student+Graduation",
//             filterClass: "",
//         },
//         {
//             title: "Personalized Itineraries",
//             body: "Intelligent planning that's backed by factual, verified options, not just opinion. Suit both the traveler and the journey.",
//             imageUrl: "https://via.placeholder.com/300x400?text=Hiker+Backpacking",
//             filterClass: "",
//         },
//         {
//             title: "Interactive Mapping & Guidance",
//             body: "Whether a student navigating a tricky campus or a traveler exploring remote wonders, our maps are ready to assist.",
//             imageUrl: "https://via.placeholder.com/300x400?text=App+Interface",
//             filterClass: "",
//         },
//         {
//             title: "Immersive VR Preparation",
//             body: "Go beyond simply viewing a property or region. Giving you clear images for confident, secure planning.",
//             imageUrl: "https://via.placeholder.com/300x400?text=VR+Headset",
//             // This class applies the purple overlay effect visible in the image
//             filterClass: "relative after:content-[''] after:absolute after:inset-0 after:bg-purple-600 after:opacity-50", 
//         },
//     ];

//     return (
//         <section className="py-20 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
//                     Not Just Information — <span className="text-travactiv-orange">Clarity You Can Rely On</span>
//                 </h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//                     {features.map((feature, index) => (
//                         <FeatureCard key={index} {...feature} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FeaturesSection;