const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      ),
      title: "Verified Market Prices",
      description: "Compare similar properties in your area to see if the asking price is fair. Based on verified sales data, not estimates.",
      gradientClasses: "bg-gradient-to-br from-cyan-500 to-blue-600",
      borderHoverClass: "hover:border-cyan-300"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      ),
      title: "Full Property Details",
      description: "View complete specifications, neighborhood info, and infrastructure details before scheduling a visit. Save time on unsuitable properties.",
      gradientClasses: "bg-gradient-to-br from-blue-500 to-purple-600",
      borderHoverClass: "hover:border-blue-300"
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
        </svg>
      ),
      title: "Alerts on Your Terms",
      description: "Get notified instantly when properties matching your criteria become available or prices drop. Never miss an opportunity.",
      gradientClasses: "bg-gradient-to-br from-purple-500 to-pink-600",
      borderHoverClass: "hover:border-purple-300"
    }
  ];

  return (
    <section id="about" className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30 relative overflow-hidden w-full">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm text-cyan-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-cyan-500/20 mb-4 sm:mb-5 md:mb-6">
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Why Choose Us
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight max-w-4xl">
              Buy With Confidence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed mb-10 sm:mb-12 md:mb-14 max-w-3xl">Make smarter decisions with verified pricing, complete property details, and real market insights. Reduce uncertainty and avoid overpaying.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 mt-10">
              {features.map((feature, index) => (
                <div key={index} className={`group flex flex-col items-start gap-3 sm:gap-4 p-5 sm:p-6 md:p-7 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border-2 border-gray-200 ${feature.borderHoverClass}`}>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${feature.gradientClasses} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1 w-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2 leading-tight">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
