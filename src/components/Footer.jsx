import React from 'react';

function Footer() {
    return (
        <footer id="contact" className="bg-gradient-to-br from-slate-900 to-slate-900  text-white pt-12 px-4 flex flex-col items-center ">
           
            <div className="text-center mb-10 max-w-3xl mx-auto">
                <p className="text-xl sm:text-2xl md:text-3xl  leading-relaxed text-gray-200 font-bold">
                    "<span className='text-orange-500'>Never</span> stop learning, <span className='text-orange-500'>Never</span> give up your dreams. We don't just come here to lose, 
                    Keep <span className='text-orange-500'>fighting</span> for your dreams."
                </p>
            </div>

            {/* Social Links */}
            <div className="mb-8 text-center">
                <h4 className="text-2xl font-bold mb-4">Follow Me</h4>
                <div className="flex justify-center space-x-6 ">
                    <a
                        href="https://linkedin.com/in/muhammadzeeshanameer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-200 transition"
                        aria-label="LinkedIn"
                    >
                        <i className="fa fa-linkedin-square text-2xl md:text-3xl text-yellow-500 hover:text-orange-500" aria-hidden="true"></i>
                    </a>
                    <a
                        href="https://github.com/zeeshan92git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 transition"
                        aria-label="GitHub"
                    >
                       <i className="fa fa-github-square text-2xl md:text-3xl text-yellow-500 hover:text-orange-500" aria-hidden="true"></i>
                    </a>
                    <a
                        href="https://leetcode.com/u/m_xeeshan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-300 transition"
                        aria-label="Leetcode"
                    >
                        <img src="./leet.png" alt="leetcode_logo" className=' md:w-6   md:h-6  w-5 h-5  p-1 mt-1.5 rounded-md bg-yellow-500  hover:bg-orange-500 ' />
                    </a>
                </div>
            </div>

            {/* Contact Info */}
            <div className="mb-8 text-center">
                <h4 className="text-2xl font-bold mb-2">Contact Me</h4>
                <p className='flex items-center gap-2'>
                    <i className="fa fa-envelope text-yellow-500 text-2xl " aria-hidden="true"></i>
                    <a href="mailto:zeeshanameer576@gmail.com" className="hover:underline hover:text-orange-300">zeeshanameer576@gmail.com</a>
                </p>
                <p className='flex items-center gap-2'>
                <i className="fa fa-phone text-yellow-500 text-2xl"  aria-hidden="true"></i>
                    <a href="tel:+923286459508" className="hover:underline hover:text-orange-300">
                        +92 328 6459508
                    </a>
                </p>
            </div>

            {/* Copyright */} 
            <div className="text-center text-md mb-2 mt-4 text-orange-500">
                <p>&copy; <span>Designed by Zeeshan Ameer</span>. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;
