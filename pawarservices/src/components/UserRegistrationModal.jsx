import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ref, push, set, serverTimestamp } from 'firebase/database';
import { db } from '../firebase';

export default function UserRegistrationModal() {
  const [isOpen, setIsOpen] => useState(false);
  const [formData, setFormData] = useState({
    name: '',
    village: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Don't show modal automatically - only when explicitly opened
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Expose openModal function globally so other components can use it
  useEffect(() => {
    window.openUserRegistrationModal = openModal;
    return () => {
      delete window.openUserRegistrationModal;
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.village.trim() || !formData.mobile.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.mobile.length < 10) {
      setError('Please enter a valid mobile number');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Create a new user reference in Realtime Database
      const usersRef = ref(db, 'users');
      const newUserRef = push(usersRef);
      
      // Save to Firebase Realtime Database
      await set(newUserRef, {
        name: formData.name.trim(),
        village: formData.village.trim(),
        mobile: formData.mobile.trim(),
        createdAt: serverTimestamp()
      });

      // Save to localStorage
      const userData = {
        id: newUserRef.key,
        name: formData.name.trim(),
        village: formData.village.trim(),
        mobile: formData.mobile.trim(),
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('userData', JSON.stringify(userData));
      
      // Close modal
      setIsOpen(false);
      
      // Show success message
      alert('Thank you! Your details have been saved. You can now send WhatsApp messages with your information.');
    } catch (err) {
      console.error('Error saving user data:', err);
      setError('Failed to save data. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Share Your Details</h2>
              <p className="text-gray-600">Provide your information to get personalized WhatsApp messages</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Village Input */}
              <div>
                <label htmlFor="village" className="block text-sm font-medium text-gray-700 mb-2">
                  Village/City *
                </label>
                <input
                  type="text"
                  id="village"
                  name="village"
                  value={formData.village}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your village or city"
                  required
                />
              </div>

              {/* Mobile Input */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-xl p-4"
                >
                  <p className="text-red-600 text-sm">{error}</p>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Saving...
                    </div>
                  ) : (
                    'Save & Continue'
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={handleSkip}
                  className="w-full bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  Skip for Now
                </button>
              </div>
            </form>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
