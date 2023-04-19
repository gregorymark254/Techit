import React, { useState }  from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  return (
    <main>
      <div className="container mx-auto p-4">
        <nav className="flex flex-wrap items-center justify-between md:justify-around">
          <div className="px-3 py-2">
            <h3>Techit</h3>
          </div>
          <div className="hidden md:flex lg:flex">
            <ul className="flex">
              <li className="px-3 py-2 hover:text-[#5e87eb]"><Link to="/">Home</Link></li>
              <li className="px-3 py-2 hover:text-[#5e87eb]"><Link to="/about">About</Link></li>
              <li className="px-3 py-2 hover:text-[#5e87eb]"><Link to="/services">Services</Link></li>
              <li className="px-3 py-2 hover:text-[#5e87eb]"><Link to="/blog">Blog</Link></li>
              <li className="px-3 py-2 hover:text-[#5e87eb]"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <ul>
              <li className="px-8 py-2.5 bg-[#5e87eb] text-white rounded-full">
                <Link to="/">Get It Support</Link>
              </li>
            </ul>
          </div>

          {!navIsShown ? (
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7 z-50' onClick={toggleNavIsShown} >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
            </svg>
          )}

          {navIsShown && (
            <div className='absolute z-10 top-12 left-0 w-full text-black'>
              <ul className='mb-2 bg-white p-2 mx-10'>
                <li className="px-3 py-2 hover:text-[#5e87eb] border-b border-t border-slate-300"><a href="/">Home</a></li>
                <li className="px-3 py-2 hover:text-[#5e87eb] border-b border-slate-300"><a href="/about">About</a></li>
                <li className="px-3 py-2 hover:text-[#5e87eb] border-b border-slate-300"><a href="/services">Services</a></li>
                <li className="px-3 py-2 hover:text-[#5e87eb] border-b border-slate-300"><a href="/blog">Blog</a></li>
                <li className="px-3 py-2 hover:text-[#5e87eb]"><a href="/contact">Contact</a></li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </main>
  )
}

export default Nav
