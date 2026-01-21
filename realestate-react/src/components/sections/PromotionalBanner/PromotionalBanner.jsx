const PromotionalBanner = () => {
  const bannerItems = [
    "Exclusive Offers Coming in March - Free CMA & Reduced Commission Rates",
    "Spring Sale: Get Free Professional Staging Consultation - Limited Time",
    "Guaranteed Cash Offers Available - Buy Before You Sell Program",
    "Premium Properties at Special Rates - Book Your Site Visit Today",
    "Home Improvement Incentives: ₹50K Gift Cards on Property Purchase"
  ];

  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white overflow-hidden shadow-md -mb-20 sm:mt-20 md:mt-20 lg:mt-20 relative z-10" style={{marginTop:"70px"}}>
      <div className="promo-banner-container flex items-center">
        <div className="promo-banner-content flex items-center gap-8 sm:gap-12 md:gap-16 whitespace-nowrap py-2 sm:py-2.5 md:py-3">
          {bannerItems.map((item, index) => (
            <div key={`original-${index}`} className="flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-xs sm:text-sm md:text-base font-medium">{item}</span>
            </div>
          ))}
          {bannerItems.slice(0, 2).map((item, index) => (
            <div key={`duplicate-${index}`} className="flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-xs sm:text-sm md:text-base font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
