



export default function Services(){
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Automation Services</h1>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                        At Northgate Automation, we specialize in transforming businesses by eliminating repetitive tasks and streamlining complex workflows. Our services are designed to deliver measurable results: reduced costs, increased accuracy, and more time for your team to focus on strategic growth. Explore how we can build a more efficient future for your business.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* 1. Automation Strategy & Discovery */}
                    <div className="bg-gray-50 rounded-xl p-8 lg:p-10 shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Automation Strategy & Discovery</h2>
                        <p className="text-gray-700 mb-4">
                            Don't know where to start? Our Automation Strategy service is the perfect first step. We partner with you to analyze your current business processes, identify the highest-impact automation opportunities, and create a clear, prioritized roadmap. We provide the "what," "why," and "how" before any work begins.
                        </p>
                        <p className="text-gray-600 italic mb-6">
                            Ideal for: Businesses that are new to automation or are unsure which processes will yield the best return on investment.
                        </p>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Activities:</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><span className="font-medium">Process Analysis & Mapping:</span> A deep dive into your current workflows.</li>
                                <li><span className="font-medium">Opportunity Identification:</span> Pinpointing bottlenecks and repetitive manual tasks.</li>
                                <li><span className="font-medium">ROI Calculation:</span> Estimating the time and cost savings for each potential project.</li>
                                <li><span className="font-medium">Technology Recommendation:</span> Selecting the right tools for the job.</li>
                                <li><span className="font-medium">Phased Implementation Roadmap:</span> A step-by-step plan for your automation journey.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. Business Process Automation (BPA) */}
                    <div className="bg-gray-50 rounded-xl p-8 lg:p-10 shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Business Process Automation (BPA)</h2>
                        <p className="text-gray-700 mb-4">
                            We design and implement solutions to handle your routine, rule-based tasks. Through Business Process Automation, we re-engineer your workflows to run more efficiently, often using the software you already own. This service focuses on automating processes like data entry, report generation, and invoice processing to operate 24/7 with perfect accuracy.
                        </p>
                        <p className="text-gray-600 italic mb-6">
                            Ideal for: Departments like Finance, HR, and Operations that are burdened with high-volume digital paperwork and data management.
                        </p>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Activities:</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><span className="font-medium">Workflow Automation:</span> Streamlining tasks within your existing software (e.g., Microsoft 365, Google Workspace).</li>
                                <li><span className="font-medium">Data Scraping & Entry:</span> Automating the collection and input of information from websites and documents.</li>
                                <li><span className="font-medium">Automated Report Generation:</span> Consolidating data from multiple sources into scheduled reports.</li>
                                <li><span className="font-medium">Task Management Automation:</span> Ensuring sequential tasks are assigned and completed without manual intervention.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 3. Custom Automation & Systems Integration */}
                    <div className="bg-gray-50 rounded-xl p-8 lg:p-10 shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Custom Automation & Systems Integration</h2>
                        <p className="text-gray-700 mb-4">
                            Sometimes, an off-the-shelf solution doesn't exist. Our custom automation service is for your most unique challenges. We write custom scripts and build API integrations to connect disparate systems, creating a seamless flow of data across your entire software ecosystem. If two applications need to talk to each other, we can build the bridge.
                        </p>
                        <p className="text-gray-600 italic mb-6">
                            Ideal for: Businesses with legacy systems, specialized industry software, or complex workflows that standard tools can't handle.
                        </p>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Activities:</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><span className="font-medium">API Integration:</span> Connecting your CRM, ERP, and other business applications.</li>
                                <li><span className="font-medium">Custom Python/PowerShell Scripting:</span> Creating powerful, tailored scripts to automate specific tasks.</li>
                                <li><span className="font-medium">Database Automation:</span> Automating data cleanup, migration, and backup tasks.</li>
                                <li><span className="font-medium">Workflow Orchestration:</span> Building a central system to manage a sequence of automated tasks across multiple platforms.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}