import Link from "next/link";
import { Projet } from "../data/project";

export default function ProjetCard(
    {projet} : {projet : Projet}
) {
    return(
        <Link href={`/projets/${projet.slug}`}
            className="group block overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-lg">
            <div className="h-40 bg-linear-to-br from-brand-500 to-brand-700">
                <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                        {projet.categorie}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold group-hover:text-brand-600">{projet.titre}</h3>
                    <p className="mt-2 text-sm text-slate-600">{projet.resume}</p>
                </div>
            </div>
        </Link>
    );
}
