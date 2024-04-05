import React from 'react'
import './top.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to plantech</h1>
          <p>Hello Nelson, welcome back!</p>
        </div>

        <div className="serachBar flex">
          <input type="text" placeholder='Search Plantech'/>
          <BiSearchAlt2 className='icon'/>
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className='icon'/>
          <IoNotificationsOutline className='icon'/>
          <div className="adminImage">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
