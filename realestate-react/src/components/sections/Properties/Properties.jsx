const Properties = () => {
  const properties = [
    {
      id: 1,
      name: "Hiranandani Residency",
      location: "Powai, Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      imageAlt: "Hiranandani Residency",
      badge: {
        text: "Verified Price",
        bgClass: "bg-cyan-600"
      },
      specs: {
        bhk: "3 BHK",
        area: "2,850 sq ft",
        pricePerSqft: "₹20,351/sq ft"
      },
      price: "₹5.8 Cr",
      pricePerSqftFull: "₹20,351 per sq ft",
      viewDetailsColor: "text-cyan-600 group-hover:text-cyan-700",
      imageOrder: "",
      contentOrder: "",
      gap: "gap-6 sm:gap-8 md:gap-10 lg:gap-12"
    },
    {
      id: 2,
      name: "Cyber City Towers",
      location: "Gurgaon, Haryana",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      imageAlt: "Cyber City Towers",
      badge: {
        text: "High Demand Area",
        bgClass: "bg-purple-600"
      },
      specs: {
        bhk: "2 BHK",
        area: "1,800 sq ft",
        pricePerSqft: "₹23,333/sq ft"
      },
      price: "₹4.2 Cr",
      pricePerSqftFull: "₹23,333 per sq ft",
      viewDetailsColor: "text-purple-600 group-hover:text-purple-700",
      imageOrder: "md:order-2",
      contentOrder: "md:order-1",
      gap: "gap-4 sm:gap-5 md:gap-6 lg:gap-8",
      contentPadding: "md:pl-6 lg:pl-8"
    },
    {
      id: 3,
      name: "Whitefield Elite",
      location: "Bangalore, Karnataka",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      imageAlt: "Whitefield Elite",
      badge: {
        text: "Below Market Avg",
        bgClass: "bg-blue-600"
      },
      specs: {
        bhk: "4 BHK",
        area: "3,200 sq ft",
        pricePerSqft: "₹20,313/sq ft"
      },
      price: "₹6.5 Cr",
      pricePerSqftFull: "₹20,313 per sq ft",
      viewDetailsColor: "text-blue-600 group-hover:text-blue-700",
      imageOrder: "",
      contentOrder: "",
      gap: "gap-6 sm:gap-8 md:gap-10 lg:gap-12"
    }
  ];

  return (
    <section id="ventures" className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">Featured Properties</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed">Verified listings with price intelligence and market data</p>
        </div>
        
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
          {properties.map((property) => (
            <a key={property.id} href="#" className="block property-card group">
              <div className={`grid md:grid-cols-2 ${property.gap} md:items-stretch bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 transition-all duration-300`}>
                <div className={`relative overflow-hidden ${property.imageOrder} h-56 sm:h-64 md:h-full`}>
                  <img 
                    src={property.image} 
                    alt={property.imageAlt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${property.badge.bgClass} text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium`}>
                      {property.badge.text}
                    </span>
                  </div>
                </div>
                <div className={`p-6 sm:p-8 md:p-10 ${property.contentPadding || ''} flex flex-col justify-between ${property.contentOrder}`}>
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">{property.name}</h3>
                    <p className="text-sm sm:text-base text-gray-500 font-normal mb-4 sm:mb-5 flex items-center">
                      <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {property.location}
                    </p>
                    <div className="flex items-center gap-4 sm:gap-6 mb-5 sm:mb-6 text-sm sm:text-base text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        <span className="font-normal">{property.specs.bhk}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                        </svg>
                        <span className={property.id === 2 ? "font-medium" : "font-normal"}>{property.specs.area}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-5m-6 5h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className={property.id === 2 ? "font-medium" : "font-normal"}>{property.specs.pricePerSqft}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{property.price}</div>
                    <div className="text-sm sm:text-base text-gray-500 font-normal mb-4 sm:mb-5">{property.pricePerSqftFull}</div>
                    <div className={`text-sm sm:text-base font-medium ${property.viewDetailsColor} transition-colors`}>View Details →</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
