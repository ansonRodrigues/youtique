import Navbar from "./Navbar";
import Home from "../../features/home/Home";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    // 1. flex-col and min-h-screen on the outer wrapper
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      {/* 2. 'grow' forces this section to expand and push the footer down */}
      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
