import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const UserRegistration = ({ onClose }) => {
  const { registerUser } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    village: '',
    taluka: '',
    district: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const success = await registerUser(formData);
    if (success) {
      window.location.reload();
    } else {
      alert('Registration failed. Please try again.');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="max-w-md w-full bg-white rounded-xl shadow-xl p-6 relative"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
        
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-2">
          नोंदणी करा / Register
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          बेहतर सेवेसाठी नोंदणी करा (वैकल्पिक)
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              नाव / Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              मोबाइल नंबर / Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              pattern="[0-9]{10}"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              गाव / Village *
            </label>
            <input
              type="text"
              name="village"
              required
              value={formData.village}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              तालुका / Taluka *
            </label>
            <input
              type="text"
              name="taluka"
              required
              value={formData.taluka}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              जिल्हा / District *
            </label>
            <input
              type="text"
              name="district"
              required
              value={formData.district}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-3">
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'नोंदणी करत आहे...' : 'नोंदणी करा / Register'}
            </motion.button>
            
            <button
              type="button"
              onClick={onClose}
              className="w-full text-gray-500 py-2 px-4 rounded-lg hover:bg-gray-100 transition"
            >
              नंतर करा / Skip for now
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default UserRegistration;