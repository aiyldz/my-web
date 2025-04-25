import { Outlet } from "react-router";
import "./MainLayout.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const MainLayout = () => {
  return (
    <body>
      <Header></Header>
      <hr></hr>
      <main>
        <Outlet />
      </main>
      <hr></hr>
      <Footer />
    </body>
  );
};

export default MainLayout;
