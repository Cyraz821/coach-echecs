/* =====================================================
   CHECKLIST MENTALE GLOBALE (AFFICHÉE À CHAQUE COUP)
===================================================== */
const checklistMentale = [
  "Roi en sécurité ?",
  "Pièce protégée ?",
  "Développement ?"
];

/* =====================================================
   OUVERTURES BLANCS — TOUTES (20 COUPS CHACUNE)
===================================================== */
const ouverturesBlancs = {

  /* -------- SYSTÈME DE LONDRES -------- */
  london: {
    nom: "Système de Londres",
    objectif: "Structure solide, répétable, peu de théorie",
    coups: [
      { coup: "d4", concret: "Le pion dame avance de deux cases" },
      { coup: "Bf4", concret: "Le fou de gauche sort avant e3" },
      { coup: "e3", concret: "Ouvre le fou du roi" },
      { coup: "Nf3", concret: "Développement naturel du cavalier" },
      { coup: "Bd3", concret: "Le fou vise l’aile roi" },
      { coup: "0-0", concret: "Le roi est mis en sécurité" },
      { coup: "Nbd2", concret: "Complète le développement" },
      { coup: "c3", concret: "Soutient le centre d4–e4" },
      { coup: "Re1", concret: "Tour derrière le pion e" },
      { coup: "e4", concret: "Prend fermement le centre" },
      { coup: "h3", concret: "Empêche Bg4 ou Ng4" },
      { coup: "Qc2", concret: "Soutient le pion e4" },
      { coup: "Nf1", concret: "Redéploiement du cavalier" },
      { coup: "Ng3", concret: "Prépare une attaque sur le roi" },
      { coup: "e5", concret: "Gain d’espace au centre" },
      { coup: "Bg5", concret: "Clouage potentiel" },
      { coup: "Rad1", concret: "Tour sur colonne centrale" },
      { coup: "h4", concret: "Début d’attaque à l’aile roi" },
      { coup: "Nh2", concret: "Repositionnement défensif" },
      { coup: "f4", concret: "Ouverture de lignes pour l’attaque" }
    ]
  },

  /* -------- OUVERTURE ITALIENNE -------- */
  italienne: {
    nom: "Ouverture Italienne",
    objectif: "Développement rapide et pression sur f7",
	erreurs: [
    "Sortir la dame trop tôt",
    "Oublier le roque",
    "Avancer trop de pions sans développer"
  ],
	
	
	
    coups: [
      { coup: "e4", concret: "Le pion du roi prend le centre" },
      { coup: "Nf3", concret: "Attaque le pion e5" },
      { coup: "Bc4", concret: "Le fou vise la case f7" },
      { coup: "0-0", concret: "Le roi est en sécurité" },
      { coup: "d3", concret: "Structure solide au centre" },
      { coup: "c3", concret: "Prépare la poussée d4" },
      { coup: "Re1", concret: "Tour au centre" },
      { coup: "h3", concret: "Empêche Bg4" },
      { coup: "Nbd2", concret: "Développement du cavalier" },
      { coup: "Nf1", concret: "Redéploiement vers g3" },
      { coup: "Ng3", concret: "Pression sur l’aile roi" },
      { coup: "h4", concret: "Gain d’espace offensif" },
      { coup: "Bg5", concret: "Clouage du cavalier" },
      { coup: "Qe2", concret: "Coordination des pièces" },
      { coup: "Rad1", concret: "Tour active" },
      { coup: "d4", concret: "Ouverture du centre" },
      { coup: "Bb3", concret: "Repli du fou en sécurité" },
      { coup: "c4", concret: "Expansion centrale" },
      { coup: "Be3", concret: "Développement du fou" },
      { coup: "Bc2", concret: "Repositionnement stratégique" }
    ]
  },

  /* -------- RUY LOPEZ -------- */
  ruy_lopez: {
    nom: "Ruy Lopez (Espagnole)",
    objectif: "Pression stratégique durable",
    coups: [
      { coup: "e4", concret: "Contrôle du centre" },
      { coup: "Nf3", concret: "Attaque le pion e5" },
      { coup: "Bb5", concret: "Cloue le cavalier c6" },
      { coup: "0-0", concret: "Roque côté roi" },
      { coup: "d3", concret: "Structure solide" },
      { coup: "c3", concret: "Prépare d4" },
      { coup: "Re1", concret: "Tour centrale" },
      { coup: "Nbd2", concret: "Développement" },
      { coup: "Nf1", concret: "Redéploiement défensif" },
      { coup: "Ng3", concret: "Pression sur l’aile roi" },
      { coup: "h3", concret: "Sécurise la position" },
      { coup: "Bg5", concret: "Clouage" },
      { coup: "Qe2", concret: "Soutien du centre" },
      { coup: "Rad1", concret: "Tour active" },
      { coup: "a4", concret: "Gain d’espace à l’aile dame" },
      { coup: "Bb3", concret: "Repli du fou" },
      { coup: "Bc2", concret: "Diagonale longue" },
      { coup: "d4", concret: "Rupture centrale" },
      { coup: "Nf1", concret: "Repositionnement" },
      { coup: "Ne3", concret: "Centralisation" }
    ]
  },

  /* -------- GAMBIT DAME -------- */
  gambit_dame: {
    nom: "Gambit Dame",
    objectif: "Contrôle du centre et pression positionnelle",
    coups: [
      { coup: "d4", concret: "Pion dame au centre" },
      { coup: "c4", concret: "Offre un pion pour le centre" },
      { coup: "Nc3", concret: "Développement" },
      { coup: "Nf3", concret: "Soutien du centre" },
      { coup: "e3", concret: "Ouvre le fou" },
      { coup: "Bd3", concret: "Fou actif" },
      { coup: "0-0", concret: "Roque" },
      { coup: "Qe2", concret: "Soutien e4" },
      { coup: "Rd1", concret: "Tour centrale" },
      { coup: "e4", concret: "Rupture centrale" },
      { coup: "Be3", concret: "Développement" },
      { coup: "Rac1", concret: "Tour sur la colonne c" },
      { coup: "h3", concret: "Prévention" },
      { coup: "Bg5", concret: "Clouage" },
      { coup: "Bh4", concret: "Repli" },
      { coup: "e5", concret: "Gain d’espace" },
      { coup: "Ne4", concret: "Centralisation" },
      { coup: "Nd6", concret: "Pression" },
      { coup: "Bc2", concret: "Diagonale longue" },
      { coup: "f4", concret: "Lance l’attaque" }
    ]
  },

  /* -------- OUVERTURE ANGLAISE -------- */
  anglaise: {
    nom: "Ouverture Anglaise",
    objectif: "Contrôle à distance et flexibilité",
    coups: [
      { coup: "c4", concret: "Contrôle le centre à distance" },
      { coup: "Nc3", concret: "Développement" },
      { coup: "g3", concret: "Prépare le fianchetto" },
      { coup: "Bg2", concret: "Fou long actif" },
      { coup: "Nf3", concret: "Développement" },
      { coup: "0-0", concret: "Roque" },
      { coup: "d3", concret: "Structure solide" },
      { coup: "Rb1", concret: "Prépare b4" },
      { coup: "a3", concret: "Soutien b4" },
      { coup: "b4", concret: "Expansion aile dame" },
      { coup: "Bb2", concret: "Fou sur grande diagonale" },
      { coup: "Qe1", concret: "Libère la tour f1" },
      { coup: "Nd2", concret: "Développement" },
      { coup: "Nc4", concret: "Avant-poste" },
      { coup: "Bd2", concret: "Coordination" },
      { coup: "Ne3", concret: "Centralisation" },
      { coup: "b5", concret: "Gain d’espace" },
      { coup: "a4", concret: "Fixation" },
      { coup: "axb5", concret: "Ouvre la colonne a" },
      { coup: "Nb5", concret: "Pression" }
    ]
  },

  /* -------- SYSTÈME RÉTI -------- */
  reti: {
    nom: "Système Réti",
    objectif: "Flexibilité maximale et transpositions",
    coups: [
      { coup: "Nf3", concret: "Contrôle e5 et d4" },
      { coup: "g3", concret: "Fianchetto" },
      { coup: "Bg2", concret: "Fou actif" },
      { coup: "0-0", concret: "Roque" },
      { coup: "d3", concret: "Structure solide" },
      { coup: "Nbd2", concret: "Développement" },
      { coup: "e4", concret: "Prise du centre" },
      { coup: "Re1", concret: "Tour centrale" },
      { coup: "c3", concret: "Soutien du centre" },
      { coup: "Qe2", concret: "Coordination" },
      { coup: "h3", concret: "Prévention" },
      { coup: "Nf1", concret: "Redéploiement" },
      { coup: "Bg5", concret: "Clouage" },
      { coup: "Ng3", concret: "Pression" },
      { coup: "h4", concret: "Gain d’espace" },
      { coup: "h5", concret: "Fixation" },
      { coup: "Nh2", concret: "Repositionnement" },
      { coup: "f4", concret: "Attaque" },
      { coup: "f5", concret: "Ouverture de lignes" },
      { coup: "g4", concret: "Initiative maximale" }
    ]
  }

};

