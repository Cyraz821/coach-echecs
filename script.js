// ===============================
// VARIABLES GLOBALES
// ===============================

let ouverture = null;
let index = 0;

const COUP_MILIEU_JEU = 12;

// ===============================
// INITIALISATION
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  initBoard();

  const camp = document.getElementById("camp");
  const zoneBlanc = document.getElementById("zoneBlanc");
  const zoneNoir = document.getElementById("zoneNoir");
  const ouvertureBlanc = document.getElementById("ouvertureBlanc");

  const btnStart = document.getElementById("btnStart");
  const btnNext = document.getElementById("btnNext");
  const btnPrev = document.getElementById("btnPrev");

  zoneBlanc.style.display = "none";
  zoneNoir.style.display = "none";

  // ===============================
  // CHOIX DU CAMP
  // ===============================
  camp.onchange = () => {

    zoneBlanc.style.display = "none";
    zoneNoir.style.display = "none";
    ouverture = null;
    index = 0;

    if (camp.value === "blanc") {
      zoneBlanc.style.display = "block";
      remplirOuverturesBlanches();
    }

    if (camp.value === "noir") {
      zoneNoir.style.display = "block";
    }
  };

  // ===============================
  // DÉMARRER
  // ===============================
  btnStart.onclick = () => {

    index = 0;
    initBoard();

    if (camp.value === "blanc") {
      ouverture = ouverturesBlancs[ouvertureBlanc.value];
    }

    if (camp.value === "noir") {
      const premier = document.getElementById("premierCoup").value;
      const style = document.getElementById("etat").value;
      ouverture = choisirDefenseNoire(premier, style);
    }

    if (!ouverture) return;

    afficher();
    btnNext.disabled = false;
    btnPrev.disabled = true;
  };

  // ===============================
  // NAVIGATION
  // ===============================
  btnNext.onclick = () => {
    if (index < ouverture.coups.length - 1) {
      index++;
      afficher();
    }
  };

  btnPrev.onclick = () => {
    if (index > 0) {
      index--;
      afficher();
    }
  };
});

// ===============================
// REMPLIR OUVERTURES BLANCHES
// ===============================
function remplirOuverturesBlanches() {
  const select = document.getElementById("ouvertureBlanc");
  select.innerHTML = "";

  for (const key in ouverturesBlancs) {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = ouverturesBlancs[key].nom;
    select.appendChild(opt);
  }
}

// ===============================
// ARBRE DE DÉCISION NOIRS (COMPLET)
// ===============================
function choisirDefenseNoire(premier, style) {

  // e4
  if (premier === "e4") {
    if (style === "agressif" && defensesNoires.sicilienne)
      return defensesNoires.sicilienne;

    return defensesNoires.caro_kann;
  }

  // d4
  if (premier === "d4") {
    return defensesNoires.slave;
  }

  // c4 ou Nf3 → défenses hypermodernes
  if (premier === "c4" || premier === "Nf3") {
    return defensesNoires.slave || defensesNoires.caro_kann;
  }

  return null;
}

// ===============================
// AFFICHAGE
// ===============================
function afficher() {

  const coupObj = ouverture.coups[index];

  document.getElementById("titre").textContent = ouverture.nom;
  document.getElementById("objectif").textContent = ouverture.objectif;

  document.getElementById("coup").textContent =
    `Coup ${index + 1} / ${ouverture.coups.length} : ${coupObj.coup}`;

  document.getElementById("concret").textContent =
    "👉 " + coupObj.concret;

  // ===============================
  // ERREURS
  // ===============================
  const erreursList = document.getElementById("erreurs");
  erreursList.innerHTML = "";

  if (ouverture.erreurs) {
    ouverture.erreurs.forEach(e => {
      const li = document.createElement("li");
      li.textContent = e;
      erreursList.appendChild(li);
    });
  }

  // ===============================
  // PLAN DE MILIEU DE JEU
  // ===============================
  const planBloc = document.getElementById("planMilieuJeu");
  const planList = document.getElementById("planList");

  if (ouverture.planMilieuJeu && index + 1 >= COUP_MILIEU_JEU) {
    planBloc.style.display = "block";
    planList.innerHTML = "";

    ouverture.planMilieuJeu.forEach(idee => {
      const li = document.createElement("li");
      li.textContent = idee;
      planList.appendChild(li);
    });
  } else {
    planBloc.style.display = "none";
  }

  // ===============================
  // BOUTONS
  // ===============================
  document.getElementById("btnPrev").disabled = index === 0;
  document.getElementById("btnNext").disabled =
    index === ouverture.coups.length - 1;
}
