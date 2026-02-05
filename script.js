let ouverture = null;
let index = 0;

// Repères universels
const COUP_FIN_OUVERTURE = 10;
const COUP_MILIEU_JEU = 12;

document.addEventListener("DOMContentLoaded", () => {

  initBoard();

  const camp = document.getElementById("camp");
  const zoneBlanc = document.getElementById("zoneBlanc");
  const zoneNoir = document.getElementById("zoneNoir");
  const ouvertureBlanc = document.getElementById("ouvertureBlanc");

  const btnStart = document.getElementById("btnStart");
  const btnNext = document.getElementById("btnNext");
  const btnPrev = document.getElementById("btnPrev");

  camp.addEventListener("change", () => {
    zoneBlanc.style.display = "none";
    zoneNoir.style.display = "none";

    if (camp.value === "blanc") {
      zoneBlanc.style.display = "block";
      chargerOuverturesBlancs();
    }

    if (camp.value === "noir") {
      zoneNoir.style.display = "block";
    }
  });

  function chargerOuverturesBlancs() {
    ouvertureBlanc.innerHTML = "";
    for (let key in ouverturesBlancs) {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = ouverturesBlancs[key].nom;
      ouvertureBlanc.appendChild(opt);
    }
  }

  btnStart.onclick = () => {
    index = 0;
    initBoard();

    if (camp.value === "blanc") {
      ouverture = ouverturesBlancs[ouvertureBlanc.value];
    } else {
      ouverture = choisirDefenseNoire(
        document.getElementById("premierCoup").value,
        document.getElementById("etat").value
      );
    }

    document.getElementById("titre").textContent = ouverture.nom;
    document.getElementById("objectif").textContent = ouverture.objectif;

    afficherErreurs();
    afficher();

    btnNext.disabled = false;
    btnPrev.disabled = true;
  };

  btnNext.onclick = () => {
    if (!ouverture) return;
    if (index < ouverture.coups.length - 1) {
      index++;
      afficher();
    }
  };

  btnPrev.onclick = () => {
    if (!ouverture) return;
    if (index > 0) {
      index--;
      afficher();
    }
  };
});

function afficher() {

  const numeroCoup = index + 1;

  document.getElementById("coup").textContent =
    `Coup ${numeroCoup} / ${ouverture.coups.length} : ${ouverture.coups[index].coup}`;

  document.getElementById("concret").textContent =
    "👉 " + ouverture.coups[index].concret;

  afficherPhaseJeu(numeroCoup);

  document.getElementById("btnPrev").disabled = index === 0;
  document.getElementById("btnNext").disabled = index === ouverture.coups.length - 1;
}

function afficherPhaseJeu(numeroCoup) {
  const phase = document.getElementById("phaseJeu");

  if (numeroCoup < COUP_FIN_OUVERTURE) {
    phase.textContent = "Phase : Ouverture";
    phase.className = "phase-ouverture";
    return;
  }

  if (numeroCoup < COUP_MILIEU_JEU) {
    phase.textContent = "Phase : Transition vers le milieu de jeu";
    phase.className = "phase-transition";
    return;
  }

  phase.textContent = "Phase : Milieu de jeu (les coups sont indicatifs)";
  phase.className = "phase-milieu";
}

function afficherErreurs() {
  const ul = document.getElementById("erreurs");
  ul.innerHTML = "";

  if (!ouverture.erreurs) return;

  ouverture.erreurs.forEach(err => {
    const li = document.createElement("li");
    li.textContent = "❌ " + err;
    ul.appendChild(li);
  });
}

function choisirDefenseNoire(premier, style) {
  if (premier === "e4") return style === "agressif"
    ? defensesNoires.sicilienne
    : defensesNoires.caro_kann;

  if (premier === "d4") return defensesNoires.slave;

  return defensesNoires.sicilienne;
}
