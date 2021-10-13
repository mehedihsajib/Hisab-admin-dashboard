/* eslint-disable prettier/prettier */
import React from 'react';
import {
    AiOutlineDollarCircle,
    AiOutlineHome,
    AiOutlineMail,
    AiOutlineMessage, AiOutlineSetting, AiOutlineUser
} from 'react-icons/ai';
import { IoMdStats } from 'react-icons/io';
import { IoAnalyticsSharp, IoBasketOutline, IoBriefcaseOutline, IoTrendingUpSharp } from 'react-icons/io5';
import SidebarItem from './SidebarItem';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <h4>Dashboard</h4>
                <ul className="sidebar__list">
                    <SidebarItem icon={<AiOutlineHome />} text="Home" />
                    <SidebarItem icon={<IoAnalyticsSharp />} text="Analytics" />
                    <SidebarItem icon={<IoTrendingUpSharp />} text="Sales" />
                </ul>
                <h4>Quick Menu</h4>
                <ul className="sidebar__list">
                    <SidebarItem icon={<AiOutlineUser />} text="User" />
                    <SidebarItem icon={<IoBasketOutline />} text="Products" />
                    <SidebarItem icon={<AiOutlineDollarCircle />} text="Transaction" />
                    <SidebarItem icon={<IoMdStats />} text="Reports" />
                </ul>
                <h4>Notifications</h4>
                <ul className="sidebar__list">
                    <SidebarItem icon={<AiOutlineMail />} text="Email" />
                    <SidebarItem icon={<AiOutlineMessage />} text="Messages" />
                </ul>
                <h4>Others</h4>
                <ul className="sidebar__list">
                    <SidebarItem icon={<IoBriefcaseOutline />} text="Manage" />
                    <SidebarItem icon={<AiOutlineSetting />} text="Settings" />
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
