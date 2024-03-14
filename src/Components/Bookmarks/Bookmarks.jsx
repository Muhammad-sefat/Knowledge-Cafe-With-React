import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, markReadingTime }) => {
  return (
    <div className="md:w-1/3 bg-slate-200 rounded-lg p-5">
      <h2 className="text-2xl font-bold text-amber-500 text-center py-3">
        Marks As Read : <span>{markReadingTime}</span> min
      </h2>
      <h2 className="text-lg text-center font-semibold">
        Total BookMarks : {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  markReadingTime: PropTypes.func.isRequired,
};

export default Bookmarks;
