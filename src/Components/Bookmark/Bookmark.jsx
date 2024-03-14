import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-slate-50 p-4 rounded-lg my-4">
      <p className="text-lg font-medium">{bookmark.title}</p>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
