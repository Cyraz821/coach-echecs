/* ================= ÉTAT GLOBAL ================= */

// Ouverture actuellement chargée
let ouverture = null;

// Index du coup affiché
let index = 0;

/* ================= INITIALISATION ================= */

document.addEventListener("DOMContentLoaded", () => {

  // Initialise l’échiquier dès le chargement
  initBoard();

  // Récupération des éléments DOM
  const camp = document.getElementById("camp");
  const zoneBlanc = document.getElementById("zoneBlanc");
  const zoneNoir = document.getElementById("zoneNoir");
  const ouvertureBlanc = document.getElementById("ouvertureBlanc");

  const premierCoup = document.getElementById("premierCoup");
  const etat = document.getElementById("etat");

  const btnStart = document.getElementById("btnStart");
  const btnNext = document.getElementById("btnNext");
  const btnPrev = document.getElementById("btnPrev");

  /* ================= CHOIX DU CAMP ================= */

  camp.addEventListener("change", () => {

    // Cache toutes les zones
    zoneBlanc.style.display = "none";
    zoneNoir.style.display = "none";

    // Réinitialise les boutons
    btnNext.disabled = true;
    btnPrev.disabled = true;

    // Affiche les options selon le camp
    if (camp.value === "blanc") {
      zoneBlanc.style.display = "block";
      chargerOuverturesBlancs();
    }

    if (camp.value === "noir") {
      zoneNoir.style.display = "block";
    }
  });

  /* ================= CHARGEMENT BLANCS ================= */

  function chargerOuverturesBlancs() {
    ouvertureBlanc.innerHTML = "";
    for (let key in ouverturesBlancs) {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = ouverturesBlancs[key].nom;
      ouvertureBlanc.appendChild(opt);
    }
  }

  /* ================= DÉMARRER ================= */

  btnStart.addEventListener("click", () => {

    // Réinitialisation
    index = 0;
    initBoard();

    // Sélection de l’ouverture
    if (camp.value === "blanc") {
      ouverture = ouverturesBlancs[ouvertureBlanc.value];
    } else if (camp.value === "noir") {
      ouverture = choisirDefenseNoire(premierCoup.value, etat.value);
    } else {
      return;
    }

    // Mise à jour UI
    document.getElementById("titre").textContent = ouverture.nom;
    document.getElementById("objectif").textContent = ouverture.objectif;

    btnNext.disabled = false;
    btnPrev.disabled = true;

    afficher();
  });

  /* ================= NAVIGATION ================= */

  btnNext.addEventListener("click", () => {
    if (index < ouverture.coups.length - 1) {
      index++;
      afficher();
    }
  });

  btnPrev.addEventListener("click", () => {
    if (index > 0) {
      index--;
      afficher();
    }
  });
});

/* ================= AFFICHAGE ================= */

function afficher() {

  // Sécurité
  if (!ouverture) return;

  // Boutons
  document.getElementById("btnPrev").disabled = index === 0;
  document.getElementById("btnNext").disabled = index === ouverture.coups.length - 1;

  // Texte principal
  document.getElementById("coup").textContent =
    `Coup ${index + 1} / ${ouverture.coups.length} : ${ouverture.coups[index].coup}`;

  document.getElementById("concret").textContent =
    ouverture.coups[index].concret;

  // Checklist
  const ul = document.getElementById("checklist");
  ul.innerHTML = "";
  checklistMentale.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

/* ================= ARBRE NOIR ================= */

function choisirDefenseNoire(premier, style) {
  if (premier === "e4") return style === "agressif" ? defensesNoires.sicilienne : defensesNoires.caro_kann;
  if (premier === "d4") return defensesNoires.slave;
  if (premier === "c4") return defensesNoires.sicilienne;
  return defensesNoires.slave;
}
