'use client';



export default function Hero(){

    function scrollToId(id: string) {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Remove hash from URL while keeping navigation feeling
        history.replaceState(null, '', '/');
    }
    
return (
    <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden">
        <img className="w-full h-full object-cover brightness-80 blur-xs" src="/bg.png" alt="Hero" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-4">Precision Automation for Modern Businesses</h1>
            <p className="text-lg text-center">We build integrations & workflows that take your system from scattered to seamless <br /> so you focus on growth, not grunt work.</p>

            <div className="flex flex-col items-center justify-center mt-4">
                <button onClick={() => scrollToId('contact')} className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">Get Started</button>
            </div>
        </div>
    </div>
)
}