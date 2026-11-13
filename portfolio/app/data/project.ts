export type Projet = {
    slug:string;
    titre:string;
    categorie: "Vitrine" | "Application" | "E-commerce";
    resume:string;
    description:string;
    technos: string[];
};

export const categories:string[] = [
    "Toutes",
    "Vitrine",
    "Application",
    "E-commerce"
] as const;

export const projects:Project[] = [
    {
        slug: "restaurant-teranga",
        titre: "Restaurant Teranga",
        categorie: "Vitrine",
        resume: "Site vitrine avec menu et réservation.",
        description: "Refonte complète du site d'un restaurant : menu en ligne, galerie photo et formulaire de réservation. Temps de chargement divisé par trois.",
        technos: ["Next.js", "Tailwind CSS"],
    },
    {
        slug: "gestion-stock",
        titre: "Gestion de stock",
        categorie: "Application",
        resume: "Tableau de bord de suivi des stocks.",
        description: "Application interne pour suivre entrées, sorties et alertes de rupture, branchée sur une API REST Spring Boot.",
        technos: ["Angular", "Spring Boot", "PostgreSQL"],
    },
    {
        slug: "boutique-wax",
        titre: "Boutique Wax",
        categorie: "E-commerce",
        resume: "Boutique en ligne de tissus.",
        description: "Catalogue, panier et paiement en ligne pour une marque de tissus africains.",
        technos: ["Next.js", "Stripe"],
    },
    {
        slug: "cabinet-avocats",
        titre: "Cabinet d'avocats",
        categorie: "Vitrine",
        resume: "Site institutionnel sobre et rapide.",
        description: "Présentation des équipes et des domaines d'expertise, optimisée pour le référencement local.",
        technos: ["HTML", "CSS", "Bootstrap"],
    },
];