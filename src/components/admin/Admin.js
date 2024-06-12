import React from 'react';
import AdminHeader from './adminheader/AdminHeader';
import Sidebar from './sidebar/Sidebar';
import AdminHome from './adminhome/AdminHome';
import Users from './adminpages/users/Users';

const Admin = ({ openSidebar, openSidebarToggle }) => {
  return (
    <div className='grid-container'>
      <AdminHeader openSidebar={openSidebar} />
      <Sidebar open={openSidebarToggle} />
      <AdminHome />
      {/* <Users/> */}
    </div>
  );
};

export default Admin;
