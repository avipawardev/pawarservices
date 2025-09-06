import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase/config';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const newsRef = ref(database, 'news');
    const unsubscribe = onValue(newsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const newsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        })).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setNews(newsArray);
      } else {
        setNews([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-6xl mb-4">📰</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            अद्याप कोणतीही बातमी नाही
          </h3>
          <p className="text-gray-500">नवीन अपडेट्ससाठी नंतर तपासा</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          ताज्या बातम्या
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {item.image && (
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}
            
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-500 font-medium">
                  {new Date(item.createdAt).toLocaleDateString('hi-IN')}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {item.content}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {new Date(item.createdAt).toLocaleTimeString('hi-IN', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                  <div className="flex items-center text-blue-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium">वाचा</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;