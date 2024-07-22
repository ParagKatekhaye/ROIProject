import React from 'react';
import SideBar, { SidebarItem, SidebarContext } from './SideBar';
import { CalendarDays, Settings, Headphones } from 'lucide-react';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgUserList } from "react-icons/cg"
import { CgCrown } from "react-icons/cg";
import { CgDatabase } from "react-icons/cg";
import { MdAttachMoney } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const SidebarContent = ({expanded, setExpanded}) => {
  return (
   <div className='max-w-[340px] '>
     <SideBar expanded={expanded} setExpanded={setExpanded} >
      {/* <SidebarItem icon={<Home size={20}  />} text="Home"  /> */}
      <SidebarItem icon={<MdOutlineDashboardCustomize  size={20}/>} text="Admin Panel">
        <SidebarItem text="ROI Report" customClass="text-gray-600" />
        <SidebarItem text="Audience Insights" customClass="text-gray-600" />
        <SidebarItem text="Manage Influencers" customClass="text-gray-600" />
      </SidebarItem>
      <SidebarItem icon={<CgUserList size={20} />} text="Discover Influencers" />
      <SidebarItem icon={<CgCrown size={20} />} text="Manage Campaign" />
      <SidebarItem icon={<CalendarDays size={20} />} text="Calendar" />
      <SidebarItem icon={<MdAttachMoney size={20} />} text="Payments" />
      <SidebarItem icon={<FaRegHeart size={20} />} text="Favorites" />
      <SidebarItem icon={<CgDatabase  size={18} />} text="Influencers Base" />

      <SidebarContext.Consumer>
        {({ expanded }) =>
          expanded ? (
            <p className="ml-0 text-gray-500 mt-4 mb-4">Account</p>
          ) : (
            <hr className="my-4 border-gray-200" />
          )
        }
      </SidebarContext.Consumer>

      <SidebarItem icon={<Settings size={20} />} text="Settings" />
      <SidebarItem icon={<Headphones size={20} />} text="Live Support" />
    </SideBar>
   </div>
  );
};

export default SidebarContent;
