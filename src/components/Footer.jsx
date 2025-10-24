// // src/components/Footer.js

// import React from 'react';
// // Using Font Awesome/equivalent icons for social media
// const SocialIcon = ({ icon }) => (
//     <a href="#" className="text-gray-400 hover:text-white transition duration-150">
//         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{/* Placeholder SVG */}</svg>
//     </a>
// );

// const Footer = () => {
//     const sitemapLinks = ['Sitemap', 'About Us', 'Services', 'Terms', 'Privacy Policy'];
//     const companyLinks = ['Our Team', 'Careers', 'Press', 'Blog', 'Contact Us'];

//     return (
//         <footer className="bg-travactiv-dark text-white pt-16 pb-8">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
                    
//                     {/* Column 1: Logo & Mission */}
//                     <div>
//                         <div className="flex items-center space-x-2 mb-4">
//                             <svg className="w-6 h-6 text-travactiv-teal" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2zM9 7h2v6H9V7z"/></svg>
//                             <span className="text-xl font-bold">Travactiv</span>
//                         </div>
//                         <p className="text-sm text-gray-400 mb-6 max-w-xs">
//                             Navigate your travel world with ease. Get real-time updates, safety insights, and global context with Travactiv.
//                         </p>
//                         <div className="flex space-x-4">
//                             <SocialIcon icon="facebook" /><SocialIcon icon="twitter" /><SocialIcon icon="instagram" /><SocialIcon icon="linkedin" />
//                         </div>
//                     </div>

//                     {/* Column 2: Sitemap */}
//                     <div>
//                         <h4 className="text-lg font-semibold mb-4">Sitemap</h4>
//                         <ul className="space-y-2">
//                             {sitemapLinks.map(link => (
//                                 <li key={link}><a href="#" className="text-sm text-gray-400 hover:text-white transition duration-150">{link}</a></li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Column 3: Our Company */}
//                     <div>
//                         <h4 className="text-lg font-semibold mb-4">Our Company</h4>
//                         <ul className="space-y-2">
//                             {companyLinks.map(link => (
//                                 <li key={link}><a href="#" className="text-sm text-gray-400 hover:text-white transition duration-150">{link}</a></li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Column 4: Newsletter */}
//                     <div>
//                         <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
//                         <p className="text-sm text-gray-400 mb-4">
//                             We'll send you our best travel insights and news.
//                         </p>
//                         <form className="flex">
//                             <input 
//                                 type="email" 
//                                 placeholder="Your email" 
//                                 className="flex-grow p-3 rounded-l-md text-sm text-gray-900 focus:ring-travactiv-orange focus:border-travactiv-orange"
//                             />
//                             <button 
//                                 type="submit"
//                                 className="px-4 py-3 bg-travactiv-orange text-white font-semibold rounded-r-md hover:bg-opacity-90 transition duration-300"
//                             >
//                                 Subscribe
//                             </button>
//                         </form>
//                     </div>

//                 </div>
                
//                 {/* Copyright */}
//                 <div className="text-center pt-8">
//                     <p className="text-xs text-gray-500">
//                         &copy; 2025 Travactiv. All rights reserved.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;