import React from 'react'
import './Sidebar01.css'
import {Link, NavLink} from "react-router-dom";
import {GiAcorn} from "react-icons/gi";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {MdOutlineCancel} from "react-icons/md";
import {linkList} from "../../assets/dummy";
import ill1 from '../../assets/Illustration.png';

const Sidebar01 = () => {
    const activeLinkStyle = "flex items-center gap-5 pl-4 pt-4 pb-3 rounded-lg text-sidebar01-menu-text1 capitalize font-bold hover:bg-slate-100 m-2";
    const normalLinkStyle = "flex items-center gap-5 pl-4 pt-4 pb-3 rounded-lg text-sidebar01-menu-text2 capitalize dark:text-gray-200 dark:hover:text-black";
    return (
        <div
            className="h-screen rounded-3xl pt-4 pl-3 bg-sidebar01-bg md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {/*Header,Logo,Cancel*/}
            <div className="flex items-center justify-between">
                <Link
                    className="flex items-center ml-3 mt-4 gap-3  text-2xl tracking-tight text-slate-900 font-extrabold dark:text-white"
                    to="/"
                    onClick={() => {
                    }}
                >
                    <GiAcorn className="text-sidebar01-menu-text1"/><span
                    className="text-sidebar01-menu-text1">Sidebar-01</span>
                </Link>
                <TooltipComponent content="Close Menu" position="BottomCenter">
                    <button type="button" className="mr-3 mt-6 text-sidebar01-menu-text1 text-2xl hover:bg-light-gray">
                        <MdOutlineCancel/>
                    </button>
                </TooltipComponent>
            </div>
            {/*Menuler*/}
            <div className="mt-10">
                {linkList.map((item) => (
                    <div key={item.title}>
                        <p className="text-gray-400 m-3 font-bold uppercase">
                            {item.title}
                        </p>
                        {item.links.map((link) => (
                            <NavLink
                                className={({isActive}) => isActive ? activeLinkStyle : normalLinkStyle}
                                to={`/${link.name}`}
                                key={link.name}>
                                {link.icon}
                                <span>{link.name}</span>
                            </NavLink>

                        ))}
                        <div className="border-b-2 ml-3 w-60"></div>
                    </div>
                ))}
            </div>
            {/*İkon*/}
            <div>
                <img  src={ill1} className="absolute bottom-5 ml-4 mt-4" style={{'width': '219px',
                    'height': '197px'}} alt="Sidebar Illustration"/>
            </div>
        </div>
    )
}

export default Sidebar01