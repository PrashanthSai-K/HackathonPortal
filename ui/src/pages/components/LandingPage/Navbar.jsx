import React, { useEffect, useState } from 'react';
import { Button } from "../../../components/components/ui/button"
import Logo from "../../../assets/logo.png";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../../components/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetHeader,
    SheetTitle,
} from "../../../components/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router';
import { HashLink as Link } from "react-router-hash-link";
import { useAuth } from '../../../AuthContext';
import Guidelines from "../../../assets/HACKATHON_GUIDELINES[1].pdf";
import { userGetRequest } from "../exports";


export default function Navbar() {

    const [mounted, setMounted] = useState(false);
    const [eventDetails, setEventDetails] = useState({});

    const fetchEventDetails = async () => {
        try {
            const response = await userGetRequest("/events");
            setEventDetails(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchEventDetails();
    }, [])


    const navItems = [
        { label: "Home", href: "/#home", role: ["all", "user"] },
        { label: "Problem Statement", href: "/problems", role: ["all", "user"] },
        { label: "Winners", href: "/user-winner", role: ["all", "user"] },
        { label: "Final Participants", href: "/finalists", role: ["user"] },
        { label: "Profile", href: "/profile", role: ["user"] },
        {
            label: "Info",
            href: "/info",
            role: ["all", "user"],
            items: [
                { label: "About", href: "/#aboutus" },
                { label: "Guidelines", href: Guidelines, isExternal: true },
                { label: "Contact Us", href: "/#contactus" },
            ],
        },
        { label: "Problem Statements", href: "/problems-manage", role: ["admin"] },
        { label: "Institute", href: "/institute-manage", role: ["admin"] },
        {
            label: "Rounds",
            href: "/rounds",
            role: ["admin"],
            items: [
                { label: "Submitted", href: "/submitted" },
                { label: "Presentation", href: "/presentation" },
                { label: "Finalist", href: "/finalist" },
                { label: "Winners", href: "/winners" },
            ],
        },
        { label: "Tools", href: "/tools", role: ["admin"] },
        { label: "Notify", href: "/notify", role: ["admin"] },
    ]

    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;

    const { user, loggedIn, getUser } = useAuth()

    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            localStorage.removeItem("token");
            getUser();
            navigate("/");
        }
    };

    console.log(eventDetails);

    const filteredNavItems = navItems.filter(item => {
        const today = new Date();
        if (item.label === "Final Participants" && eventDetails?.final_round_date) {
            const finalRoundDate = new Date(eventDetails.final_round_date);

            if (today < finalRoundDate) {
                return false;
            }
        }

        if (item.label === "Winners" && eventDetails?.results_date) {
            const resultsDate = new Date(eventDetails.results_date);
            if (today < resultsDate) {
                return false;
            }
        }

        if (!user) {
            // Show only items with role 'all' when no user is logged in
            return item.role.includes("all");
        }
        if (user.role === "user") {
            // Show only items with role 'user'
            return item.role.includes("user");
        }
        if (user.role === "admin") {
            // Show only items with role 'admin'
            return item.role.includes("admin");
        }
        return false; // Fallback for any unexpected roles
    });

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                {/* <div className="-"> */}
                <div className="flex items-center justify-between py-3">
                    <div className="flex items-center justify-start">
                        <Link to="/" className="flex ml-2 md:mr-24">
                            <img src={Logo} className="h-14 mr-3" alt="Logo" />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">TANSCHE</span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex md:space-x-8 items-center">
                            {filteredNavItems.map((item, index) => (
                                <li key={index}>
                                    {item.items ? (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <div variant="ghost" className=" dark:text-white px-3 py-1.5 rounded-lg hover:bg-gray-50  cursor-pointer">
                                                    {item.label}
                                                </div>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                {item.items.map((subItem, subIndex) => (
                                                    <DropdownMenuItem key={subIndex}>
                                                        {subItem.isExternal ? (
                                                            <a href={subItem.href} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                {subItem.label}
                                                            </a>
                                                        ) : (
                                                            <Link to={subItem.href} className="block px-3 py-2 hover:bg-gray-100 w-full dark:hover:bg-gray-600 dark:hover:text-white">
                                                                {subItem.label}
                                                            </Link>
                                                        )}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <div className={`hover:bg-gray-50 px-3 py-1.5 rounded-lg ${pathname == "/" && item.href == "/#home" && "bg-gray-50"} ${pathname == item.href && "bg-gray-50"}`}>
                                            <Link
                                                to={item.href}
                                                className={
                                                    ` text-gray-900 dark:text-white hover:bg-gray-100",
                                                    ${pathname === item.href && "text-blue-700 dark:text-blue-500"}
                                                    ${pathname == "/" && item.href == "/#home" && "text-blue-700 dark:text-blue-500"}`
                                                }
                                            >
                                                {item.label}
                                            </Link>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="lg:hidden">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col space-y-4">
                                    {filteredNavItems.map((item, index) => (
                                        <div key={index}>
                                            {item.items ? (
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <div variant="ghost" className=" dark:text-white px-3 py-1.5 rounded-lg hover:bg-gray-50  cursor-pointer">
                                                            {item.label}
                                                        </div>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent>
                                                        {item.items.map((subItem, subIndex) => (
                                                            <DropdownMenuItem key={subIndex}>
                                                                {subItem.isExternal ? (
                                                                    <a href={subItem.href} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                        {subItem.label}
                                                                    </a>
                                                                ) : (
                                                                    <Link to={subItem.href} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setIsOpen(false)}>
                                                                        {subItem.label}
                                                                    </Link>
                                                                )}
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            ) : (
                                                <div className={`hover:bg-gray-50 px-3 py-1.5 rounded-lg ${pathname == "/" && item.href == "/#home" && "bg-gray-50"} ${pathname == item.href && "bg-gray-50"}`}>

                                                    <Link
                                                        to={item.href}
                                                        className={
                                                            ` text-gray-900 dark:text-white hover:bg-gray-100",
                                                        ${pathname === item.href && "text-blue-700 dark:text-blue-500"}
                                                        ${pathname == "/" && item.href == "/#home" && "text-blue-700 dark:text-blue-500"}`
                                                        }
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>

                        {/* Login/Logout Button */}
                        <Button
                            variant="outline"
                            className="ml-4 font-normal"
                            onClick={loggedIn ? handleLogout : () => { navigate("/login") }}
                        >
                            {/* <Link className='' to={loggedIn ? "/" : "/login"}> */}
                            {loggedIn ? "Logout" : "Login"}
                            {/* </Link> */}
                        </Button>
                    </div>
                </div>
                {/* </div> */}
            </nav>
        </>
    )
}
