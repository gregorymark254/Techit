import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <main>
      {/* intro */}
      <section className="mb-20">
        <div id="intro">
          <div>
            <h1 >Services</h1>
            <h6>Home // Services</h6>
          </div>
        </div>
      </section>

      {/* services */}
      <section>
        <div className="bg-[#f6f6f6]">
          <div className="container mx-auto p-4">
            <div className="text-center py-12">
              <div>
                <h5 className="text-[#5e87eb]"><b>WHAT WE PROVIDE</b></h5>
                <h2><b>Our Services</b></h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3 justify-center items-center mb-20">
              <div className="space-y-4 bg-white p-4">
                <div className="flex justify-center">
                  <img className="h-16" src="https://barakahit.net/html/techit/assets/img/icons/services-icon-1.svg" alt="" />
                </div>
                <h4><b>IT Solutions</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt </p>
                <span className="text-[#5e87eb]"><u><Link to="/"></Link>Read More</u></span>
              </div>
              <div className="space-y-4 bg-white p-4">
                <div className="flex justify-center">
                  <img className="h-16" src="https://barakahit.net/html/techit/assets/img/icons/services-icon-2.svg" alt="" />
                </div>
                <h4><b>Web Development</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt </p>
                <span className="text-[#5e87eb]"><u><Link to="/"></Link>Read More</u></span>
              </div>
              <div className="space-y-4 bg-white p-4">
                <div className="flex justify-center">
                  <img className="h-16" src="https://barakahit.net/html/techit/assets/img/icons/services-icon-3.svg" alt="" />
                </div>
                <h4><b>Cybersecurity Services</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt </p>
                <span className="text-[#5e87eb]"><u><Link to="/"></Link>Read More</u></span>
              </div>
              <div className="space-y-4 bg-white p-4">
                <div className="flex justify-center">
                  <img className="h-16" src="https://barakahit.net/html/techit/assets/img/icons/services-icon-4.svg" alt="" />
                </div>
                <h4><b>Networking Services</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt </p>
                <span className="text-[#5e87eb]"><u><Link to="/"></Link>Read More</u></span>
              </div>
              <div className="space-y-4 bg-white p-4">
                <div className="flex justify-center">
                  <img className="h-16" src="https://barakahit.net/html/techit/assets/img/icons/services-icon-5.svg" alt="" />
                </div>
                <h4><b>Cloud Backup Services</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt </p>
                <span className="text-[#5e87eb]"><u><Link to="/"></Link>Read More</u></span>
              </div>
              <div className="space-y-4 bg-white p-4">
                <div className="flex justify-center">
                  <img className="h-16" src="https://barakahit.net/html/techit/assets/img/icons/services-icon-6.svg" alt="" />
                </div>
                <h4><b>Sotware Development</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt </p>
                <span className="text-[#5e87eb]"><u><Link to="/"></Link>Read More</u></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* paralax */}
      <section>
        <div id="skill">
          <div className="flex flex-wrap items-center justify-center">
            <div className="p-4 space-y-4">
              <h2><b>Let's Talk About Your Business IT Services</b></h2> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur</p> 
              <br />
              <br />
              <span className="bg-white text-[#5e87eb] px-5 py-3 rounded-full mt-5"><Link to="/contact">Contact us</Link></span>  
            </div>    
          </div>
        </div>
      </section>

      {/* Provide */}
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap items-center justify-center">
            <div className="space-y-5 p-4">
              <h5 className="text-[#5e87eb] p-2"><b>WHAT WE PROVIDE</b></h5>
              <div>
                <h2>We’re Delivering Technology</h2>
                <h2>Solutions For Today & Tomorrow</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>

              <br />
              <div className="grid grid-cols-2 gap-5">
                <div className="py-3 px-5 shadow shadow-[rgb(123,104,238,0.25)]">
                  <h4>E-Commerce Development</h4>
                </div>
                <div className="py-3 px-5 shadow shadow-[rgb(123,104,238,0.25)]">
                  <h4>Web Design</h4>
                </div>
                <div className="py-3 px-5 shadow shadow-[rgb(123,104,238,0.25)]">
                  <h4>WordPress Development</h4>
                </div>
                <div className="py-3 px-5 shadow shadow-[rgb(123,104,238,0.25)]">
                  <h4>Network Monitoring</h4>
                </div>
                <div className="py-3 px-5 shadow shadow-[rgb(123,104,238,0.25)]">
                  <h4>Page Speed Optimization</h4>
                </div>
                <div className="py-3 px-5 shadow shadow-[rgb(123,104,238,0.25)]">
                  <h4>Shopify Development</h4>
                </div>
              </div>
            </div>
            <div className="p-4">
              <img src="https://barakahit.net/html/techit/assets/img/overview.png" alt="People" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
