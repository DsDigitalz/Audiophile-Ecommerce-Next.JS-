    // File: ProductHighlightCard.tsx

    import Link from 'next/link';
    import Image from 'next/image';

    const ProductHighlightCard = () => {
    return (
        // Use a <section> for the highlight block
        <section className="md:pt-20  md:py">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <article
            // The main container with the distinct orange background and rounded corners
            // Using `relative` for positioning of the image and background circles
            className="relative bg-[#D87D4A] rounded-lg p-8 md:p-12 lg:pb-24  overflow-hidden text-white flex flex-col lg:flex-row items-center justify-between gap-12"
            >
            {/* Background Circles (for decorative effect matching the design)
                These are positioned absolutely and will be large and slightly transparent.
                Use `aria-hidden` as they are purely decorative.
            */}
            <div
                className="absolute top-0 left-1/2 w-[944px] h-[944px] -translate-x-1/2 rounded-full border border-white border-opacity-20 pointer-events-none"
                aria-hidden="true"
            ></div>
            <div
                className="absolute top-[8%] left-1/2 w-[800px] h-[800px] -translate-x-1/2 rounded-full border border-white border-opacity-20 pointer-events-none"
                aria-hidden="true"
            ></div>
            <div
                className="absolute top-[16%] left-1/2 w-[650px] h-[650px] -translate-x-1/2 rounded-full border border-white border-opacity-20 pointer-events-none"
                aria-hidden="true"
            ></div>

            {/* Product Image - Left Side */}
            <div className="relative w-full max-w-sm h-64 md:h-96 lg:w-1/2 lg:h-[400px] flex justify-center lg:justify-start z-10">
                <img
                src="speaker1.png" // Path to your ZX9 speaker image
                alt="ZX9 Speaker - Phenomenally built to deliver truly remarkable sound."
                // Explicit width for the large image
                // Explicit height for the large imag
                className="object-cover w-full h-full lg:translate-y-[97px]"
                />
            </div>

            {/* Text Content - Right Side */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 max-w-lg lg:w-1/2">
                {/* The main heading for the product highlight */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-6">
                ZX9 <br /> SPEAKER
                </h2>
                <p className="text-white text-opacity-80 text-base mb-10 max-w-sm">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                {/* Call to action button */}
                <Link
                href="/speakers/zx9" // Example link to the product page
                className="inline-block bg-black hover:bg-gray-800 transition-colors text-white text-sm font-semibold uppercase px-8 py-4 tracking-widest"
                >
                See Product
                </Link>
            </div>
            </article>
        </div>
        </section>
    );
    };

    export default ProductHighlightCard;