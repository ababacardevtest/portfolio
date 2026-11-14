"use client";
import { useState } from "react";

export default function FormContact() {
    const [form, setForm] = useState({ nom: "", email: "", message: "" });
    const [erreur, setErreur] = useState("");
    const [envoye, setEnvoye] = useState(false);

    function changer(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function soumettre(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (form.message.trim().length < 10) {
            setErreur("Le message doit contenir au moins 10 caractères.");            
            return;
        }
        setErreur("");
        setEnvoye(true);
    }

    if (envoye) {
        return (
            <div className="rounded-xl bg-green-50 p-6 text-green-800">
                Merci {form.nom}, votre message est bien reçu. Je vous réponds sous 24 h.
            </div>
        );
    }

    const champ = "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
    
    return (
        <form onSubmit={soumettre} className="space-y-5">
            <label className="block text-sm font-medium">
                Nom
                <input name="nom" required value={form.nom} onChange={changer} className={champ} />
            </label>
            <label className="block text-sm font-medium">
                Email
                <input name="email" type="email" required value={form.email}
                onChange={changer} className={champ} />
            </label>
            <label className="block text-sm font-medium">
                Message
                <textarea name="message" rows={5} required value={form.message}
                onChange={changer} className={champ} />
            </label>
            {erreur && <p role="alert" className="text-sm text-red-600">{erreur}</p>}
            <button type="submit" className="rounded-lg bg-brand-600 px-5 py-2.5 font-medium text-white transition hover:bg-brand-700">
                Envoyer
            </button>
        </form>
    );
}