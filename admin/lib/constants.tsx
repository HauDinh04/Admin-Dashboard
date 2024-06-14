import {
    LayoutDashboard,
    Shapes,
    ShoppingBag,
    Tag,
    UsersRound,
  } from "lucide-react";
  
  export const navLinks = [
    {
      url: "/",
      icon: <LayoutDashboard />,
      label: "Bảng Điều Khiển",
    },
    {
      url: "/collections",
      icon: <Shapes />,
      label: "Danh Mục",
    },
    {
      url: "/products",
      icon: <Tag />,
      label: "Sản Phẩm",
    },
    {
      url: "/orders",
      icon: <ShoppingBag />,
      label: "Orders",
    },
    {
      url: "/customers",
      icon: <UsersRound />,
      label: "Khách Hàng",
    },
  ];