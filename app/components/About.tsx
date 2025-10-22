


export default function About() {
    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Northgate Automation</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                        We are more than just IT consultants; we are architects of efficiency. We believe every business has untapped potential locked away in its manual processes. Our proven approach helps you unlock it:
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Identify & Analyze</h3>
                        <p className="text-gray-600">
                            We dive deep into your current workflows to pinpoint the most impactful automation opportunities.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Design & Blueprint</h3>
                        <p className="text-gray-600">
                            We create a strategic automation roadmap, selecting the right tools and technologies—from simple scripts to advanced RPA—to fit your specific needs and budget.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Implement & Optimize</h3>
                        <p className="text-gray-600">
                            We build, test, and deploy seamless automation solutions, providing the training and support needed to ensure maximum ROI.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Northgate Automation?</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                                        <p className="text-gray-600">Successful delivery of complex automation projects across various industries</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Tailored Solutions</h4>
                                        <p className="text-gray-600">Custom automation strategies designed specifically for your business needs</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                                        <p className="text-gray-600">Comprehensive training and support to ensure your team maximizes automation benefits</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                                <div className="text-gray-600">Automation Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
                                <div className="text-gray-600">Client Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                                <div className="text-gray-600">Expert Team Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
                                <div className="text-gray-600">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}