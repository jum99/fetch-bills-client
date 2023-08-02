import {
  HiOutlineCube,
  HiOutlineShoppingCart,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "companies",
    label: "Companies",
    path: "/layout/companies",
    icon: <HiOutlineCube />,
  },
  {
    key: "createJob",
    label: "Create Job",
    path: "/layout/createJob",
    icon: <HiOutlineCube />,
  },
  {
    key: "fetchBills",
    label: "Fetch Bills",
    path: "/layout/fetchBills",
    icon: <HiOutlineCube />,
  },
  {
    key: "createChallan",
    label: "Create Challan",
    path: "/layout/createChallan",
    icon: <HiOutlineCube />,
  },
  {
    key: "productionLogs",
    label: "Production Logs",
    path: "/layout/productionLogs",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "makeAdmin",
    label: "Make Admin",
    path: "/layout/makeAdmin",
    icon: <HiOutlineShoppingCart />,
  },
];
