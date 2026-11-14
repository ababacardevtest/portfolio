import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projets } from "../../data/project";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return projets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata>
{
    const { slug } = await params;
    const projet = projets.find((p) => p.slug === slug);
    return projet ? { title: projet.titre, description: projet.resume } : {};
}

export default async function PageProjet({ params }: Props) {
    const { slug } = await params;
    const projet = projets.find((p) => p.slug === slug);
    if (!projet) notFound();
    return (
        <article className="mx-auto max-w-3xl px-4 py-16">
        <Link href="/projets" className="text-sm text-brand-600 hover:underline">← Retour aux projets</Link>
            <div className="mt-6 m-0 p-2 h-80 rounded-xl bg-linear-to-br from-brand-500 to-brand-700">
                <span className="mt-6 block text-sm font-semibold uppercase tracking-wide text-white">{projet.categorie}</span>
                <h1 className="mt-1 text-4xl font-bold tracking-tight">{projet.titre}</h1>
                <p className="mt-5 text-lg leading-relaxed text-slate-700">
                    {projet.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                        {projet.technos.map((t) => (
                    <li key={t} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{t}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}