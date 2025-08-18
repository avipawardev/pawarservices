import { useParams } from "react-router-dom";
import { services } from "../data/services";
import { motion } from "framer-motion";
import { generateServiceWhatsAppMessage } from "../utils/userUtils";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 text-lg">
            The service you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = generateServiceWhatsAppMessage(service.title);
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90"
          >
            {service.description}
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Details */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Service Details
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>{service.details}</p>
                  <p>
                    Our team of experts is here to help you with all your needs
                    related to this service.
                  </p>
                </div>
              </motion.div>

              {/* Required Documents Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8 mt-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Required Documents
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.requiredDocuments.map((document, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100"
                    >
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium">
                        {document}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    <div>
                      <p className="text-yellow-800 font-medium mb-1">
                        Important Note
                      </p>
                      <p className="text-yellow-700 text-sm">
                        Please ensure all documents are clear, legible, and
                        up-to-date. Original documents may be required for
                        verification.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100 sticky top-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Started Today
                </h3>
                <p className="text-gray-600 mb-6">
                  Ready to get started? Contact us now for a consultation.
                </p>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp Us
                </button>

                {/* Phone Contact */}
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Or call us directly:</p>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 font-semibold text-lg hover:text-blue-800 transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </div>

                {/* Service Info */}
                <div className="mt-6 p-4 bg-white rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Service Info
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Service ID:</span>
                      <span className="font-mono">{service.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Category:</span>
                      <span>Government Services</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Time:</span>
                      <span>3-5 Business Days</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
