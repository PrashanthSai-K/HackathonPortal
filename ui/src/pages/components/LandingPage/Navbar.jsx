import React from "react";
import { Menubar } from "primereact/menubar";
import Logo from "../../../assets/logo.png";
import { useLocation } from "react-router";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router";
import "../../../css/style-login.css";
import { useAuth } from "../../../AuthContext";
import Guidelines from "../../../assets/HACKATHON_GUIDELINES[1].pdf";
import { userPostRequest } from "../exports";

export default function Navbar() {
  const { user, loggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenPDF = () => {
    window.open(Guidelines, "_blank");
  };

  const itemtemplate = (item) =>
    loggedIn
      ? user.role == item.role &&
      (item.isExternal ? (
        <a
          className={`flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer ${item.isSubmenu ? "min-w-[150px] bg-white" : ""
            }`}
          onClick={() => handleOpenPDF()}
          href={Guidelines}
        >
          Guidelines
        </a>
      ) : (
        <Link
          to={`${item.link}`}
          className={`flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer ${item.link === location.pathname ||
            (location.pathname === "/" && item.label === "Home")
            ? "bg-gray-200"
            : ""
            } ${item.isSubmenu ? "min-w-[150px] bg-white" : ""}`}
        >
          <span>{item.label}</span>
        </Link>
      ))
      : item.role == "all" && (
        <Link
          to={`${item.link}`}
          className={`flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer  ${item.link === location.pathname ||
            (location.pathname === "/" && item.label === "Home")
            ? "bg-gray-200"
            : ""
            } ${item.isSubmenu ? "min-w-[150px] bg-white" : ""}`}
        >
          <span>{item.label}</span>
        </Link>
      );

  const dropDownItemTemplate = (item) =>
    loggedIn
      ? user &&
      user.role == item.role && (
        <a
          href={`/${item.link}`}
          className="flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer"
        >
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
      : item.role == "all" && (
        <a
          href={`/${item.link}`}
          className="flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer"
        >
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
      );

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      await updateLogout();
      localStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    }
  };

  const updateLogout = async () => {
    try {
      const response = await userPostRequest("/updateLogout");
  
      if (response.status === 201) {
        console.log(response.data.message); 
      } else {
        console.log("Failed to update logout:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating logout information:", error);
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
      link: "/#home",
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
      label: "Final Participants",
      icon: "pi pi-database",
      role: "all",
      link: "/finalist",
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
          link: "/#guidelines",
          template: itemtemplate,
          isSubmenu: true,
        },
        {
          label: "Contact Us",
          icon: "pi pi-address-book",
          role: "all",
          link: "/#contactus",
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
      link: "/#home",
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
      label: "Final Participants",
      icon: "pi pi-database",
      role: "user",
      link: "/userfinalist",
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
          link: "/#aboutus",
          template: itemtemplate,
          isSubmenu: true,
        },
        {
          label: "Guidelines",
          icon: "pi pi-list-check",
          role: "user",
          link: Guidelines,
          isExternal: true,
          template: itemtemplate,
          isSubmenu: true,
        },
        {
          label: "Contact Us",
          icon: "pi pi-address-book",
          role: "user",
          link: "/#contactus",
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
    },
  ];

  return (
    <nav className="flex w-full bg-white items-center h-20 fixed z-50">
      <div className="w-2/3 md:w-1/3 flex ">
        <Link className="flex justify-center items-center gap-2" to={"/"}>
          <img className="w-15 h-14" src={Logo} alt="Logo Image" />
          <h3>TANSCHE</h3>
        </Link>
      </div>

      <Menubar
        className="flex bg-white h-full w-1/3 md:w-2/3 mr-3 justify-end"
        model={navItems}
      />
    </nav>
  );
}
