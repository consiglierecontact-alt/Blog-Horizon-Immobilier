---
name: Horizon Immobilier
description: Design system d'un cabinet de conseil en investissement immobilier — bleu institutionnel, laiton, Fraunces.
colors:
  ink: "#1d2330"
  bg: "#ffffff"
  surface: "#f7f8fa"
  surface-deep: "#eef1f6"
  primary: "#1e3a5f"
  primary-deep: "#15294a"
  primary-soft: "#e7ecf3"
  accent: "#b8884a"
  accent-deep: "#9a6e34"
  accent-soft: "#f0e2c8"
  muted: "#5a647a"
  rule: "#dde1ea"
  success: "#3f7d54"
typography:
  display:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 450
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
  data:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  lg: "8px"
spacing:
  "3xs": "2px"
  "2xs": "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  "4xl": "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
    typography: "{typography.label}"
  button-accent-hover:
    backgroundColor: "{colors.accent-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-ghost-hover:
    backgroundColor: "{colors.primary-soft}"
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  card-article:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "0px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
---

# Design System: Horizon Immobilier

## 1. Overview

**Creative North Star: "The Private Boardroom"**

Ce design system incarne l'autorité tranquille d'un cabinet de conseil patrimonial — la pièce où l'on parle de plusieurs centaines de milliers d'euros à voix basse, autour d'une table en bois sombre, avec un seul crayon et des chiffres sourcés. Loin de l'agence immobilière et de ses carrousels de biens surexposés, loin du courtier en ligne et de ses promesses clignotantes. Ici, le silence visuel est un message : *on ne vous emballe pas, on vous informe.*

La palette repose sur un bleu institutionnel profond (codes banque privée, notariat, rapports annuels) posé sur un blanc pur — choix délibéré contre la tentation du warm-cream AI, qui aurait affadi le registre. Un accent laiton, utilisé avec parcimonie (≤10% de surface), apporte la seule chaleur admissible : celle du métal brossé d'une plaque de porte, pas celle d'un coupon-promo. Les longueurs de ligne sont maîtrisées (≤75 caractères), l'interlignage généreux, les contrastes au-dessus du minimum WCAG AA — la lisibilité est ici perçue comme de la compétence.

Le mouvement est absent par défaut. Aucune entrée chorégraphiée, aucun parallaxe, aucun compteur animé. Les transitions d'état (hover, focus) sont courtes (150–200ms) et servent uniquement à confirmer une interaction. `prefers-reduced-motion` est respecté partout, y compris pour ces transitions. Le système rejette explicitement : hero avec carrousel de biens, eyebrows tout en majuscules spaced-out, gradient text sur les titres, gray-on-gray body text, icônes Lucide génériques dans des cartes bicolores, FOMO (compte à rebours, stock limité, pop-up d'urgence).

**Key Characteristics:**
- Bleu institutionnel profond + blanc pur + accent laiton ≤10%
- Typographie éditoriale : Fraunces (display) + Inter (body) + JetBrains Mono (data)
- Flat par défaut, profondeur par tonalité (pas par ombre)
- Angles très peu arrondis (2–8px) — institutionnel, pas ludique
- Contrastes WCAG AA strict, AA renforcé sur body
- Motion quasi-absent, lisibilité maximale, sobriété comme preuve de sérieux

## 2. Colors: The Boardroom Palette

Palette restreinte à deux couleurs de marque (bleu primaire + laiton accent) posées sur des neutres froids. Stratégie **Restrained** : les neutres portent 80% de la surface, le bleu 10–15%, le laiton ≤10%.

### Primary

- **Ink Blue** (`#1d2330`, `oklch(0.22 0.03 250)`) : couleur de body text. Bleu nuit presque noir avec une infime teinte froide — pas un gris neutre. Contraste ~13:1 sur blanc. L'encre du cabinet.
- **Institutional Blue** (`#1e3a5f`, `oklch(0.32 0.08 250)`) : couleur primaire de marque. Header/footer, titres alternés sur sections sombres, liens profonds, boutons primaires. C'est le bleu des rapports annuels et des plaques de porte laquées.
- **Deep Boardroom** (`#15294a`, `oklch(0.25 0.07 250)`) : variation sombre du primaire. États hover, sections hero, CTA en pied d'article. À utiliser pour les zones sombres pleine surface.
- **Primary Soft** (`#e7ecf3`, `oklch(0.93 0.015 250)`) : bleu très pâle pour fonds de section alternés, surlignage discret de citations, états hover de boutons ghost.

