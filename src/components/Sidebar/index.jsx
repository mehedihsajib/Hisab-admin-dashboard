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
                    <SidebarItem icon={<AiOutlineHome />} text="Home" link='/' />
                    <SidebarItem icon={<IoAnalyticsSharp />} text="Analytics" link='/analytics' />
                    <SidebarItem icon={<IoTrendingUpSharp />} text="Sales" link='/sales' />
                </ul>
                <h4>Quick Menu</h4>
                <ul className="sidebar__list">
                    <SidebarItem icon={<AiOutlineUser />} text="User" link='/users' />
                    <SidebarItem icon={<IoBasketOutline />} text="Products" link='/products' />
                    <SidebarItem icon={<AiOutlineDollarCircle />} text="Transaction" link='/transaction' />
                    <SidebarItem icon={<IoMdStats />} text="Reports" link='/reports' />
                </ul>
                <h4>Notifications</h4>
                <ul className="sidebar__list">
                    <SidebarItem icon={<AiOutlineMail />} text="Email" link='/email' />
                    <SidebarItem icon={<AiOutlineMessage />} text="Messages" link='/message' />
                </ul>
                <h4>Others</h4>
                <ul className="sidebar__list">
                    <SidebarItem icon={<IoBriefcaseOutline />} text="Manage" link='/manage' />
                    <SidebarItem icon={<AiOutlineSetting />} text="Settings" link='/settings' />
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
