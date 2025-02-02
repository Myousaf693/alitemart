import { Link } from "react-router-dom";

interface SidebarProps {
  role: "admin" | "client";
}
const Sidebar = ({ role }: SidebarProps) => {
  const links =
    role === "admin"
      ? [
          { name: "Dashboard", path: "/admin/dashboard" },
          { name: "Orders", path: "/admin/orders" },
          { name: "Users", path: "/admin/users" },
          { name: "Products", path: "/admin/products" },
        ]
      : [
          { name: "Dashboard", path: "/client/dashboard" },
          { name: "Orders", path: "/client/orders" },
          { name: "Address", path: "/client/address" },
          { name: "Account Info", path: "/client/account-info" },
          { name: "Change Password", path: "/client/change-password" },
        ];
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 min-h-screen">
      <ul>
        {links.map((link) => (
          <li key={link.name} className="p-2 hover:bg-gray-700">
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
