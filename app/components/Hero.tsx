import { useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const achievements = [
    {
      id: 1,
      image: '/achive2.jpg',
      alt: 'Achievement 1',
    },
    {
      id: 2,
      image: '/achive1.jpg',
      alt: 'Achievement 2',
    },
    {
      id: 3,
      image: '/achive3.jpg',
      alt: 'Achievement 3',
    },
  ];

  useEffect(() => {
    //slide the images
    const slider = document.querySelector('.slider') as HTMLElement;
    let slideIndex = 0;

    const slide = () => {
      slideIndex = (slideIndex + 1) % achievements.length;
      if (slider) {
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
      }
    };

    const interval = setInterval(slide, 3000);
    return () => clearInterval(interval);
  }, [achievements.length]);

  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-8">
        {/* Left Side: Slider */}
        <div className="w-full lg:w-1/2 overflow-hidden relative">
          <div className="slider flex transition-transform duration-500 ease-in-out">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="min-w-full">
                <Image
                  src={achievement.image}
                  alt={achievement.alt}
                  layout='responsive'
                  width={16}
                  height={9}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold">Join the Movement for Change</h1>
          <p className="py-6">Together, we can make a difference.</p>
          <button className="btn btn-primary">Join the Cause</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