/* =====================================================
   DÉFENSES NOIRS — UTILISÉES PAR L’ARBRE DE DÉCISION
===================================================== */
const defensesNoires = {

  caro_kann: {
    nom: "Défense Caro-Kann",
    objectif: "Solidité maximale",
    coups: [
      { coup: "c6", concret: "Prépare d5" },
      { coup: "d5", concret: "Conteste le centre" },
      { coup: "Bf5", concret: "Fou actif avant e6" },
      { coup: "e6", concret: "Structure solide" },
      { coup: "Nf6", concret: "Développement" },
      { coup: "Be7", concret: "Prépare le roque" },
      { coup: "0-0", concret: "Roi en sécurité" },
      { coup: "c5", concret: "Rupture centrale" },
      { coup: "Nc6", concret: "Développement" },
      { coup: "Rc8", concret: "Colonne semi-ouverte" },
      { coup: "Qb6", concret: "Pression centrale" },
      { coup: "Rfd8", concret: "Tour centrale" },
      { coup: "h6", concret: "Prévention" },
      { coup: "Bh7", concret: "Repli du fou" },
      { coup: "Bg6", concret: "Diagonale active" },
      { coup: "Nd7", concret: "Coordination" },
      { coup: "Bd6", concret: "Pression" },
      { coup: "cxd4", concret: "Échange central" },
      { coup: "Nxe4", concret: "Capture centrale" },
      { coup: "Bxe5", concret: "Simplification" }
    ]
  },

  slave: {
    nom: "Défense Slave",
    objectif: "Structure saine et fiable",
    coups: [
      { coup: "d5", concret: "Centre" },
      { coup: "c6", concret: "Soutient d5" },
      { coup: "Nf6", concret: "Développement" },
      { coup: "Bf5", concret: "Fou actif" },
      { coup: "e6", concret: "Solidité" },
      { coup: "Nbd7", concret: "Développement" },
      { coup: "Be7", concret: "Prépare roque" },
      { coup: "0-0", concret: "Roque" },
      { coup: "Rc8", concret: "Colonne c" },
      { coup: "c5", concret: "Rupture" },
      { coup: "Qb6", concret: "Pression" },
      { coup: "Rfd8", concret: "Tour centrale" },
      { coup: "h6", concret: "Prévention" },
      { coup: "Bh7", concret: "Repli" },
      { coup: "Bd6", concret: "Pression" },
      { coup: "Bxd6", concret: "Échange" },
      { coup: "Qxd6", concret: "Reprise" },
      { coup: "dxc4", concret: "Capture" },
      { coup: "Nxc5", concret: "Échange" },
      { coup: "Nxc5", concret: "Simplification" }
    ]
  },

  sicilienne: {
    nom: "Défense Sicilienne",
    objectif: "Jeu dynamique et déséquilibré",
    coups: [
      { coup: "c5", concret: "Asymétrie immédiate" },
      { coup: "d6", concret: "Soutient e5" },
      { coup: "Nc6", concret: "Développement" },
      { coup: "Nf6", concret: "Développement" },
      { coup: "e6", concret: "Solidité" },
      { coup: "Be7", concret: "Prépare roque" },
      { coup: "0-0", concret: "Roque" },
      { coup: "b6", concret: "Prépare Bb7" },
      { coup: "Bb7", concret: "Fou long" },
      { coup: "Rc8", concret: "Colonne c" },
      { coup: "Na5", concret: "Manœuvre" },
      { coup: "Qc7", concret: "Coordination" },
      { coup: "Rfd8", concret: "Tour" },
      { coup: "Ne5", concret: "Avant-poste" },
      { coup: "Nxe5", concret: "Échange" },
      { coup: "Bxe4", concret: "Activation" },
      { coup: "Rad8", concret: "Tours connectées" },
      { coup: "d5", concret: "Rupture centrale" },
      { coup: "exd5", concret: "Échange" },
      { coup: "Nb4", concret: "Pression finale" }
    ]
  }

};
