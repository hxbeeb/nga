

export default function Footer(){

    return(
        <footer className="bg-bg-dark text-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold ">Northgate Automations</h3>
                        <p className="mt-4  max-w-md">
                            We design automation and integration solutions that streamline operations, reduce costs, and unlock growth for modern businesses.
                        </p>
                        <div className="flex items-center gap-3 mt-6">
                            <a aria-label="Twitter" href="#" className="w-10 h-10 rounded-lg hover:bg-accent transition-colors flex items-center justify-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            </a>
                            <a aria-label="LinkedIn" href="#" className="w-10 h-10 rounded-lg  hover:bg-accent transition-colors flex items-center justify-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                            </a>
                            <a aria-label="GitHub" href="#" className="w-10 h-10 rounded-lg  hover:bg-accent transition-colors flex items-center justify-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.648.5.8 5.347.8 11.7c0 4.915 3.188 9.085 7.615 10.555.556.102.761-.241.761-.537 0-.265-.01-1.126-.016-2.041-3.097.674-3.752-1.314-3.752-1.314-.506-1.286-1.235-1.63-1.235-1.63-.99-.676.075-.662.075-.662 1.094.077 1.671 1.124 1.671 1.124.972 1.666 2.553 1.185 3.175.907.098-.704.381-1.185.693-1.458-2.473-.281-5.073-1.236-5.073-5.502 0-1.215.434-2.21 1.144-2.987-.115-.281-.496-1.415.108-2.949 0 0 .933-.299 3.06 1.141a10.63 10.63 0 012.785-.374c.945.004 1.897.128 2.786.375 2.126-1.44 3.058-1.141 3.058-1.141.605 1.534.224 2.668.11 2.949.712.777 1.143 1.772 1.143 2.987 0 4.277-2.603 5.218-5.083 5.494.392.337.741 1.002.741 2.02 0 1.457-.013 2.633-.013 2.992 0 .298.202.644.768.535C20.02 20.78 23.2 16.61 23.2 11.7 23.2 5.347 18.352.5 12 .5z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold ">Services</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a className="hover: transition-colors" href="#services">Automation Strategy</a></li>
                            <li><a className="hover: transition-colors" href="#services">Business Process Automation</a></li>
                            <li><a className="hover: transition-colors" href="#services">Systems Integration</a></li>
                            <li><a className="hover: transition-colors" href="#services">Data & Reporting</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold ">Contact</h4>
                        <ul className="mt-4 space-y-2">
                            <li className="">info@northgateautomation.com</li>
                            <li className="">+1 (555) 123-4567</li>
                            <li className="">123 Business District, Suite 456</li>
                            <li className="">New York, NY 10001</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm ">
                    <p>© {new Date().getFullYear()} Northgate Automation. All rights reserved.</p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover: transition-colors">Privacy</a>
                        <span className="opacity-50">•</span>
                        <a href="#" className="hover: transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}