// // app/data/headphoneProducts.ts

// export const HEADPHONE_PRODUCTS_DATA = {
//   // --- XX99 MARK II HEADPHONES DATA ---
//   "xx99-mark-ii-headphones": {
//     slug: "xx99-mark-ii-headphones",
//     name: "XX99 MARK II HEADPHONES",
//     price: 2999,
//     isNew: true,
//     imageSrc: "/images/product-xx99-mark-ii-main.png", // Main product image
//     description:
//       "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",

//     // Data for ProductFeaturesAndBox component
//     features: {
//       paragraph1:
//         "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort...",
//       paragraph2:
//         "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms...",
//     },
//     inTheBox: [
//       { quantity: "1x", item: "Headphone Unit" },
//       { quantity: "2x", item: "Replacement Earcups" },
//       { quantity: "1x", item: "3.5mm 5m Audio Cable" },
//     ],

//     // Data for ProductGallery component
//     galleryImages: {
//       image1: "/images/gallery-mark-ii-desktop-1.jpg",
//       image2: "/images/gallery-mark-ii-desktop-2.jpg",
//       image3: "/images/gallery-mark-ii-desktop-3.jpg",
//     },

//     // Data for YouMayAlsoLike component
//     suggestedProducts: [
//       {
//         name: "XX99 MARK I",
//         slug: "xx99-mark-i-headphones",
//         image: "/images/xx99-mark-i-like.png",
//       },
//       { name: "XX59", slug: "xx59-headphones", image: "/images/xx59-like.png" },
//     ],
//   },

//   // --- XX99 MARK I HEADPHONES DATA ---
//   "xx99-mark-i-headphones": {
//     slug: "xx99-mark-i-headphones",
//     name: "XX99 MARK I HEADPHONES",
//     price: 1750,
//     isNew: false,
//     imageSrc: "/images/product-xx99-mark-i-main.png",
//     description:
//       "As the gold standard of headphones, the XX99 Mark I is the perfect blend of style and sound...",
//     features: {
//       /* ... Mark I specific features ... */
//     },
//     inTheBox: [
//       /* ... Mark I specific box items ... */
//     ],
//     galleryImages: {
//       /* ... Mark I specific gallery paths ... */
//     },
//     suggestedProducts: [
//       /* ... Mark I specific suggested products ... */
//     ],
//   },

//   // --- XX59 HEADPHONES DATA ---
//   "xx59-headphones": {
//     slug: "xx59-headphones",
//     name: "XX59 HEADPHONES",
//     price: 899,
//     isNew: false,
//     imageSrc: "/images/product-xx59-main.png",
//     description: "Experience your audio redefined with the XX59 headphones...",
//     features: {
//       /* ... XX59 specific features ... */
//     },
//     inTheBox: [
//       /* ... XX59 specific box items ... */
//     ],
//     galleryImages: {
//       /* ... XX59 specific gallery paths ... */
//     },
//     suggestedProducts: [
//       /* ... XX59 specific suggested products ... */
//     ],
//   },
// };

// // Data used for the main category listing page (for the alternating layout)
// export const HEADPHONE_LISTING = [
//   HEADPHONE_PRODUCTS_DATA["xx99-mark-ii-headphones"],
//   HEADPHONE_PRODUCTS_DATA["xx99-mark-i-headphones"],
//   HEADPHONE_PRODUCTS_DATA["xx59-headphones"],
// ];






// import React, { useState } from 'react';
// import { ChevronLeft, ShoppingCart, Facebook, Twitter, Instagram } from 'lucide-react';

// // Mock Next.js routing functionality
// const Link = ({ href, children, ...props }) => (
//   <a href={href} {...props}>{children}</a>
// );

