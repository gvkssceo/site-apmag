import { useAutoScroll } from '../../../hooks/useAutoScroll';
import { useRef, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The tech platform made finding our dream home so easy! Virtual tours saved us so much time and the AI recommendations were spot-on.",
      author: "Ravi Singh",
      role: "Homebuyer",
      initials: "RS",
      quoteIconGradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      avatarGradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      roleIconColor: "text-cyan-600",
      textWeight: "font-normal"
    },
    {
      id: 2,
      quote: "Incredible service and innovative tools. The team is highly professional and made my investment journey seamless and rewarding!",
      author: "Priya Kumar",
      role: "Investor",
      initials: "PK",
      quoteIconGradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      avatarGradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      roleIconColor: "text-purple-600",
      textWeight: "font-medium"
    },
    {
      id: 3,
      quote: "Best real estate experience! The modern approach exceeded all expectations. Professional, efficient, and truly customer-focused service.",
      author: "Amit Mehta",
      role: "Property Buyer",
      initials: "AM",
      quoteIconGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      avatarGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      roleIconColor: "text-blue-600",
      textWeight: "font-medium"
    }
  ];

  const [currentIndex, goToIndex] = useAutoScroll(testimonials.length, 6000);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const translateX = -currentIndex * 100;
      containerRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentIndex]);

  const StarIcon = () => (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );

  const QuoteIcon = () => (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  );

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 bg-gradient-to-br from-cyan-50 via-blue-50/50 to-purple-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm text-cyan-700 px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-cyan-500/20 mb-4 md:mb-5 lg:mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
            </svg>
            Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
            What Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">Trusted by thousands of happy homeowners across India</p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div 
            ref={containerRef}
            id="testimonialsContainer" 
            className="flex transition-transform duration-700 ease-in-out"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-2 sm:px-3 md:px-3 lg:px-4">
                <div className="group bg-white/80 backdrop-blur-sm p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:-translate-y-2">
                  <div className={`w-12 h-12 ${testimonial.quoteIconGradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <QuoteIcon />
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4 sm:mb-5 md:mb-6">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <span className="ml-2 text-sm sm:text-base font-bold text-gray-700">5.0</span>
                  </div>
                  
                  <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-5 md:mb-6 lg:mb-7 leading-relaxed ${testimonial.textWeight}`}>
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 ${testimonial.avatarGradient} rounded-2xl flex items-center justify-center text-white ${testimonial.id === 1 ? 'font-bold' : 'font-semibold'} text-lg sm:text-xl md:text-2xl shadow-lg flex-shrink-0`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className={`${testimonial.id === 1 ? 'font-bold' : 'font-semibold'} text-gray-900 text-base sm:text-lg md:text-xl`}>{testimonial.author}</p>
                      <p className={`text-gray-600 text-sm sm:text-base flex items-center gap-1.5`}>
                        <svg className={`w-4 h-4 ${testimonial.roleIconColor}`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                        </svg>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center gap-3 mt-8 sm:mt-10 md:mt-12 lg:mt-14">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`testimonial-indicator w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'bg-cyan-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              data-index={index}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
