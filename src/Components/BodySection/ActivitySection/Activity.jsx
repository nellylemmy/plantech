import React from 'react'
import './activity.css'
import { BsArrowRightShort } from "react-icons/bs";

import user1 from './../../../Assets/indian2.jpg'
import user2 from './../../../Assets/indian3.jpg'
import user3 from './../../../Assets/indian.jpeg'
import user4 from './../../../Assets/asian2.jpg'
import user5 from './../../../Assets/american.jpeg'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activities</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="customer" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user2} alt="customer" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user3} alt="customer" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user4} alt="customer" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user5} alt="customer" />
          <div className="customerDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>

    </div>
  )
}

export default Activity
