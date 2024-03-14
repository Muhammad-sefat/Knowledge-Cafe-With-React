import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
  const { title, cover, author_name, author_image, reading_time, hashtags } =
    blog;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-3 rounded-lg">
        <figure>
          <img className="rounded-lg" src={cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img className="w-16 rounded-full" src={author_image} alt="" />
              <div>
                <h2 className="font-medium">{author_name}</h2>
                <h2>12 feb 2021</h2>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <h3>{reading_time} min</h3>
              <button
                onClick={() => handleAddToBookmark(blog)}
                className="text-2xl text-amber-700"
              >
                <FaBookmark></FaBookmark>
              </button>
            </div>
          </div>
          <p className="py-1 text-2xl font-medium">{title}</p>
          <p className="pb-1 space-x-2">
            {hashtags.map((hash, idx) => (
              <span key={idx}>
                <a>#{hash}</a>
              </span>
            ))}
          </p>
          <div className="card-actions">
            <button
              onClick={() => handleReadingTime(reading_time)}
              className="px-3 py-2 bg-amber-500 rounded-lg"
            >
              Marks Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
export default Blog;
