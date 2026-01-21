import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [message, setMessage] = useState({ text: '', type: '', show: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const loadEmailJS = () => {
      if (window.emailjs) {
        window.emailjs.init("80Zy2LkLQ835VX806");
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        script.onload = () => {
          window.emailjs.init("80Zy2LkLQ835VX806");
        };
        document.head.appendChild(script);
      }
    };

    loadEmailJS();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    const form = formRef.current;
    const formData = new FormData(form);
    const fullName = formData.get('fullName')?.trim() || '';
    const email = formData.get('email')?.trim() || '';
    const messageText = formData.get('message')?.trim() || '';

    if (!fullName || !email || !messageText) {
      setMessage({
        text: 'Please fill in all required fields.',
        type: 'error',
        show: true
      });
      if (messageRef.current) {
        messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      return;
    }

    setIsSubmitting(true);

    const emailData = {
      from_name: fullName,
      from_email: email,
      message: messageText,
      to_email: email,
      reply_to: email
    };

    try {
      if (!window.emailjs) {
        throw new Error('EmailJS not loaded');
      }

      await window.emailjs.send('service_g1yokdc', 'template_87gmk9x', emailData);
      
      setMessage({
        text: "Message sent successfully! We'll get back to you soon.",
        type: 'success',
        show: true
      });
      
      form.reset();
      
      if (messageRef.current) {
        messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      setTimeout(() => {
        setMessage(prev => ({ ...prev, show: false }));
      }, 5000);
    } catch (error) {
      setMessage({
        text: 'Failed to send message. Please try again later or contact us directly.',
        type: 'error',
        show: true
      });
      
      if (messageRef.current) {
        messageRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const messageClasses = message.type === 'success'
    ? 'mb-4 p-4 rounded-xl text-sm sm:text-base font-medium bg-green-100 text-green-800 border-2 border-green-300'
    : 'mb-4 p-4 rounded-xl text-sm sm:text-base font-medium bg-red-100 text-red-800 border-2 border-red-300';

  return (
    <section id="contact" className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight">Contact Us</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-stretch">
          <div className="fade-up hidden md:flex h-full">
            <div className="w-full h-full">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7579201/pexels-photo-7579201.jpeg" 
                  alt="Contact Us" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
          
          <div className="fade-up flex flex-col h-full">
            <div 
              ref={messageRef}
              id="contactMessage" 
              className={message.show ? `${messageClasses}` : 'hidden mb-4 p-4 rounded-xl text-sm sm:text-base font-medium'}
            >
              {message.text}
            </div>
            
            <form 
              ref={formRef}
              id="contactForm" 
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 flex-1 flex flex-col"
            >
              <div className="space-y-2">
                <label htmlFor="fullName" className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-700">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                  Full Name <span className="text-cyan-600">*</span>
                </label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all duration-300 text-sm sm:text-base bg-white hover:border-cyan-400"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Email <span className="text-cyan-600">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all duration-300 text-sm sm:text-base bg-white hover:border-cyan-400"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Message <span className="text-cyan-600">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all duration-300 text-sm sm:text-base bg-white hover:border-cyan-400 resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] mt-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
