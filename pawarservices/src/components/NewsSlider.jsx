import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function NewsSlider() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsRef = ref(db, "news/");
    onValue(newsRef, (snapshot) => {
      const data = snapshot.val() || {};
      setNews(Object.values(data));
    });
  }, []);

  // If no news, show a placeholder
  if (news.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-2xl p-8 text-center">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Stay Updated
          </h4>
          <p className="text-gray-600">
            Check back soon for the latest news and updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="news-swiper"
      >
        {news.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {item.text}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Just now
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
