import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      {/* Hero section */}
      <section id="hero">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap items-center justify-center">
            <div className="p-4 space-y-5">
              <div className="space-y-3">
                <h1><b>We Are Leading</b></h1>
                <h1 className="text-[#5e87eb]"><b>Technology Solutions</b></h1>
                <h1><b>Providing Company</b></h1>
              </div>
              <div className="flex flex-wrap">
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua.</p>
              </div>
              <div className="flex space-x-6">
                <span className="bg-white text-[#5e87eb] px-5 py-2 rounded-full  hover:bg-[#e2e5eb] shadow shadow-[rgb(123,104,238,0.25)]"><Link to="/">Get Started</Link></span>
                <span className="bg-[#5e87eb] text-white px-5 py-2 hover:bg-[#5074ce] rounded-full"><Link to="/contact">Contact Us</Link></span>
              </div>
            </div>
            <div className="p-4">
              <img src="https://barakahit.net/html/techit/assets/img/home-font.png" alt="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* who we are */}
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap items-center justify-center">
            <div className="p-4">
              <img src="https://barakahit.net/html/techit/assets/img/about.jpg" alt="about" />
            </div>
            <div className="p-4 space-y-5">
              <div>
                <h5 className="text-[#5e87eb]"><b>WHO WE ARE</b></h5>
              </div>
              <div>
                <h1>We Provide Innovative IT</h1>
                <h1>Solutions For Your Business</h1>
              </div>
              <div className="space-y-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration <br /> in some form, by injected humour, or randomised words which don't look even slightly believable. <br />If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything</p>
              </div>
              <div>
                <span className="bg-[#5e87eb] text-white px-5 py-2 rounded-full hover:bg-[#5074ce]"><Link to="/">More About Us</Link></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why us */}
      <section>
        <div className="bg-[#f6f6f6]">
          <div className="container mx-auto p-4">
            <div className="text-center py-12">
              <div>
                <h5 className="text-[#5e87eb]"><b>WE ARE THE BEST</b></h5>
                <h2><b>Why Choose Us?</b></h2>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center text-center gap-10 mb-20">
              <div className="space-y-4 bg-white p-4">
                <div className="flex justify-center">
                  <img src="https://barakahit.net/html/techit/assets/img/icons/services-icon-1.svg" alt="" />
                </div>
                <h4><b>Cyber Security</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt </p>
              </div>
              <div className="space-y-4 bg-white p-4">
                <div className="flex justify-center">
                  <img src="https://barakahit.net/html/techit/assets/img/icons/services-icon-1.svg" alt="" />
                </div>
                <h4><b>Technology Solutions</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt </p>
              </div>
              <div className="space-y-4 bg-white p-4">
                <div className="flex justify-center">
                  <img src="https://barakahit.net/html/techit/assets/img/icons/services-icon-1.svg" alt="" />
                </div>
                <h4><b>App Development</b></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* techit */}
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-center items-center">
            <div className="space-y-5">
              <h5 className="text-[#5e87eb]"><b>WELCOME TO TECHIT</b></h5>
              <div>
                <h2>We Provide Innovative IT</h2>
                <h2>Solutions For Your Business</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <img src="https://barakahit.net/html/techit/assets/img/skill.jpg" alt="PEOPLE" />
            </div>
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

      {/* paralax */}
      <section>
        <div id="skill">
          <div className="grid grid-cols-1 gap-20 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h1>23+</h1>
              <h4>Years of experience</h4>
            </div>
            <div>
              <h1>100+</h1>
              <h4>Projects Completed</h4>
            </div>
            <div>
              <h1>250+</h1>
              <h4>Employees</h4>
            </div>
            <div>
              <h1>300+</h1>
              <h4>5 Star Rating</h4>
           </div>                    
          </div>
        </div>
      </section>

      {/* team */}
      <section>
        <div className="container mx-auto p-4">
          <div className="text-center py-12">
            <div>
              <h5 className="text-[#5e87eb]"><b>EXPERT TEAM</b></h5>
              <h2><b>Team Members</b></h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div>
              <div>
                <img height={250} width={250} src="https://barakahit.net/html/techit/assets/img/team/team-1.jpg" alt="" />
              </div>
              <div className="text-center space-y-1">
                <h4>Gregory Mark</h4>
                <h5 className="text-[#5e87eb]"><b>C.E.O</b></h5>
              </div>
            </div>
            <div>
              <div>
                <img height={250} width={250} src="https://barakahit.net/html/techit/assets/img/team/team-2.jpg" alt="" />
              </div>
              <div className="text-center space-y-1">
                <h4>Joseck Osugo</h4>
                <h5 className="text-[#5e87eb]"><b>Managing Director</b></h5>
              </div>
            </div>
            <div>
              <div>
                <img height={250} width={250} src="https://barakahit.net/html/techit/assets/img/team/team-3.jpg" alt="" />
              </div>
              <div className="text-center space-y-1">
                <h4>Alphine Oduor</h4>
                <h5 className="text-[#5e87eb]"><b>Human Resourse Manager</b></h5>
              </div>
            </div>
            <div>
              <div>
                <img height={250} width={250} src="https://barakahit.net/html/techit/assets/img/team/team-4.jpg" alt="" />
              </div>
              <div className="text-center space-y-1">
                <h4>Peter Mutoi</h4>
                <h5 className="text-[#5e87eb]"><b>General Manager</b></h5>
              </div>
            </div>  
          </div>
        </div>
      </section>

      {/* textimonials */}
      <section>
        <div className="bg-[#f6f6f6]">
          <div className="container mx-auto p-4">
            <div className="text-center py-12">
              <div>
                <h5 className="text-[#5e87eb]"><b>TESTIMONIALS</b></h5>
                <h2><b>Our Clients Say</b></h2>
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

      {/* blog */}
      <section>
        <div className="container mx-auto p-4">
          <div className="text-center py-12">
            <div>
              <h5 className="text-[#5e87eb]"><b>OUR LATEST NEWS</b></h5>
              <h2><b>Blog & Article</b></h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 text-center">
            <div className="shadow shadow-[rgb(123,104,238,0.25)]">
              <div>
                <img height={250} width={360} src="https://barakahit.net/html/techit/assets/img/blog/blog-1.jpg" alt="blogs" />
              </div>
              <div className="p-4 space-y-3">
                <h5>Advancing Business Software <br /> Development With Cloud Native</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed eiusmod tempor incididunt</p>
                <div>
                  <span className="text-white bg-[#5e87eb] px-5 py-2 rounded-full hover:bg-[#5074ce]"><Link to="/">Continue Reading</Link></span>
                </div>
              </div>
            </div>
            <div className="shadow shadow-[rgb(123,104,238,0.25)]">
              <div>
                <img height={250} width={360} src="https://barakahit.net/html/techit/assets/img/blog/blog-2.jpg" alt="blogs" />
              </div>
              <div className="p-4 space-y-3">
                <h5>How to Create the Right Cyber <br />Insurance Policy for Your Business</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed eiusmod tempor incididunt</p>
                <div>
                  <span className="text-white bg-[#5e87eb] px-5 py-2 rounded-full hover:bg-[#5074ce]"><Link to="/">Continue Reading</Link></span>
                </div>
              </div>
            </div>
            <div className="shadow shadow-[rgb(123,104,238,0.25)]">
              <div>
                <img height={250} width={360} src="https://barakahit.net/html/techit/assets/img/blog/blog-3.jpg" alt="blogs" />
              </div>
              <div className="p-4 space-y-3">
                <h5>Improving Business Performance <br /> With Augmented Intelligence!</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed eiusmod tempor incididunt</p>
                <div>
                  <span className="text-white bg-[#5e87eb] px-5 py-2 rounded-full hover:bg-[#5074ce]"><Link to="/">Continue Reading</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* partners */}
      <section>
        <div className="bg-[#f6f6f6]">
          <div className="container mx-auto p-4">
            <div className="text-center py-12">
              <h2><b>TRUSTED PARTNERS</b></h2>
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
