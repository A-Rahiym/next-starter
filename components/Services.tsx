import { Car, RefreshCcw, Ship, Search } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Car Sales',
    description: 'Quality new and used vehicles at competitive prices',
  },
  {
    icon: RefreshCcw,
    title: 'Trade-Ins',
    description: 'Get fair value for your current vehicle when upgrading',
  },
  {
    icon: Ship,
    title: 'International Shipping',
    description: 'We arrange shipping to international buyers',
  },
  {
    icon: Search,
    title: 'Vehicle Sourcing',
    description: "Looking for something specific? We'll find it for you",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive automotive solutions tailored to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-orange-50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}