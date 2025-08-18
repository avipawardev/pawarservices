import { useState } from "react";
import { ref, push, remove, onValue } from "firebase/database";
import { db } from "../firebase";
import { useEffect } from "react";

export default function Admin() {
  const [text, setText] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsRef = ref(db, "news/");
    onValue(newsRef, (snap) => {
      const data = snap.val() || {};
      setNews(Object.entries(data));
    });
  }, []);

  const addNews = () => {
    push(ref(db, "news/"), { text });
    setText("");
  };

  const deleteNews = (key) => {
    remove(ref(db, "news/" + key));
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="font-bold">Admin Panel</h1>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter news"
        className="border p-2"
      />
      <button onClick={addNews} className="bg-blue-600 text-white p-2 rounded">
        Add
      </button>
      <ul>
        {news.map(([key, item]) => (
          <li key={key} className="flex justify-between">
            {item.text}
            <button onClick={() => deleteNews(key)} className="text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
