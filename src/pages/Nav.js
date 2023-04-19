import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <main>
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap items-center justify-around">
          <div className="px-3 py-2">
            <h3>Techit</h3>
          </div>
          <div>
            <ul className="flex">
              <li className="px-3 py-2"><Link to="/">Home</Link></li>
              <li className="px-3 py-2"><Link to="/about">About</Link></li>
              <li className="px-3 py-2"><Link to="/services">Services</Link></li>
              <li className="px-3 py-2"><Link to="/blog">Blog</Link></li>
              <li className="px-3 py-2"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="px-8 py-2.5 bg-[#5e87eb] text-white rounded-full">
                <Link to="/">Get It Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Nav
