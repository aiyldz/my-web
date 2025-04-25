import { Outlet } from "react-router";
import "./MainLayout.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const MainLayout = () => {
  return (
    <body>
      <Header></Header>
      <hr className="sm:w-[100%]  md:w-[100%]"></hr>
      <main>
        <Outlet />
      </main>
      <hr className="sm:w-[100%] md:w-[100%]"></hr>
      <Footer />
    </body>
  );
};

export default MainLayout;
