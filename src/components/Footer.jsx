import React from 'react';

function Footer() {
    return (
        <footer id="contact" className="bg-gray-800/90 text-white pt-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-3">

                {/* Quote Section */}
                <p className="text-2xl sm:text-3xl font-semibold leading-relaxed text-gray-200">
                    “<span className='text-blue-600'>Keep</span> learning. <span className='text-blue-600'>Keep</span> building. <span className='text-blue-600'>Keep</span> going.”
                </p>


                {/* Social Section */}
                <div className="text-center flex flex-col items-start">
                    <h4 className="text-2xl font-bold text-blue-600 mb-4">Follow Me</h4>
                    <div className="flex justify-center gap-6">
                        <a href="https://linkedin.com/in/muhammadzeeshanameer" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin text-3xl text-white hover:text-blue-500 hover:scale-110 transition-transform"></i>
                        </a>
                        <a href="https://github.com/zeeshan92git" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <i className="fab fa-github text-3xl text-gray-200 hover:text-white hover:scale-110 transition-transform"></i>
                        </a>
                        <a href="https://leetcode.com/u/m_xeeshan" target="_blank" rel="noreferrer" aria-label="LeetCode" className='hover:scale-110'>
                            <img
                                src="./leet.png"
                                alt="LeetCode"
                                className="w-7 h-7 mt-1.5 rounded-md bg-white hover:bg-yellow-500 p-1 transition-all"
                            />
                        </a>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-start  lg:text-right space-y-3">
                    <h4 className="text-2xl font-bold text-blue-600 mb-2">Contact Me</h4>
                    <p className="flex justify-center lg:justify-end items-center gap-2">
                        <i className="fa fa-envelope text-gray-200 text-xl" aria-hidden="true"></i>
                        <a href="mailto:zeeshanameer576@gmail.com" className="hover:text-blue-500 transition-colors">zeeshanameer576@gmail.com</a>
                    </p>
                    <p className="flex justify-center lg:justify-end items-center gap-2">
                        <i className="fa fa-phone text-gray-200 text-xl" aria-hidden="true"></i>
                        <a href="tel:+923286459508" className="hover:text-blue-500 transition-colors">+92 328 6459508</a>
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-sm text-blue-500">
                <p>&copy; {new Date().getFullYear()} <strong> M Zeeshan Ameer</strong>.</p>
            </div>

        </footer>
    );
}

export default Footer;
