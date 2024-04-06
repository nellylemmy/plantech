import React from 'react'
import './listing.css'

import { BsArrowRight } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import flowerInJar from './../../../Assets/img5.png'
import flowerInJar2 from './../../../Assets/img6.png'
import flowerInJar3 from './../../../Assets/img3.png'
import flowerInJar4 from './../../../Assets/img1.jpg'
import blondeWoman from './../../../Assets/blonde.jpeg'
import americanwoman from './../../../Assets/american.jpeg'
import asianwoman from './../../../Assets/asian.png'
import indianwoman from './../../../Assets/indian.jpeg'

const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRight className='icon'/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={flowerInJar} alt="flowerInJar" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={flowerInJar2} alt="flowerInJar" />
          <h3>Cofee Plant</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon'/>
          <img src={flowerInJar3} alt="flowerInJar" />
          <h3>Button Fern</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={flowerInJar4} alt="flowerInJar" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={flowerInJar4} alt="flowerInJar" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={flowerInJar4} alt="flowerInJar" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={flowerInJar4} alt="flowerInJar" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={flowerInJar4} alt="flowerInJar" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={flowerInJar4} alt="flowerInJar" />
          <h3>Spider Plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className='icon'/>
          <img src={flowerInJar4} alt="flowerInJar" />
          <h3>Spider Plant</h3>
        </div>
      </div>

      <div className="sellers flex">

        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRight className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={blondeWoman} alt="users" />
              <img src={americanwoman} alt="users" />
              <img src={asianwoman} alt="users" />
              <img src={indianwoman} alt="users" />
            </div>
            <div className="cardText">
              <span>
                14,556 plants sold <br />
                <small>22 sellers <span className="date">7 days</span></small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRight className='icon'/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={americanwoman} alt="users" />
              <img src={blondeWoman} alt="users" />
              <img src={indianwoman} alt="users" />
              <img src={asianwoman} alt="users" />
            </div>
            <div className="cardText">
              <span>
                43,235 plants sold <br />
                <small>60 sellers <span className="date">31 days</span></small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
