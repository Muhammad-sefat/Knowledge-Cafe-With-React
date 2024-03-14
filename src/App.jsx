import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markReadingTime, setMarkReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    const newMarkBooks = [...bookmarks, blog];
    setBookmarks(newMarkBooks);
  };
  const handleReadingTime = (time) => {
    setMarkReadingTime(markReadingTime + time);
  };
  return (
    <>
      <div className="p-5 md:px-10 mx-auto">
        <Header></Header>
        <div className="flex flex-col md:flex-row gap-5 justify-between pt-5">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleReadingTime={handleReadingTime}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            markReadingTime={markReadingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
