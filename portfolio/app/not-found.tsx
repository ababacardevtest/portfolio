import Link from "next/link";

export default function NotFound() {
    return (
        <section className="mx-auto max-w-xl px-4 py-32 text-center">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="mt-4 text-slate-600">Cette page n'existe pas.</p>
            <Link href="/" className="mt-6 inline-block text-brand-600 hover:underline">Retour à l'accueil</Link>
        </section>
    );
}