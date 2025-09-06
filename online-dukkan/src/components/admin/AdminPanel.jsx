import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ref, push, onValue } from 'firebase/database';
import { database } from '../../firebase/config';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [newsForm, setNewsForm] = useState({ title: '', content: '', image: null });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const usersRef = ref(database, 'users');
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setUsers(usersArray);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleNewsSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const newsRef = ref(database, 'news');
      const newsData = {
        title: newsForm.title,
        content: newsForm.content,
        createdAt: new Date().toISOString()
      };
      
      if (newsForm.image) {
        // Convert image to base64 for Firebase storage
        const reader = new FileReader();
        reader.onloadend = async () => {
          newsData.image = reader.result;
          await push(newsRef, newsData);
        };
        reader.readAsDataURL(newsForm.image);
      } else {
        await push(newsRef, newsData);
      }
      
      setNewsForm({ title: '', content: '', image: null });
      setImagePreview(null);
      alert('बातमी यशस्वीरित्या जोडली गेली!');
    } catch (error) {
      console.error('Error adding news:', error);
      alert('बातमी जोडताना त्रुटी आली!');
    }
    
    setLoading(false);
  };

  const openWhatsApp = (phone, name) => {
    const message = `नमस्कार ${name}, महाराष्ट्र सेटू पोर्टलकडून संदेश`;
    const url = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h1 
        className="text-3xl font-bold text-blue-700 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Admin Panel
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Add News Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">नवीन बातमी जोडा</h2>
          
          <form onSubmit={handleNewsSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                शीर्षक / Title
              </label>
              <input
                type="text"
                required
                value={newsForm.title}
                onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                मजकूर / Content
              </label>
              <textarea
                required
                rows="4"
                value={newsForm.content}
                onChange={(e) => setNewsForm({...newsForm, content: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                फोटो / Image (वैकल्पिक)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setNewsForm({...newsForm, image: file});
                    const reader = new FileReader();
                    reader.onloadend = () => setImagePreview(reader.result);
                    reader.readAsDataURL(file);
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {imagePreview && (
                <div className="mt-2">
                  <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover rounded-md" />
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {loading ? 'जोडत आहे...' : 'बातमी जोडा'}
            </button>
          </form>
        </motion.div>

        {/* Users List Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold mb-4">
            नोंदणीकृत वापरकर्ते ({users.length})
          </h2>
          
          <div className="max-h-96 overflow-y-auto space-y-3">
            {users.map((user) => (
              <div key={user.id} className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.phone}</p>
                    <p className="text-sm text-gray-500">
                      {user.village}, {user.taluka}, {user.district}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => openWhatsApp(user.phone, user.name)}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition"
                    title="WhatsApp पर संदेश भेजें"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel;