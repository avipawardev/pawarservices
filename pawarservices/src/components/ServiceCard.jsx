import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Card Image/Icon */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
        <div className="relative z-10 text-white text-6xl font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          {service.title.charAt(0)}
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-60"></div>
        <div className="absolute bottom-6 left-6 w-2 h-2 bg-white rounded-full opacity-40"></div>
      </div>

      {/* Card Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Action Button */}
        <Link
          to={`/service/${service.id}`}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group-hover:translate-x-2 transform transition-transform duration-300"
        >
          View Details
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-teal-600 group-hover:w-full transition-all duration-500"></div>
    </motion.div>
  );
}
