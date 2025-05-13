import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-5 text-white bg-[#222121]">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
