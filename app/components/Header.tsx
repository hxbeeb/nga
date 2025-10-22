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
        <div className="sticky top-0 z-50 bg-bg-dark py-4 text-secondary">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <img src="/logo2.png" alt="Northgate Automation" className="h-8 w-auto mr-2" />
                    <span className="text-2xl font-bold">Northgate Automations</span>
                </Link>
                <ul className="flex space-x-4">
                    <li><button onClick={() => scrollToId('home')} className="cursor-pointer hover:opacity-70">Home</button></li>
                    <li><button onClick={() => scrollToId('about')} className="cursor-pointer hover:opacity-70">About</button></li>
                    <li><button onClick={() => scrollToId('services')} className="cursor-pointer hover:opacity-70">Services</button></li>
                    <li><button onClick={() => scrollToId('contact')} className="cursor-pointer hover:opacity-70">Contact</button></li>
                </ul>
            </div>
        </div>
    )
}