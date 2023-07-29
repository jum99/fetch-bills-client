import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/constants";
import useAuth from "../../hooks/useAuth";
import { HiOutlineViewGrid } from "react-icons/hi";

const linkClass =
  "flex items-center gap-2 px-3 py-2 hover:bg-white hover:text-black hover:no-underline active:bg-white rounded-sm ";

export default function Sidebar() {
  const { user, admin } = useAuth();

  return (
    <div
      style={{ backgroundColor: "rgb(118 80 59)" }}
      className=" w-60 px-2 flex flex-col"
    >
      <div className="flex items-center justify-center	gap-2 px-1">
        <img
          className="rounded-b-lg h-20 w-20"
          src="https://www.msmemart.com/upload/memberprofiles/15879627335402705.jpg"
          alt=""
        />
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
       {
         user?.email && admin ? <>
         {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
         </> : <>
         <Link className="flex items-center gap-2 px-3 py-2 hover:bg-white hover:text-black hover:no-underline active:bg-white text-white rounded-sm" to='/layout'><HiOutlineViewGrid /> Dashboard</Link>
         </>
       }

        

      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-neutral-700">
        <div className="flex items-center mb-5">
          <img
            className="rounded-full h-8 w-8 ml-1.5"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt=""
          />
          <p className="text-white ml-3.5 text-xs">
            Hi, <span className="font-bold">Bhavin Desai</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? "bg-white text-black" : "text-white",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
