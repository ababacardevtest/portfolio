
import Link from "next/link";
import Button from "./components/Button";
import ProjetCard from "./components/ProjetCard";
import { projets } from "./data/project";

const services = [
  {
    titre: "Site vitrine",
    texte: "Un site rapide, clair et bien référencé pour présenter votre activité.",
  },
  {
    titre: "Application web",
    texte: "Un outil sur mesure, de l'API Spring Boot à l'interface Angular ou Next.js.",
  },
  {
    titre: "Refonte et performance",
    texte: "Audit, accessibilité et optimisation de votre site existant.",
  },
];

export default function Accueil() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <p className="font-medium text-brand-600">
            Développeuse web fullStack - freelance
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Des sites et applications web qui font avancer votre activité.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Je conçois et développe des produits complets, de l&apos;API à
            l&apos;interface.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Discutons de votre projet</Button>
            <Button href="/projets" variant="outline">
              Voir mes projets
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Ce que je fais
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.titre}
                className="rounded-xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-semibold">{s.titre}</h3>
                <p className="mt-2 text-slate-600">{s.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets en vedette */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight">
              Projets récents
            </h2>

            <Link
              href="/projets"
              className="text-brand-600 hover:underline"
            >
              Tout voir →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projets.slice(0, 3).map((p) => (
              <ProjetCard key={p.slug} projet={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