// // Product data
// const products = [
//   {
//     id: 'xx99-mark-ii',
//     name: 'XX99 MARK II',
//     category: 'HEADPHONES',
//     price: 2999,
//     description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
//     features: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation.',
//     inTheBox: [
//       { quantity: 1, item: 'Headphone Unit' },
//       { quantity: 2, item: 'Replacement Earcups' },
//       { quantity: 1, item: 'User Manual' },
//       { quantity: 1, item: '3.5mm Audio Cable' },
//       { quantity: 1, item: 'Travel Bag' }
//     ],
//     image: '/xx99-mark-ii.jpg',
//     color: 'black'
//   },
//   {
//     id: 'xx99-mark-i',
//     name: 'XX99 MARK I',
//     category: 'HEADPHONES',
//     price: 1750,
//     description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
//     features: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast. The XX99 Mark I headphones feature precision-crafted components for superior sound.',
//     inTheBox: [
//       { quantity: 1, item: 'Headphone Unit' },
//       { quantity: 2, item: 'Replacement Earcups' },
//       { quantity: 1, item: 'User Manual' },
//       { quantity: 1, item: '3.5mm Audio Cable' }
//     ],
//     image: '/xx99-mark-i.jpg',
//     color: 'black-gold'
//   },
//   {
//     id: 'xx59',
//     name: 'XX59',
//     category: 'HEADPHONES',
//     price: 899,
//     description: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
//     features: 'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel.',
//     inTheBox: [
//       { quantity: 1, item: 'Headphone Unit' },
//       { quantity: 2, item: 'Replacement Earcups' },
//       { quantity: 1, item: 'User Manual' },
//       { quantity: 1, item: '3.5mm Audio Cable' }
//     ],
//     image: '/xx59.jpg',
//     color: 'white'
//   }
// ];

// const relatedProducts = [
//   { id: 'xx99-mark-ii', name: 'XX99 MARK II', image: '/xx99-mark-ii.jpg' },
//   { id: 'xx99-mark-i', name: 'XX99 MARK I', image: '/xx99-mark-i.jpg' },
//   { id: 'xx59', name: 'XX59', image: '/xx59.jpg' },
//   { id: 'zx9-speaker', name: 'ZX9 SPEAKER', image: '/zx9.jpg' },
//   { id: 'zx7-speaker', name: 'ZX7 SPEAKER', image: '/zx7.jpg' },
//   { id: 'yx1-earphones', name: 'YX1 EARPHONES', image: '/yx1.jpg' }
// ];

// // Header Component
// const Header = () => (
//   <header className="bg-black text-white py-6 px-8">
//     <div className="max-w-7xl mx-auto flex items-center justify-between">
//       <div className="text-2xl font-bold">audiophile</div>
//       <nav className="flex gap-8 text-sm">
//         <a href="#" className="hover:text-orange-500">HOME</a>
//         <a href="#" className="hover:text-orange-500">HEADPHONES</a>
//         <a href="#" className="hover:text-orange-500">SPEAKERS</a>
//         <a href="#" className="hover:text-orange-500">EARPHONES</a>
//       </nav>
//       <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-orange-500" />
//     </div>
//   </header>
// );

// // Footer Component
// const Footer = () => (
//   <footer className="bg-black text-white py-12 px-8 mt-24">
//     <div className="max-w-7xl mx-auto">
//       <div className="flex justify-between items-start mb-8">
//         <div className="text-2xl font-bold">audiophile</div>
//         <nav className="flex gap-8 text-sm">
//           <a href="#" className="hover:text-orange-500">HOME</a>
//           <a href="#" className="hover:text-orange-500">HEADPHONES</a>
//           <a href="#" className="hover:text-orange-500">SPEAKERS</a>
//           <a href="#" className="hover:text-orange-500">EARPHONES</a>
//         </nav>
//       </div>
//       <p className="text-gray-400 text-sm max-w-xl mb-8">
//         Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
//         and sound specialists who are devoted to helping you get the most out of personal audio.
//       </p>
//       <div className="flex justify-between items-center">
//         <p className="text-gray-400 text-sm">Copyright 2024. All Rights Reserved</p>
//         <div className="flex gap-4">
//           <Facebook className="w-5 h-5 cursor-pointer hover:text-orange-500" />
//           <Twitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
//           <Instagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
//         </div>
//       </div>
//     </div>
//   </footer>
// );

// // Product Listing Page
// const ProductListingPage = ({ onNavigate }) => (
//   <div className="min-h-screen bg-gray-50">
//     <Header />
    
