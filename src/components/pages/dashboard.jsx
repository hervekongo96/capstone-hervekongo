import React, {useState} from 'react';
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineUser  } from "react-icons/ai";
import { RiDashboardFill, RiLogoutCircleLine } from "react-icons/ri";
import { BiBarChartAlt } from "react-icons/bi";
import { MdWorkspaces } from "react-icons/md";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../provider/authprovider';

const Dashboardpage = () => {
    const { user } = useAuth();
    const [open, setOpen] = useState(true);
    const Menus = [
        {
            title: "Dashboard",
            icon: <BiBarChartAlt />,
            link:'/dashboard'
        },
        {
            title: "Works",
            icon: <MdWorkspaces />,
            link: '/dashboard/works',
            apprenantOnly: true
        },
        {
            title: "Your Works",
            icon: <MdWorkspaces />,
            link: '/dashboard/yourWorks',
            adminOnly: true
        },
        {
            title: "publish",
            icon: <MdWorkspaces />,
            link: '/dashboard/publish',
            adminOnly: true
        },
        {
            title: "Compte",
            icon: <AiOutlineUser />,
            link: '/dashboard/comptes',
            apprenantOnly: true
        },
        {
            title: 'Logout',
            icon: <RiLogoutCircleLine />,
            link: '/dashboard/logout',
            spacing : true
        },
    ]
    return (
        <div className="flex">
            <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ?  "w-72" :" w-20" } duration-300 relative`}>
                <BsArrowLeft className={`bg-white text-dark-purple text-2xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
                <div className="inline-flex">
                    <AiFillEnvironment className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
                    <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>The wall</h1>
                </div>
                <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
                    <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
                    <input type={"search"} placeholder='Search' className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
                </div>
                <ul className="pt-2">
                    {Menus.map((menu, index) => (
                        (!menu.adminOnly || (user && user.role !== 'ADMIN')) &&
                        (!menu.apprenantOnly || (user && user.role !== 'APPRENANT')) && (
                        <NavLink to={`${menu.link}`} key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                            <span className='text-2xl block float-left'>{menu.icon ? menu.icon : <RiDashboardFill />}</span>
                            <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                        </NavLink>
                        )
                    ))}
                </ul>
            </div>
            <div className="flex-grow">
                <nav className="w-full flex items-center justify-between p-6 bg-dark-purple">
                    <div className="text-white">
                        <h1 className="text-2xl font-bold"></h1>
                    </div>
                    <div className="flex items-center">
                        <p className="text-white mx-3">{user.role}</p>
                        <p className="text-white mx-3">{user.nom}</p>
                        <div className="ml-6">
                            <Link to={'/dashboard/userprofile'}>
                                <img className="h-8 w-8 rounded-full" src={user.profileImage} alt="Avatar utilisateur" />
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className='p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboardpage;

