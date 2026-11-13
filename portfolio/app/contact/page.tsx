import type { Metadata } from "next";
import FormContact from "../components/FormContact";

export const metadata: Metadata = { title: "Contact", description: "Parlons de votre projet web." };
export default function PageContact() {
    return (
    <section className="mx-auto max-w-xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 mb-8 text-slate-600">Décrivez votre besoin, je reviens vers vous rapidement.</p>
        <FormContact />
    </section>
    );
}