//     <main className="max-w-6xl mx-auto px-8 py-16">
//       {/* XX99 Mark II */}
//       <section className="bg-white rounded-lg overflow-hidden mb-8 flex items-center">
//         <div className="w-1/2 bg-gray-100 p-16 flex items-center justify-center">
//           <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
//             <div className="text-6xl">🎧</div>
//           </div>
//         </div>
//         <div className="w-1/2 p-16">
//           <p className="text-orange-500 text-sm tracking-widest mb-4">NEW PRODUCT</p>
//           <h2 className="text-4xl font-bold mb-6">XX99 MARK II<br />HEADPHONES</h2>
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             The new XX99 Mark II headphones is the pinnacle of pristine audio. 
//             It redefines your premium headphone experience by reproducing the balanced 
//             depth and precision of studio-quality sound.
//           </p>
//           <button 
//             onClick={() => onNavigate('xx99-mark-ii')}
//             className="bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition"
//           >
//             SEE PRODUCT
//           </button>
//         </div>
//       </section>

//       {/* XX99 Mark I */}
//       <section className="bg-white rounded-lg overflow-hidden mb-8 flex items-center flex-row-reverse">
//         <div className="w-1/2 bg-gray-100 p-16 flex items-center justify-center">
//           <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
//             <div className="text-6xl">🎧</div>
//           </div>
//         </div>
//         <div className="w-1/2 p-16">
//           <h2 className="text-4xl font-bold mb-6">XX99 MARK I<br />HEADPHONES</h2>
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             As the gold standard for headphones, the classic XX99 Mark I offers 
//             detailed and accurate audio reproduction for audiophiles, mixing engineers, 
//             and music aficionados alike in studios and on the go.
//           </p>
//           <button 
//             onClick={() => onNavigate('xx99-mark-i')}
//             className="bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition"
//           >
//             SEE PRODUCT
//           </button>
//         </div>
//       </section>

//       {/* XX59 */}
//       <section className="bg-white rounded-lg overflow-hidden mb-8 flex items-center">
//         <div className="w-1/2 bg-gray-100 p-16 flex items-center justify-center">
//           <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
//             <div className="text-6xl">🎧</div>
//           </div>
//         </div>
//         <div className="w-1/2 p-16">
//           <h2 className="text-4xl font-bold mb-6">XX59<br />HEADPHONES</h2>
//           <p className="text-gray-600 mb-8 leading-relaxed">
//             Enjoy your audio almost anywhere and customize it to your specific tastes 
//             with the XX59 headphones. The stylish yet durable versatile wireless headset 
//             is a brilliant companion at home or on the move.
//           </p>
//           <button 
//             onClick={() => onNavigate('xx59')}
//             className="bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition"
//           >
//             SEE PRODUCT
//           </button>
//         </div>
//       </section>
//     </main>

//     <Footer />
//   </div>
// );

// // Product Detail Page
// const ProductDetailPage = ({ productId, onNavigate }) => {
//   const product = products.find(p => p.id === productId);
//   const [quantity, setQuantity] = useState(1);

//   if (!product) return <div>Product not found</div>;

//   const otherProducts = relatedProducts.filter(p => p.id !== productId).slice(0, 3);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
      
//       <main className="max-w-6xl mx-auto px-8 py-16">
//         {/* Back Button */}
//         <button 
//           onClick={() => onNavigate('home')}
//           className="flex items-center text-gray-600 hover:text-orange-500 mb-12"
//         >
//           <ChevronLeft className="w-5 h-5" />
//           Go Back
//         </button>

//         {/* Product Section */}
//         <section className="bg-white rounded-lg overflow-hidden mb-16 flex items-center">
//           <div className="w-1/2 bg-gray-100 p-16 flex items-center justify-center">
//             <div className="w-80 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
//               <div className="text-8xl">🎧</div>
//             </div>
//           </div>
//           <div className="w-1/2 p-16">
//             <p className="text-orange-500 text-sm tracking-widest mb-4">NEW PRODUCT</p>
//             <h1 className="text-4xl font-bold mb-6">{product.name}<br />{product.category}</h1>
//             <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>
//             <p className="text-2xl font-bold mb-8">$ {product.price.toLocaleString()}</p>
            
