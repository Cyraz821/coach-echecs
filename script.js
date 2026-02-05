let ouverture = null;
let index = 0;

document.addEventListener("DOMContentLoaded", () => {

  initBoard();

  const camp = document.getElementById("camp");
  const zoneBlanc = document.getElementById("zoneBlanc");
  const zoneNoir = document.getElementById("zoneNoir");
  const ouvertureBlanc = document.getElementById("ouvertureBlanc");

  const premierCoup = document.getElementById("premierCoup");
  const etat = document.getElementById("etat");

  camp.addEventListener("change", () => {

    zoneBlanc.classList.remove("active");
    zoneNoir.classList.remove("active");

    if (camp.value === "blanc") {
      zoneBlanc.classList.add("active");
      chargerOuverturesBlancs();
    }

    if (camp.value === "noir") {
      zoneNoir.classList.add("active");
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

  document.getElementById("btnStart").onclick = () => {
    index = 0;
    initBoard();

    if (camp.value === "blanc") {
      ouverture = ouverturesBlancs[ouvertureBlanc.value];
    } else if (camp.value === "noir") {
      ouverture = choisirDefenseNoire(premierCoup.value, etat.value);
    } else {
      return;
    }

    document.getElementById("titre").textContent = ouverture.nom;
    document.getElementById("objectif").textContent = ouverture.objectif;
    afficher();
  };

  document.getElementById("btnNext").onclick = () => {
    if (ouverture && index < ouverture.coups.length - 1) {
      index++;
      afficher();
    }
  };

  document.getElementById("btnPrev").onclick = () => {
    if (ouverture && index > 0) {
      index--;
      afficher();
    }
  };
});

function afficher() {
  if (!ouverture) return;

  document.getElementById("coup").textContent =
    `Coup ${index + 1} / ${ouverture.coups.length} : ${ouverture.coups[index].coup}`;

  document.getElementById("concret").textContent =
    ouverture.coups[index].concret;

  const ul = document.getElementById("checklist");
  ul.innerHTML = "";
  checklistMentale.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    ul.appendChild(li);
  });
}

function choisirDefenseNoire(premier, style) {
  if (premier === "e4") return style === "agressif" ? defensesNoires.sicilienne : defensesNoires.caro_kann;
  if (premier === "d4") return defensesNoires.slave;
  if (premier === "c4") return defensesNoires.sicilienne;
  return defensesNoires.slave;
}
