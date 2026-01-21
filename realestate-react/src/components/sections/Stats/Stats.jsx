import { useCounterAnimation } from '../../../hooks/useCounterAnimation';

const StatCard = ({ target, label, gradientClasses, rotationClass }) => {
  const [count, elementRef] = useCounterAnimation(target);

  return (
    <div className={`stats-card rounded-2xl p-3 sm:p-4 md:p-5 lg:p-5 xl:p-6 text-center card-zoom transform ${rotationClass}`}>
      <div 
        ref={elementRef}
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold ${gradientClasses} bg-clip-text text-transparent mb-2 sm:mb-3 counter`}
        data-target={target}
      >
        {count.toLocaleString()}
      </div>
      <div className="text-gray-600 font-normal text-xs sm:text-sm md:text-base">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-3 md:gap-5 lg:gap-7 xl:gap-8">
          <StatCard
            target={25}
            label="Years Experience"
            gradientClasses="bg-gradient-to-r from-cyan-600 to-blue-600"
            rotationClass="rotate-1"
          />
          <StatCard
            target={500}
            label="Projects"
            gradientClasses="bg-gradient-to-r from-blue-600 to-purple-600"
            rotationClass="-rotate-1"
          />
          <StatCard
            target={10000}
            label="Happy Clients"
            gradientClasses="bg-gradient-to-r from-purple-600 to-pink-600"
            rotationClass="rotate-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
