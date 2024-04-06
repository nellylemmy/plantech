import React from 'react'
import './top.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import userImage from './../../../Assets/generateduser1.png';
import rainy from './../../../Assets/rainy.mp4';
import { BsArrowRightShort } from "react-icons/bs";
import plantsInJars from './../../../Assets/img7.png';

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
            <img src={userImage} alt="admin" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The world's fast growing industry today are natural made products!</p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={rainy} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>Today <br /> <small>4 Orders</small></span>
                <span>This Month <br /> <small>127 Orders</small></span>
              </div>

              <span className="flex link">
                Go to my orders <BsArrowRightShort className='icon'/>
              </span>

            </div>

            <div className="imgDiv">
              <img src={plantsInJars} alt="" />
            </div>

            {/* <div className="sideBarCard">
            <BsQuestionCircle className='icon'/>
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>Having problems in plantech? Please contact us for more information.</p>
                <button className="btn">Go to help center</button>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
