'use client';

import Image from 'next/image';
import Hero from './components/Hero';

// pages/index.js
export default function Home() {
  const causes = [
    {
      id: 1,
      image: '/water.jpeg',
      title: 'Clean Water for All',
      description: 'Help provide clean water to communities in need.',
    },
    {
      id: 2,
      image: '/education.jpeg',
      title: 'Education for Children',
      description: 'Support education programs for underprivileged kids.',
    },
    {
      id: 3,
      image: '/food.jpeg',
      title: 'End Hunger',
      description: 'Donate to feed families facing food insecurity.',
    },
    {
      id: 4,
      image: '/environment.jpeg',
      title: 'Protect the Environment',
      description: 'Join efforts to combat climate change.',
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <Hero />

      {/* Cards Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Causes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {causes.map((cause) => (
            <div key={cause.id} className="card bg-base-100 shadow-xl">
              <figure>
                <Image
                  src={cause.image}
                  alt={cause.title}
                  priority
                  quality={100}
                  layout='responsive'
                  width={16}
                  height={9}
                  className='hover:scale-105 transform transition-transform duration-500 ease-in-out rounded-t-lg'
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{cause.title}</h3>
                <p>{cause.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
