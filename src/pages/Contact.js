import React from 'react'

const Contact = () => {
  return (
    <main>
      {/* intro */}
      <section className="mb-20">
        <div id="intro">
          <div>
            <h1 >Contact Us</h1>
            <h6>Home // Contact</h6>
          </div>
        </div>
      </section>

      {/* contact */}
      <section>
        <div className="bg-[#f6f6f6]">
          <div className="container mx-auto p-4">
            <div className="flex flex-wrap justify-start gap-10 md:justify-evenly">
              <div className="p-4">
                <div className="py-4">
                  <h4>Address:</h4>
                  <h6>Waiyaki-way</h6>
                  <h6>Nairobi,Kenya.</h6>
                </div>
                <div className="py-4">
                  <h4>Phone:</h4>
                  <h6>+254 798-551-1778</h6>
                  <h6>+254 777-200-000</h6>
                </div>
                <div className="py-4">
                  <h4>Email:</h4>
                  <h6>info@techit.com</h6>
                  <h6>support@techit.com</h6>
                </div>
              </div>
              <div className="p-4">
                <form action="">
                  <div className="flex flex-wrap">
                    <div className="p-2">
                      <label htmlFor="">
                        <input 
                          type="text" 
                          required
                          placeholder="Your Name"
                          className="px-3 py-2 border-l-2 rounded-lg border-slate-600 focus:outline-none focus:border-[#5e87eb]"
                        />
                      </label>
                    </div>
                    <div className="p-2">
                      <label htmlFor="">
                        <input 
                          type="email" 
                          required
                          placeholder="Your Email"
                          className="px-3 py-2 border-l-2 rounded-lg border-slate-600 focus:outline-none focus:border-[#5e87eb]"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full">
                    <div className="p-2">
                      <label htmlFor="">
                        <input 
                          type="text" 
                          required
                          placeholder="Your Phone"
                          className="px-3 py-2 border-l-2 rounded-lg border-slate-600 focus:outline-none focus:border-[#5e87eb]"
                        />
                      </label>
                    </div>
                    <div className="p-2">
                      <label htmlFor="">
                        <input 
                          type="text" 
                          required
                          placeholder="Your Subject"
                          className="px-3 py-2 border-l-2 rounded-lg border-slate-600 focus:outline-none focus:border-[#5e87eb]"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="p-2">
                    <label htmlFor="">
                      <textarea 
                        name="" id="" 
                        cols="30" rows="8"
                        required
                        placeholder="Your Subject"
                        className="px-3 py-2 w-full border-l-2 rounded-lg border-slate-600 focus:outline-none focus:border-[#5e87eb]"
                      ></textarea>
                    </label>
                  </div>
                  <div className="p-4">
                    <button className="bg-[#5e87eb] text-white px-6 py-3 rounded-full">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map */}
      <section>
        <div>
          <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.846884940866!2d36.75602817583386!3d-1.2643777526146567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17390e360dc7%3A0xb069688ffd2118b5!2sWaiyaki%20Way%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1681901933187!5m2!1sen!2ske"
            width="1900" height="500" title="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    </main>
  )
}

export default Contact
