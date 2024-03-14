import PropTypes from "prop-types";
import profile from "../../assets/profile.png";
// import { FaBeer } from "react-icons/fa";
const Blog = ({ blog }) => {
  const { title, cover, author_name, author_image, reading_time, professior } =
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
                <h2>{author_name}</h2>
                <h2>12 feb 2021</h2>
              </div>
            </div>
            <div>
              <h3>{reading_time} min</h3>
            </div>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
