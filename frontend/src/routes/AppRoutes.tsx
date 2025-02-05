import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "../layouts/PublicLayout";
import Home from "../pages/public/Home";
import Contact from "../pages/public/Contact";
import Shop from "../pages/public/Shop";
import About from "../pages/public/About";
import { ClientLayout } from "../layouts/ClientLayout";
import Dashboard from "../pages/client/Dashboard";
import Orders from "../pages/admin/Orders";
import { Address } from "../pages/client/Address";
import AccountInfo from "../pages/client/AccountInfo";
import ChangePassword from "../pages/client/ChangePassword";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import OrdersHistory from "../pages/client/OrdersHistory";
import ReturnOrders from "../pages/admin/ReturnOrders";
import Statistics from "../pages/admin/Statistics";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      {/* client routes */}
      <Route path="/client" element={<ClientLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<OrdersHistory />} />
        <Route path="address" element={<Address />} />
        <Route path="account-info" element={<AccountInfo />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="Return orders" element={<ReturnOrders />} />
        <Route path="Stats" element={<Statistics />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