### Secondary

- **Brushed Brass** (`#b8884a`, `oklch(0.68 0.12 85)`) : accent de marque, laiton brossé. Réservé aux CTAs premium, aux chiffres clés soulignés, aux hairlines d'accent sous les titres, aux liens d'article actifs. Jamais en grande surface. Texte blanc dessus réservé aux CTA larges (≥14px, padding généreux).
- **Deep Brass** (`#9a6e34`, `oklch(0.55 0.10 85)`) : variation sombre du laiton pour états hover. Permet de garder un contraste suffisant avec texte blanc sur hover.
- **Brass Soft** (`#f0e2c8`, `oklch(0.93 0.04 85)`) : laiton très pâle pour badges, pills de catégorie, surlignage de chiffres clés en fond clair.

### Neutral

- **Pure White** (`#ffffff`, `oklch(1 0 0)`) : fond principal. Pas de warm-cream, pas de off-white. Stripe/Notion/Linear style — la chaleur vient de l'accent, pas de la surface.
- **Paper** (`#f7f8fa`, `oklch(0.98 0.005 250)`) : surface de cartes, panneaux, sections alternées. Blanc tiré 10–15% vers l'encre, légère teinte froide.
- **Paper Deep** (`#eef1f6`, `oklch(0.95 0.008 250)`) : sections plus marquées, footer clair, tableaux.
- **Muted Slate** (`#5a647a`, `oklch(0.55 0.02 250)`) : texte secondaire, captions, métadonnées. Contraste ~5:1 sur blanc.
- **Rule** (`#dde1ea`, `oklch(0.90 0.01 250)`) : hairlines, séparateurs, bordures de champs.

### Named Rules

**The 10% Brass Rule.** L'accent laiton ne couvre jamais plus de 10% de la surface visible d'un écran. Sa rareté est ce qui le rend précieux : un bouton CTA, une hairline sous un titre, un chiffre souligné — pas un fond, pas un bandeau, jamais deux accents sur le même écran.

**The No Warm-Cream Rule.** Le fond est blanc pur ou tiré vers le bleu froid. Toute tentation de warm-cream, off-white crème, beige AI est interdite. La chaleur du système vient uniquement du laiton, à dose homéopathique. Poser de la chaleur dans la surface ET dans l'accent est le cliché AI par excellence.

## 3. Typography: Editorial Authority

**Display Font:** Fraunces (variable serif, fallback `Georgia, 'Times New Roman', serif`)
**Body Font:** Inter (humanist sans, fallback `system-ui, -apple-system, sans-serif`)
**Data Font:** JetBrains Mono (mono, fallback `ui-monospace, monospace`)

**Character:** Le couple Fraunces × Inter porte l'autorité éditoriale d'un rapport patrimonial — Fraunces apporte le sérieux d'un titre du Financial Times, Inter la lisibilité d'une interface moderne. Le contraste entre les deux signale immédiatement : *ce n'est pas un blog lifestyle, ce n'est pas non plus une admin UI — c'est de l'expertise éditoriale lisible.* JetBrains Mono est réservé aux données chiffrées (tableaux de rendement, calculs fiscaux) où l'alignement tabulaire compte.

### Hierarchy

- **Display** (Fraunces 400, `clamp(2.5–4.5rem)`, line-height 1.05, letter-spacing -0.02em) : hero de page d'accueil, titres d'article en hero. Une seule occurrence par page.
- **Headline** (Fraunces 450, `clamp(1.75–2.5rem)`, line-height 1.15, -0.015em) : titres de section, H2 dans les pages vitrines.
- **Title** (Fraunces 500, `clamp(1.25–1.5rem)`, line-height 1.3, -0.01em) : H3, titres de carte article, sous-sections.
- **Body** (Inter 400, 1.0625rem / 17px, line-height 1.7) : texte courant des articles et pages. Longueur de ligne ≤75 caractères dans la prose d'article (max-width ~65ch).
- **Body Small** (Inter 400, 0.9375rem / 15px, line-height 1.6) : métadonnées, extraits de carte, footer.
- **Label** (Inter 600, 0.75rem / 12px, letter-spacing 0.08em, uppercase) : eyebrows rares (uniquement sur catégories de preuve, jamais en décoration), libellés de boutons, légendes de tableau.
- **Data** (JetBrains Mono 500, 0.95rem, tabular-nums) : chiffres financiers, tableaux de rendement, code fiscal.

