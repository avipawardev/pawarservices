import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import NewsSlider from "../components/NewsSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center text-sm">
            <span className="text-yellow-500 mr-2">⚠️</span>
            <span className="text-gray-800 font-medium">
              Read Our COVID-19 Safety Guide
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 min-h-[80vh] flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          पवार आपल ऑनलाइन दुकान
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 tracking-wider uppercase">
            First Hill • Seattle, Washington
          </p>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
            REQUEST APPOINTMENT
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional and reliable services to meet all your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* News Slider Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Latest Updates
          </h3>
          <NewsSlider />
        </div>
      </div>
    </div>
  );
}
