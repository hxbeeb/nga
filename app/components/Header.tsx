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
        <div className="sticky top-0 z-50 bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">Northgate Automations</Link>
                <ul className="flex space-x-4">
                    <li><button onClick={() => scrollToId('home')} className="hover:text-gray-400">Home</button></li>
                    <li><button onClick={() => scrollToId('about')} className="hover:text-gray-400">About</button></li>
                    <li><button onClick={() => scrollToId('services')} className="hover:text-gray-400">Services</button></li>
                    <li><button onClick={() => scrollToId('contact')} className="hover:text-gray-400">Contact</button></li>
                </ul>
            </div>
        </div>
    )
}