

export default function Footer(){

    return(
        <footer className="bg-gray-200 text-gray-700 rounded-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center">
                            <img src="/logo2.png" alt="Northgate Automation" className="h-9 w-auto mr-3" />
                            <h3 className="text-2xl font-bold text-gray-900">Northgate Automation</h3>
                        </div>
                        <p className="mt-4 max-w-lg text-gray-600">
                            We design automation and integration solutions that streamline operations, reduce costs, and unlock growth for modern businesses.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
                        <ul className="mt-4 space-y-2">
                            <li>info@northgateautomation.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>123 Business District, Suite 456</li>
                            <li>New York, NY 10001</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row items-center justify-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Northgate Automation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}




