import React, { useState } from 'react'
import SidebarContent from '../Components/NavigationBar/SideBar/SidebarContent'
import NavigationBar from '../Components/NavigationBar/Navbar/NavigationBar'
import Dashboard from '../Components/Dashboard/Dashboard'

const AdminPanel = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex bg-[#F5F5F5] font-body h-[950px] flex-col ">
      <div >
       <SidebarContent  expanded={expanded} setExpanded={setExpanded}/>
      
      </div>
      <div className="flex-row ">
        <NavigationBar expanded={expanded}/>
        <Dashboard expanded={expanded} />
      </div>
    </div>
  )
}

export default AdminPanel