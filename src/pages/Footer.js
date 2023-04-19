import React from 'react'
import { MdLocationOn,MdPhoneIphone,MdEmail } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <main>
      <div className="bg-[#111428] text-white">
        <div className="container mx-auto py-20">
          <div className="flex flex-wrap justify-between gap-10 p-4">
            <div className="p-4">
              <h3><b>Techit</b></h3>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br /> incididunt labore et dolore magna aliqua</p>
              <br />
              <div className="flex items-center text-white space-x-4">
                <a href="/" className="border border-white rounded-full p-2 hover:bg-[#5e87eb]"><h6><FaFacebookF/></h6></a>
                <a href="/" className="border border-white rounded-full p-2 hover:bg-[#5e87eb]"><h6><FaTwitter/></h6></a>
                <a href="/" className="border border-white rounded-full p-2 hover:bg-[#5e87eb]"><h6><BsLinkedin/></h6></a>
                <a href="/" className="border border-white rounded-full p-2 hover:bg-[#5e87eb]"><h6><FaYoutube/></h6></a>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h4><b>Contact Info</b></h4>
              <br />
              <div className='flex items-center space-x-2'>
                <h4 className="text-[#5e87eb]"><MdLocationOn/></h4>
                <p>Waiyaki-way Nairobi Kenya</p>
              </div>
              <div className='flex items-center space-x-2'>
                <h4 className="text-[#5e87eb]"><MdPhoneIphone/></h4>
                <p>+254 798-551-778</p>
              </div>
              <div className='flex items-center space-x-2'>
                <h4 className="text-[#5e87eb]"><MdEmail/></h4>
                <p>contactinfo@techit.com</p>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h4><b>Our Services</b></h4>
              <br />
              <p>IT Solutions</p>
              <p>Web Development</p>
              <p>Networking Services</p>
              <p>Apps Development</p>
              <p>Cloud Security</p>
            </div>
            <div className="p-4 space-y-2">
              <h4><b>Subscribe Newsletter</b></h4>
              <br />
              <div className="">
                <label htmlFor="">
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email"
                    className="px-3 py-2 border text-black border-none focus:outline-none"
                  />
                </label>
              </div>
              <button className="text-white bg-[#5e87eb] px-5 py-2 w-full">Subscribe Now</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap items-center justify-between p-4">
            <div>
              <span>&copy; 2023 - All Rights Reserved - Designed by Gregory Mark.</span>
            </div>
            <div>
              <span>Terms & Condition | Privacy Policy.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer
