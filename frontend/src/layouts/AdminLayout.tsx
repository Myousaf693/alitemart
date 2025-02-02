import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar role="admin" />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