### Named Rules

**The 75-Character Rule.** Aucune colonne de prose d'article ne dépasse 75 caractères. La longueur de ligne est un signal de respect envers le lecteur — un investisseur qui lit 2000 mots d'analyse fiscale a droit au confort optimal. Au-delà de 75 caractères, la lecture fatigue et la crédibilité éditoriale chute.

**The Eyebrow Restriction Rule.** Les eyebrows en uppercase letter-spaced (label au-dessus d'un titre) sont autorisés uniquement quand ils portent une information sémantique réelle : un numéro de section, un nom de catégorie, une date. Jamais comme décoration. "NOTRE APPROCHE" au-dessus d'un titre "Notre approche" est l'anti-pattern absolu.

## 4. Elevation: Flat by Default

Le système est **flat par défaut**. La profondeur se construit par tonalité (surfaces Paper/Paper Deep qui se distinguent du blanc) et par hairlines (1px Rule), pas par ombre. Aucune ombre portée sur les cartes au repos — une carte se distingue de son fond par sa surface Paper et son bord 1px Rule, pas par un drop-shadow.

Les seules ombres admissises sont des réponses à un état : hover sur une carte interactive, focus sur un champ. Encore dans ce cas, elles restent très discrètes (1px blur, opacité faible).

### Shadow Vocabulary

- **Resting** : aucune. Flat.
- **Hover Lift** (`box-shadow: 0 1px 3px rgba(29, 35, 48, 0.08)`) : sur cartes d'article interactives au survol. 1px de blur, opacité 8%. À peine perceptible — confirme l'interactivité, ne décore pas.
- **Focus Ring** (`box-shadow: 0 0 0 3px oklch(0.68 0.12 85 / 0.4)` + outline natif) : sur tous les éléments focusables. Laiton translucide pour rester dans la marque.

### Named Rules

**The Flat-By-Default Rule.** Les surfaces sont flat au repos. Les ombres apparaissent uniquement comme réponse à un état (hover, focus) — jamais comme décoration ou pour "donner de la profondeur" à une composition. Si une carte a besoin d'ombre pour se distinguer, c'est que sa surface ou son bord est mal défini.

## 5. Components

### Buttons

- **Shape:** angles quasi droits (radius 2px), padding généreux 14×28px, typo label Inter 600 uppercase 12px letter-spacing 0.08em. Aucun effet décoratif.
- **Primary** (CTA RDV conseil, envoi de formulaire) : `background Institutional Blue`, `text white`, hover `Deep Boardroom`. Transition 150ms `ease-out`. Texte blanc, contraste ~9:1.
- **Accent** (CTA premium « Estimation patrimoniale ») : `background Brushed Brass`, `text white`, hover `Deep Brass`. Réservé au CTA secondaire le plus précieux (lead magnet). Jamais deux boutons accent sur la même page.
- **Ghost** (navigation secondaire, retour) : `background transparent`, `text Institutional Blue`, bord 1px Rule, hover `background Primary Soft`. Pour les actions tertiaires.
- **Disabled** : opacité 0.45, curseur `not-allowed`. Jamais de couleur spécifique.

### Chips / Pills (catégories d'article)

- **Style** : `background Brass Soft`, `text Deep Brass`, `padding 4px 10px`, `rounded 4px`, typo label 11px. Pas de bord.
- **State** : état actif (catégorie filtrée) → `background Brushed Brass`, `text white`. Jamais de chips gris ou colorés arbitrairement.

### Cards / Article Cards

- **Corner Style** : radius 8px (le seul endroit où l'arrondi est un peu généreux).
- **Background** : `Pure White` par défaut, posé sur une section `Paper` pour contraste.
- **Shadow Strategy** : flat au repos, `Hover Lift` au survol (cf. Elevation).
- **Border** : `1px Rule`.
- **Internal Padding** : 24px.
- **Structure** : image hero (ratio 16/9, neutre) → corps (pill catégorie en haut, titre Fraunces Title, extrait Body Small 2 lignes, méta date · lecture en Muted Slate en bas).

### Inputs / Fields

- **Style** : `background Pure White`, `border 1px Rule`, `rounded 2px`, `padding 12px 16px`, typo body Inter.
- **Focus** : `border Institutional Blue` + `Focus Ring` laiton. Jamais de glow coloré.
- **Error** : `border #c44`, message en `#a32` sous le champ. Pas d'icône décorative.
- **Labels** : au-dessus du champ, typo label Inter 600 12px, `color ink`. Pas de placeholder qui remplace un label.

### Navigation

- **Style** : header sticky, `background Pure White` avec `border-bottom 1px Rule`. Logo texte Fraunces Title à gauche, menu Inter 600 14px au centre/droite, CTA primary à l'extrême droite.
- **States** : lien de nav `color ink`, hover `color Institutional Blue` + hairline 2px Brushed Brass sous le texte (état actif identique). Pas de fond au hover.
- **Mobile** : hamburger sobre (3 traits 1px), menu plein écran `background Pure White`, liens Fraunces Headline empilés. Pas d'animation chorégraphiée.

### Figure (signature component)

- **Usage** : chiffre clé mis en avant dans les sections de preuve (« 250+ investisseurs accompagnés », « 12 ans d'expertise », « 8,4% rendement moyen »).
- **Structure** : chiffre en Fraunces Display 400 `clamp(2.5–4rem)` `color Institutional Blue` + optional unité en Inter 600 + label en Inter 400 14px `color Muted Slate` en dessous. Hairline 2px Brushed Brass de 32px sous le chiffre.
- **Philosophie** : un chiffre sans source est une promesse, pas une preuve. Chaque Figure devrait pouvoir être sourcée.

## 6. Do's and Don'ts

### Do:

- **Do** respecter la **10% Brass Rule** : le laiton couvre ≤10% de la surface visible, jamais en bandeau pleine largeur.
- **Do** garder le body text en `Ink Blue` sur `Pure White` ou `Paper` — contraste ~13:1, lisibilité maximale pour les analyses longues.
- **Do** limiter la prose d'article à 65–75 caractères de largeur (`max-width: 65ch`) — respect du lecteur.
- **Do** sourcer chaque chiffre mis en avant : label ou note renvoyant à une source nommée (INSEE, Notaires de France, méthodologie interne).
- **Do** utiliser Fraunces uniquement pour les titres et chiffres clés ; Inter porte tout le reste. Le contraste des deux familles est la signature.
- **Do** poser le focus visible (Focus Ring laiton 3px) sur tout élément interactif — navigation clavier obligatoire.
- **Do** respecter `prefers-reduced-motion` : aucune transition décorative si l'utilisateur l'a demandé.

### Don't:

- **Don't** utiliser de warm-cream / off-white / beige en fond. Le fond est `Pure White` ou `Paper` (tiré vers le bleu froid) — jamais vers le chaud.
- **Don't** faire de hero avec carrousel de biens immobiliers, photos d'intérieur Pinterest, ou video background floue — Horizon vend du conseil, pas du stock (anti-référence PRODUCT.md).
- **Don't** utiliser de gradient text sur les titres, d'eyebrows uppercase spaced-out décoratifs, ou d'icônes Lucide génériques dans des cartes bicolores — anti-patterns AI explicites.
- **Don't** écrire de gray-on-gray body text (texte `Muted Slate` sur `Paper` ne convient que pour les métadonnées, jamais pour le corps d'article).
- **Don't** utiliser de pop-up d'urgence, compte à rebours, badge « stock limité », FOMO — destructeur de crédibilité patrimoniale (anti-référence courtier en ligne).
- **Don't** dépasser radius 8px — le système est institutionnel, pas ludique. Pas de `rounded-full`, pas de `rounded-2xl`.
- **Don't** poser deux boutons accent laiton sur la même page — un seul CTA premium par vue.
- **Don't** animer les chiffres clés au scroll (compteur progressif) — un chiffre qui se construit ressemble à une promesse commerciale, pas à une donnée.
