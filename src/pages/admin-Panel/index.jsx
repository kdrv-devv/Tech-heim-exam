import React from "react";
import { Header } from "../../components";
import { Link, Outlet } from "react-router-dom";
import { MdFileUpload } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const AdminPanel = () => {
  return (
    <section className="admin-page">
      <Header />
      <div className="flex">
        <div className="nav-dashboard flex flex-col gap-5 w-[20%] px-[30px] border-1 border-black ">
          <Link to={""} className="flex items-center gap-3 text-[#9197b3] text-[18px]" > <MdFileUpload /> <h4 className="">Add new product</h4> </Link>
          <Link to={"editadmin"} className="flex items-center gap-3 text-[#9197b3] text-[18px]"> <FaUserEdit />  <h4>Review the products</h4> </Link>
          <Link to={"deleteadmin"} className="flex items-center gap-3 text-[#9197b3] text-[18px]"> <MdDelete /><h4>Delete the products</h4> </Link>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default AdminPanel;
