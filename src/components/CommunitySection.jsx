// // src/components/CommunitySection.js

// import React from 'react';

// const TestimonialCard = ({ author, content }) => (
//     <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
//         <p className="text-sm text-gray-600 mb-4 italic">
//             "{content}"
//         </p>
//         <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-travactiv-orange rounded-full">
//                 {/* Placeholder for avatar image */}
//             </div>
//             <div>
//                 <p className="text-sm font-semibold text-gray-800">{author}</p>
//                 <p className="text-xs text-gray-500">Traveler</p>
//             </div>
//         </div>
//     </div>
// );

// const CommunitySection = () => {
//     const testimonials = [
//         { author: "Liam Davies", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac quam non erat viverra sagittis." },
//         { author: "Sarah Chen", content: "Turpis lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac quam non erat viverra sagittis." },
//         { author: "Omar Khalid", content: "Vitae semper, lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac quam non erat viverra sagittis." },
//         { author: "Maria Flores", content: "Porta elit, lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac quam non erat viverra sagittis." },
//     ];

//     return (
//         <section className="py-20 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                     A New Platform, A Growing Community
//                 </h2>
//                 <p className="text-gray-500 mb-12">
//                     Travactiv is the platform for all travelers. Whether you're navigating a new college campus or exploring a remote destination, let our community support you.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {testimonials.map((test, index) => (
//                         <TestimonialCard key={index} {...test} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CommunitySection;