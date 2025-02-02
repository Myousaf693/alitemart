import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
