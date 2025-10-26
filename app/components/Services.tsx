



export default function Services(){
    return (
        <section className="bg-white text-gray-800 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Unlock Your Business's Potential Through Smart Automation</h1>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        We help you reclaim your time by automating the repetitive tasks that slow you down. From streamlining workflows to integrating complex systems, our solutions are designed to boost productivity, reduce costs, and empower your team to focus on what truly matters.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Service Card 1 */}
                    <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                            <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Process Auditing & Strategy</h2>
                        <p className="text-gray-600">
                           We analyze your existing workflows to find the best opportunities for automation, providing a clear roadmap to efficiency with a focus on maximum ROI.
                        </p>
                    </div>

                    {/* Service Card 2 */}
                    <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                            <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Workflow & Task Automation</h2>
                        <p className="text-gray-600">
                           We build solutions that automate day-to-day tasks like data entry, report generation, and notifications to increase accuracy and save time.
                        </p>
                    </div>

                    {/* Service Card 3 */}
                    <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-6">
                            <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Custom Integration & Development</h2>
                        <p className="text-gray-600">
                            We connect your different software applications and build custom scripts for your unique business challenges, creating a seamless flow of information.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}