//             <div className="flex gap-4">
//               <div className="bg-gray-100 flex items-center">
//                 <button 
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="px-4 py-3 hover:text-orange-500"
//                 >
//                   -
//                 </button>
//                 <span className="px-6 py-3 font-bold">{quantity}</span>
//                 <button 
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="px-4 py-3 hover:text-orange-500"
//                 >
//                   +
//                 </button>
//               </div>
//               <button className="bg-orange-500 text-white px-8 py-3 hover:bg-orange-600 transition">
//                 ADD TO CART
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* Features and In The Box */}
//         <section className="grid grid-cols-3 gap-16 mb-16">
//           <div className="col-span-2">
//             <h2 className="text-3xl font-bold mb-6">FEATURES</h2>
//             <p className="text-gray-600 leading-relaxed mb-4">{product.features}</p>
//             <p className="text-gray-600 leading-relaxed">
//               These headphones have been created from durable, high-quality materials 
//               tough enough to take anywhere. Its compact folding design fuses comfort 
//               and minimalist style making it perfect for travel. Flawless transmission 
//               is assured by the latest wireless technology engineered for audio synchronization 
//               with videos.
//             </p>
//           </div>
//           <div>
//             <h2 className="text-3xl font-bold mb-6">IN THE BOX</h2>
//             {product.inTheBox.map((item, index) => (
//               <div key={index} className="flex gap-4 mb-2">
//                 <span className="text-orange-500 font-bold">{item.quantity}x</span>
//                 <span className="text-gray-600">{item.item}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Gallery */}
//         <section className="grid grid-cols-2 gap-4 mb-16">
//           <div className="space-y-4">
//             <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
//               <div className="text-4xl">📷</div>
//             </div>
//             <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
//               <div className="text-4xl">📷</div>
//             </div>
//           </div>
//           <div className="bg-gray-200 h-full rounded-lg flex items-center justify-center">
//             <div className="text-6xl">📷</div>
//           </div>
//         </section>

//         {/* You May Also Like */}
//         <section>
//           <h2 className="text-3xl font-bold text-center mb-12">YOU MAY ALSO LIKE</h2>
//           <div className="grid grid-cols-3 gap-8">
//             {otherProducts.map((item) => (
//               <div key={item.id} className="text-center">
//                 <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
//                   <div className="text-5xl">🎧</div>
//                 </div>
//                 <h3 className="text-xl font-bold mb-4">{item.name}</h3>
//                 <button 
//                   onClick={() => onNavigate(item.id)}
//                   className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition"
//                 >
//                   SEE PRODUCT
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Brand Section */}
//         <section className="mt-24 grid grid-cols-2 gap-16 items-center">
//           <div>
//             <h2 className="text-4xl font-bold mb-6">
//               BRINGING YOU THE <span className="text-orange-500">BEST</span> AUDIO GEAR
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               Located at the heart of New York City, Audiophile is the premier store 
//               for high end headphones, earphones, speakers, and audio accessories. 
//               We have a large showroom and luxury demonstration rooms available for 
//               you to browse and experience a wide range of our products. Stop by our 
//               store to meet some of the fantastic people who make Audiophile the best 
//               place to buy your portable audio equipment.
//             </p>
//           </div>
//           <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
//             <div className="text-6xl">👤</div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// // Main App Component with Router
// export default function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [currentProduct, setCurrentProduct] = useState(null);

//   const handleNavigate = (destination) => {
//     if (destination === 'home') {
//       setCurrentPage('home');
//       setCurrentProduct(null);
//     } else {
//       setCurrentPage('product');
//       setCurrentProduct(destination);
//     }
//   };

//   return (
//     <div>
//       {currentPage === 'home' ? (
//         <ProductListingPage onNavigate={handleNavigate} />
//       ) : (
//         <ProductDetailPage productId={currentProduct} onNavigate={handleNavigate} />
//       )}
//     </div>
//   );
// }