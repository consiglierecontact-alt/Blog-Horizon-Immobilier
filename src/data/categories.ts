/**
 * Catégories éditoriales du blog.
 * Source de vérité partagée entre Header, Footer, Pill, pages de catégorie.
 * Modifier ici propage partout.
 */
export interface Category {
  /** Slug utilisé dans l'URL : /blog/categorie/<slug> */
  slug: string;
  /** Libellé affiché */
  label: string;
  /** Description courte pour la page de catégorie et les meta SEO */
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: "strategie",
    label: "Stratégie",
    description:
      "Choix de montage, structuration de patrimoine, arbitrages long terme pour investisseurs.",
  },
  {
    slug: "fiscalite",
    label: "Fiscalité",
    description:
      "Dispositifs fiscaux (Pinel, LMNP, monument historique), optimisation et conformité.",
  },
  {
    slug: "marche",
    label: "Marché",
    description:
      "Analyses de marché par ville et par segment, prix, rendements, perspectives.",
  },
  {
    slug: "financement",
    label: "Financement",
    description:
      "Stratégies d'emprunt, effet de levier, montage bancaire et capacité d'investissement.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function categoryLabel(slug: string): string {
  return getCategory(slug)?.label ?? slug;
}
