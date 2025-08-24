"use client";

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Aminu Ibrahim',
    location: 'Kaduna',
    content: 'Excellent service! I bought a Toyota Camry from MANBEE_Cars and the experience was fantastic. Usman and his team were very professional and transparent throughout the process.',
    rating: 5,
    vehicle: 'Toyota Camry 2019'
  },
  {
    id: 2,
    name: 'Fatima Umar',
    location: 'Abuja',
    content: 'I highly recommend MANBEE_Cars. They helped me find the perfect Honda Accord within my budget. The trade-in value for my old car was very fair.',
    rating: 5,
    vehicle: 'Honda Accord 2020'
  },
  {
    id: 3,
    name: 'Suleiman Mohammed',
    location: 'Zaria',
    content: 'Great experience buying from a local dealer who understands the market. Same-day delivery as promised, and the vehicle was exactly as described.',
    rating: 5,
    vehicle: 'Lexus RX 350'
  },
  {
    id: 4,
    name: 'Maryam Aliyu',
    location: 'Kano',
    content: 'Professional service from start to finish. MANBEE_Cars arranged international shipping for my vehicle purchase, and everything went smoothly.',
    rating: 5,
    vehicle: 'Mercedes-Benz C300'
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Northern Nigeria
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "{currentTestimonial.content}"
            </blockquote>

            <div className="text-center">
              <cite className="not-italic">
                <div className="font-bold text-gray-900 text-lg mb-1">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-600 mb-2">{currentTestimonial.location}</div>
                <div className="text-sm text-orange-600 font-medium">
                  Purchased: {currentTestimonial.vehicle}
                </div>
              </cite>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="hover:bg-orange-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="hover:bg-orange-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}