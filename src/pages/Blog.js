import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <main>
      {/* intro */}
      <section className="mb-20">
        <div id="intro">
          <div>
            <h1 >Blogs</h1>
            <h6>Home // Blogs</h6>
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
          <div className="flex flex-wrap items-center justify-center gap-10 text-center mb-10">
            <div className="shadow shadow-[rgb(123,104,238,0.25)]">
              <div>
                <img height={250} width={360} src="https://barakahit.net/html/techit/assets/img/blog/blog-1.jpg" alt="blogs" />
              </div>
              <div className="p-4 space-y-3">
                <h5>Advancing Business Software <br /> Development With Cloud Native</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed eiusmod tempor incididunt</p>
                <div>
                  <span className="text-white bg-[#5e87eb] px-5 py-2 rounded-full"><Link to="/">Continue Reading</Link></span>
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
                  <span className="text-white bg-[#5e87eb] px-5 py-2 rounded-full"><Link to="/">Continue Reading</Link></span>
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
                  <span className="text-white bg-[#5e87eb] px-5 py-2 rounded-full"><Link to="/">Continue Reading</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 text-center mb-20">
            <div className="shadow shadow-[rgb(123,104,238,0.25)]">
              <div>
                <img height={250} width={360} src="https://barakahit.net/html/techit/assets/img/blog/blog-4.jpg" alt="blogs" />
              </div>
              <div className="p-4 space-y-3">
                <h5>A Comprehensive Guide to SaaS <br /> Application Development</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed eiusmod tempor incididunt</p>
                <div>
                  <span className="text-white bg-[#5e87eb] px-5 py-2 rounded-full"><Link to="/">Continue Reading</Link></span>
                </div>
              </div>
            </div>
            <div className="shadow shadow-[rgb(123,104,238,0.25)]">
              <div>
                <img height={250} width={360} src="https://barakahit.net/html/techit/assets/img/blog/blog-5.jpg" alt="blogs" />
              </div>
              <div className="p-4 space-y-3">
                <h5>Enterprise Resource Planning <br />Software: A Complete Guide!</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed eiusmod tempor incididunt</p>
                <div>
                  <span className="text-white bg-[#5e87eb] px-5 py-2 rounded-full"><Link to="/">Continue Reading</Link></span>
                </div>
              </div>
            </div>
            <div className="shadow shadow-[rgb(123,104,238,0.25)]">
              <div>
                <img height={250} width={360} src="https://barakahit.net/html/techit/assets/img/blog/blog-6.jpg" alt="blogs" />
              </div>
              <div className="p-4 space-y-3">
                <h5>Metaverse And The Future Of Work:<br /> What You Need To Know</h5>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed eiusmod tempor incididunt</p>
                <div>
                  <span className="text-white bg-[#5e87eb] px-5 py-2 rounded-full"><Link to="/">Continue Reading</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
