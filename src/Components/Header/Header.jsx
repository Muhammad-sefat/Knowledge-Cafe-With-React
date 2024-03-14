import profile from "../../assets/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between py-5 border-b-2">
      <h2 className="text-2xl text-amber-600 md:text-4xl font-bold">
        Knowledge Cafe
      </h2>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
