"use client";

import Link from "next/link";
import { useState } from "react";

const liens = [
    {href: "/", label: "Accueil"},
    {href: "/projets", label: "Projets"},
    {href: "/contact", label: "Contact"}
];

export default function Navbar(){
    const[ouvert, setOuvert] = useState(false);

    return(
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <Link href="/" className="text-lg font-bold text-brand-700">
                K.A-DIADHIOU<span className="text-slate-900">.dev</span>
                </Link>
                <nav className="hidden gap-8 md:flex">
                    {liens.map((l) => (
                        <Link key={l.href} href={l.href} className="text-slate-600 transition hover:text-brand-600">
                            {l.label}
                        </Link>
                    ))}
                </nav>
                <button className="rounded-md p-2 text-xl md:hidden"
                        aria-label="Ouvrir ou fermer le menu" 
                        aria-expanded={ouvert}
                        onClick={() => setOuvert(!ouvert)}>
                        {ouvert ? "✕" : "☰"}
                </button>
            </div>
            {ouvert && (
                <nav className="border-t border-slate-200 px-4 py-2 md:hidden">
                    {liens.map((l) => (
                        <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOuvert(false)}
                        className="block py-3 text-slate-700">
                        {l.label}
                    </Link>
                ))}
                </nav>
            )}
        </header>
    );
}