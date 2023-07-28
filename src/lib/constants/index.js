import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "companies",
    label: "Companies",
    path: "/companies",
    icon: <HiOutlineCube />,
  },
  {
    key: "createJob",
    label: "Create Job",
    path: "/createJob",
    icon: <HiOutlineCube />,
  },
  {
    key: "fetchBills",
    label: "Fetch Bills",
    path: "/fetchBills",
    icon: <HiOutlineCube />,
  },
  {
    key: "createChallan",
    label: "Create Challan",
    path: "/createChallan",
    icon: <HiOutlineCube />,
  },
  {
    key: "productionLogs",
    label: "Production Logs",
    path: "/",
    icon: <HiOutlineShoppingCart />,
  },
];
