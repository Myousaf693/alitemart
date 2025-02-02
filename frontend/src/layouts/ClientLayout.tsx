import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

export const ClientLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="client" />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
