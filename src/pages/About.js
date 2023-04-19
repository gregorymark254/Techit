import React from 'react'
import{ Link } from 'react-router-dom'


const About = () => {
  return (
    <main>
      {/* intro */}
      <section className="mb-20">
        <div id="intro">
          <div>
            <h1 >About Us</h1>
            <h6>Home // About us</h6>
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
                <span className="bg-[#5e87eb] text-white px-5 py-2 rounded-full"><Link to="/">More About Us</Link></span>
              </div>
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

export default About
