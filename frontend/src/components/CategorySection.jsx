import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Briefcase, Code, PenTool, Database, Megaphone, Monitor, Globe, BarChart, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  { name: "Frontend Developer", icon: Code },
  { name: "Backend Developer", icon: Database },
  { name: "Graphic Designer", icon: PenTool },
  { name: "FullStack Developer", icon: Globe },
  { name: "Data Analyst", icon: BarChart },
  { name: "UI/UX Designer", icon: Monitor },
  { name: "Project Manager", icon: Briefcase },
  { name: "Digital Marketer", icon: Megaphone },
  { name: "DevOps Engineer", icon: Code },
  { name: "Mobile App Developer", icon: Monitor },
  { name: "Data Scientist", icon: Database },
  { name: "Product Manager", icon: Briefcase },
];

const CategorySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000 })]);

  return (
    <div className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Browse by Category</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Find the job that fits your skills and passions. Explore diverse opportunities across various fields.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 py-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_25%] pl-4 min-w-0">
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full group/card flex flex-col items-center justify-center text-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center group-hover/card:bg-black group-hover/card:text-white transition-colors duration-300">
                        <Icon className="w-7 h-7 text-gray-600 group-hover/card:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-800 group-hover/card:text-black transition-colors duration-300">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-500 hover:text-black hover:scale-110 active:scale-95 transition-all duration-200 z-10 hidden md:flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => emblaApi && emblaApi.scrollNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-500 hover:text-black hover:scale-110 active:scale-95 transition-all duration-200 z-10 hidden md:flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;