import { NavLink } from "react-router";
import MovieBanner from "./MovieBanner";

function Navbar() {
  return (
    <div className="bg-blue-300 flex justify-between p-3">
      <div>
        <MovieBanner className="w-2 h-2 text-red-500" />
      </div>
      <div className="flex gap-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/favorites"}>Favorites</NavLink>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
