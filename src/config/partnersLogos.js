/**
 * Logos partenaires
 *
 * ═══════════════════════════════════════════════════════════════
 *  BANDEAU EN-TÊTE (5 partenaires prioritaires)
 *  → Modifier uniquement MAJOR_PARTNER_LOGOS (ordre + fichiers)
 *  Affiché sur toutes les pages via : Layout → TopPartnersBar
 * ═══════════════════════════════════════════════════════════════
 *
 *  BAS DE PAGE (autres partenaires)
 *  → Modifier SECONDARY_PARTNER_LOGOS
 *  Affiché via : Layout → FooterPartnersStrip
 *
 *  Fichiers images : src/assets/images/partenaire/
 * ═══════════════════════════════════════════════════════════════
 */

import logoA from '../assets/images/partenaire/A.jpeg';
import logoB from '../assets/images/partenaire/B.jpeg';
import logoC from '../assets/images/partenaire/C.jpeg';
import logoD from '../assets/images/partenaire/D.jpeg';
import logoE from '../assets/images/partenaire/E.png';
import logoF from '../assets/images/partenaire/F.png';
import logoG from '../assets/images/partenaire/G.png';
import logoH from '../assets/images/partenaire/H.png';
import logoI from '../assets/images/partenaire/I.png';
import logoJ from '../assets/images/partenaire/J.png';
import logoK from '../assets/images/partenaire/K.png';
import logoL from '../assets/images/partenaire/L.png';
import logoM from '../assets/images/partenaire/M.png';
import logoN from '../assets/images/partenaire/N.png';
import logoO from '../assets/images/partenaire/O.png';
import logoP from '../assets/images/partenaire/P.png';
import logoQ from '../assets/images/partenaire/Q.png';
import logoR from '../assets/images/partenaire/R.png';
import logoS from '../assets/images/partenaire/S.png';
import logoT from '../assets/images/partenaire/T.png';
import logoU from '../assets/images/partenaire/U.png';
import logoV from '../assets/images/partenaire/V.png';
import logoW from '../assets/images/partenaire/W.jpeg';
import logoX from '../assets/images/partenaire/X.jpeg';
import logoAA from '../assets/images/partenaire/AA.png';
import logoBB from '../assets/images/partenaire/BB.png';

/** Les 5 logos affichés sous le menu sur TOUTES les pages */
export const MAJOR_PARTNER_LOGOS = [
  logoX, // 1. UAEL — Union des Associations d'Élus Locaux
  logoE, // 2. UNCCIAS
  logoI, // 3. Enabel
  logoAA, // 4. Sablux Group
  logoBB // 5. NOTTO DIOBASSE Smart City
];

/** Logos défilants en bas de page (tous les autres) */
export const SECONDARY_PARTNER_LOGOS = [
  logoF,
  logoG,
  logoH,
  logoI,
  logoJ,
  logoK,
  logoL,
  logoM,
  logoN,
  logoO,
  logoP,
  logoQ,
  logoR,
  logoS,
  logoT,
  logoU,
  logoV,
  logoW,
  logoX
];

/** Tous les logos (section complète page Partenaires par ex.) */
export const ALL_PARTNER_LOGOS = [...MAJOR_PARTNER_LOGOS, ...SECONDARY_PARTNER_LOGOS];
