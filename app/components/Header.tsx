'use client';
import Link from "next/link";

function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Remove hash from URL while keeping navigation feeling
    history.replaceState(null, '', '/');
}

export default function Header(){

    return(
        <div className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center py-5">
                <Link href="/" className="flex items-center">
                    <img src="/logo2.png" alt="Northgate Automation" className="h-10 w-auto mr-3" />
                    <span className="text-2xl font-bold text-slate-100">Northgate Automation</span>
                </Link>
                <ul className="flex space-x-6">
                    <li><button onClick={() => scrollToId('home')} className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300 text-lg">Home</button></li>
                    <li><button onClick={() => scrollToId('about')} className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300 text-lg">About</button></li>
                    <li><button onClick={() => scrollToId('services')} className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300 text-lg">Services</button></li>
                    <li><button onClick={() => scrollToId('contact')} className="cursor-pointer text-slate-300 hover:text-white transition-colors duration-300 text-lg">Contact</button></li>
                </ul>
            </div>
        </div>
    )
}