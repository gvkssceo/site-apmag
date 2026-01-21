import { smoothScrollTo } from '../../../utils/smoothScroll';

const Hero = () => {
  const handleCTAClick = (e, targetId) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <section id="hero-comp" className="relative hero-section flex items-center overflow-hidden pt-6 sm:pt-6 md:pt-8 lg:pt-10 pb-3 sm:pb-4 md:pb-5 lg:pb-6 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20">
      <div className="absolute inset-0 tech-gradient hero-pattern"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-6 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start md:items-stretch">
          <div className="fade-up space-y-4 sm:space-y-5 md:space-y-6 flex flex-col pt-8 sm:pt-8 md:pt-0 lg:pt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6">
              Buy Homes at the Right Price
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8">
              Verified listings with real locality price insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a 
                href="#ventures" 
                onClick={(e) => handleCTAClick(e, '#ventures')}
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 sm:px-6 md:px-7 lg:px-9 py-2.5 sm:py-3 md:py-3.5 lg:py-4.5 rounded-xl text-sm sm:text-base md:text-base lg:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-center"
              >
                Search Verified Homes
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleCTAClick(e, '#about')}
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-cyan-500 text-gray-700 hover:text-cyan-600 px-5 sm:px-6 md:px-7 lg:px-9 py-2.5 sm:py-3 md:py-3.5 lg:py-4.5 rounded-xl text-sm sm:text-base md:text-base lg:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                How It Works
              </a>
            </div>
            
            <div className="mt-6 sm:mt-8 md:mt-10 p-4 sm:p-5 md:p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Find Your Home</h3>
              
              <div>
                <label htmlFor="heroLocation" className="sr-only">Location</label>
                <input 
                  type="text" 
                  id="heroLocation" 
                  placeholder="Enter city or locality" 
                  className="w-full px-4 py-2.5 sm:py-3 md:py-3 lg:py-3 border-2 border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all duration-300 text-sm sm:text-base md:text-base bg-white hover:border-cyan-400"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="heroPropertyType" className="sr-only">Property Type</label>
                  <select 
                    id="heroPropertyType" 
                    className="w-full px-4 py-2.5 sm:py-3 md:py-3 lg:py-3 border-2 border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all duration-300 text-sm sm:text-base md:text-base bg-white cursor-pointer hover:border-cyan-400"
                  >
                    <option value="">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="heroBudget" className="sr-only">Budget</label>
                  <select 
                    id="heroBudget" 
                    className="w-full px-4 py-2.5 sm:py-3 md:py-3 lg:py-3 border-2 border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all duration-300 text-sm sm:text-base md:text-base bg-white cursor-pointer hover:border-cyan-400"
                  >
                    <option value="">Budget Range</option>
                    <option value="0-50">₹0 - 50 Lakhs</option>
                    <option value="50-100">₹50 Lakhs - 1 Cr</option>
                    <option value="100-200">₹1 Cr - 2 Cr</option>
                    <option value="200-500">₹2 Cr - 5 Cr</option>
                    <option value="500+">₹5 Cr+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex h-full">
            <div className="relative w-full h-full">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl opacity-20 blur-2xl"></div>
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" 
                  alt="Verified Property" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs font-bold text-white">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
