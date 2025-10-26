'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact(){

    const router = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<string | null>(null);
    const [showToast, setShowToast] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        setStatus(null);
        try {
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("company", company);
            formData.append("phone", phone);
            formData.append("message", message);
            formData.append("_subject", "New contact from Northgate Automation");
            formData.append("_gotcha", "");

            const res = await fetch(process.env.NEXT_PUBLIC_FORM_URL as string, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (res.ok) {
                setFirstName("");
                setLastName("");
                setEmail("");
                setCompany("");
                setPhone("");
                setMessage("");
                setStatus("Thanks! Your message has been sent.");
                setShowToast(true);
                // Hide toast then redirect to home
                setTimeout(() => {
                    setShowToast(false);
                    router.push("/");
                }, 1200);
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch (err) {
            setStatus("Network error. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section className="bg-white py-20">
            {/* Toast */}
            <div aria-live="polite" className={`fixed inset-x-0 top-5 z-50 flex justify-center transition-opacity duration-300 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="rounded-lg bg-green-600 text-white shadow-lg px-4 py-3">
                    Sent successfully
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h2>
                    <p className="text-gray-600 mt-3">Tell us about your project and we’ll get back within 1 business day.</p>
                    {status && (
                        <p className="mt-3 text-sm text-gray-600">{status}</p>
                    )}
                </div>

                <div>
                    <div className="relative rounded-2xl border border-gray-200 shadow-sm bg-white">
                        <div className="rounded-2xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Left: Image */}
                                <div className="hidden lg:block ">
                                    <img src="/contact.png" alt="Contact" className="h-full w-full object-cover" />
                                </div>

                                {/* Right: Form */}
                                <div className="bg-white p-6 sm:p-8">
                                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ">
                                        {/* Row 1: First Name, Second Name */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                                <input id="firstName" name="firstName" type="text" placeholder="Jane" required value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                                <input id="lastName" name="lastName" type="text" placeholder="Doe" required value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                            </div>
                                        </div>

                                        {/* Row 2: Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                            <input id="email" name="email" type="email" placeholder="you@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                        </div>

                                        {/* Row 3: Company */}
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                                            <input id="company" name="company" type="text" placeholder="Acme Inc." value={company} onChange={(e) => setCompany(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                        </div>

                                        {/* Row 4: Phone */}
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                            <input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                                        </div>

                                        {/* Row 5: Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                            <textarea id="message" name="message" rows={5} placeholder="Tell us about your goals, timeline, and constraints or call back" required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-600">We’ll never share your info. Privacy-friendly by design.</div>
                                            <button type="submit" disabled={submitting} className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 font-semibold text-white shadow-sm hover:bg-gray-800 active:bg-gray-900 transition cursor-pointer disabled:opacity-50">
                                                {submitting ? "Sending..." : "Send Message"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}