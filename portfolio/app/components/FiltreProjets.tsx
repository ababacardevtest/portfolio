"use client";
import { useState } from "react";
import ProjetCard from "./ProjetCard";
import { categories, type Projet } from "../data/project";

export default function FiltreProjets({ projets }: { projets: Projet[] }) {
    const [actif, setActif] = useState<(typeof categories)[number]>("Toutes");
    const visibles = actif === "Toutes" ? projets : projets.filter((p) => p.categorie === actif);
    return (
        <>
        <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
            <button key={c}
                onClick={() => setActif(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${ actif === c ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>
                {c}
            </button>
        ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibles.map((p) => (
            <ProjetCard key={p.slug} projet={p} />
            ))}
        </div>
        {visibles.length === 0 && <p className="mt-8 text-slate-500">Aucun projet dans cette catégorie.</p>}
        </>
    );
}