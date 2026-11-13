import type { Metadata } from "next";
import FiltreProjets from "../components/FiltreProjets";
import { projets } from "../data/project";

export const metadata: Metadata = {
    title: "Projets",
    description: "Sélection de sites et d'applications web réalisés.",
};

export default function PageProjets() {
    return (
    <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-4xl font-bold tracking-tight">Mes projets</h1>
            <p className="mt-3 mb-8 text-slate-600">Filtrez par type de réalisation.</p>
            <FiltreProjets projets={projets} />
        </div>
    </section>
    );
}