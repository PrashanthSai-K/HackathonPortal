import React, { useEffect, useState } from "react";
import { Menubar } from "primereact/menubar";
import Logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router";
import "../../../css/style-login.css";
import axios from "axios";
import { userGetRequest } from "../exports";
import { useAuth } from "../../../AuthContext";
import { use } from "react";

export default function Navbar() {

  const { user, loggedIn, getUser } = useAuth();
  const navigate = useNavigate();

  const itemtemplate = (item) => (
    loggedIn ? (
      user && user.role == item.role && (
        <Link
          to={`${item.link}`}
          className={`flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer ${item.isSubmenu ? "min-w-[150px] bg-white" : ""
            }`}
        >
          <span>{item.label}</span>
        </Link>
      )
    ) : (
      item.role == 'all' && (
        <Link
          to={`${item.link}`}
          className={`flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer ${item.isSubmenu ? "min-w-[150px] bg-white" : ""
            }`}
        >
          <span>{item.label}</span>
        </Link>
      )
    )
  );


  const dropDownItemTemplate = (item) => (
    loggedIn ? (
      user && user.role == item.role && (
        <a className="flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer">
          <span>{item.label}</span>
          <span
            className="pi pi-angle-down transition-transform"
            onClick={(e) => {
              e.target.classList.toggle("rotate-180");
            }}
          >
            {" "}
          </span>
        </a>
      )
    ) : (
      item.role == 'all' && (
        <a className="flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer">
          <span>{item.label}</span>
          <span
            className="pi pi-angle-down transition-transform"
            onClick={(e) => {
              e.target.classList.toggle("rotate-180");
            }}
          >
            {" "}
          </span>
        </a>
      )
    )
  );

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    }
  };

  const buttonTemplate = () => (
    <Link
      to={user ? "" : "/login"}
      className="py-1 px-2 bg-violet-950 text-white rounded-lg ml-3 md:ml-0"
      onClick={() => {
        user && handleLogout();
      }}
    >
      {user ? "Logout" : "Login"}
    </Link>
  );


  const navItems = [
    {
      label: "Home",
      icon: "pi pi-home",
      role: "all",
      link: "/",
      template: itemtemplate,
    },
    {
      label: "Problem Statement",
      icon: "pi pi-database",
      role: "all",
      link: "/problems",
      template: itemtemplate,
    },
    {
      label: "Info",
      icon: "pi pi-info-circle",
      role: "all",
      link: "/info",
      items: [
        {
          label: "About",
          icon: "pi pi-info-circle",
          role: "all",
          link: "/#aboutus",
          template: itemtemplate,
          isSubmenu: true,
        },
        {
          label: "Guidelines",
          icon: "pi pi-list-check",
          role: "all",
          link: "/guidelines",
          template: itemtemplate,
          isSubmenu: true,
        },
        {
          label: "Contact Us",
          icon: "pi pi-address-book",
          role: "all",
          link: "/contact",
          template: itemtemplate,
          isSubmenu: true,
        },
      ],
      template: dropDownItemTemplate,
    },
    {
      label: "Home",
      icon: "pi pi-home",
      role: "user",
      link: "/",
      template: itemtemplate,
    },
    {
      label: "Problem Statement",
      icon: "pi pi-database",
      role: "user",
      link: "/problems",
      template: itemtemplate,
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      role: "user",
      link: "/profile",
      template: itemtemplate,
    },
    {
      label: "Info",
      icon: "pi pi-info-circle",
      role: "user",
      link: "/info",
      items: [
        {
          label: "About",
          icon: "pi pi-info-circle",
          role: "user",
          link: "/about",
          template: itemtemplate,
          isSubmenu: true,
        },
        {
          label: "Guidelines",
          icon: "pi pi-list-check",
          role: "user",
          link: "/guidelines",
          template: itemtemplate,
          isSubmenu: true,
        },
        {
          label: "Contact Us",
          icon: "pi pi-address-book",
          role: "user",
          link: "/contact",
          template: itemtemplate,
          isSubmenu: true,
        },
      ],
      template: dropDownItemTemplate,
    },
    {
      label: "Final Participant",
      icon: "pi pi-database",
      role: "admin",
      link: "/finalist",
      template: itemtemplate,
    },
    // {
    //   label: "User",
    //   role: "admin",
    //   icon: "pi pi-database",
    //   link: "/userManagement",
    //   template: itemtemplate,
    // },
    {
      label: "Institute",
      role: "admin",
      icon: "pi pi-database",
      link: "/institute-manage",
      template: itemtemplate,
    },
    {
      label: "Problem Statements",
      role: "admin",
      icon: "pi pi-database",
      link: "/problems-manage",
      template: itemtemplate,
    },
    {
      label: "Login / Register",
      icon: "pi pi-button",
      role: "user",
      link: "/login",
      template: buttonTemplate,
    }
  ]



  return (
    <nav className="flex w-full bg-white items-center h-20 fixed z-10 ">
      <div className="w-2/3 md:w-1/3 flex items-center gap-2">
        <img className="w-15 h-14" src={Logo} alt="Logo Image" />
        <h3>TANSCHE</h3>
        <h4></h4>
      </div>

      <Menubar
        className="flex bg-white h-full w-1/3 md:w-2/3 justify-end"
        model={navItems}
      />
    </nav>
  );
}
