var nizPodataka=["Ime i prezime: ","Datum rođenja: ","Obrazovanje: ","Broj indeksa: "];
var podaci=["Anđela Kostić","21.1.2001.","Visoka ICT","51/19"]
var opisAutora=document.getElementById("opisAutora");
var hvatacAutor=``;

for(let i=0;i<podaci.length;i++){
    hvatacAutor+=`
                  <p><b>${nizPodataka[i]}</b> ${podaci[i]}</p>
                  `
}
opisAutora.innerHTML=hvatacAutor;

var nizIkonica=["fa fa-user","fa fa-github"];
var linkovi=["https://andjela-kostic.github.io/portfolio/","https://github.com/andjela-kostic"];
var nazivLinka=["Portfolio: ","GitHub: "]
var profil=document.getElementById("profili");
var hvatacProfil=``;
for(let i=0;i<linkovi.length;i++){
    hvatacProfil+=`
    <b>${nazivLinka[i]}</b>
    <a href="${linkovi[i]}" trget="_blank"><i class="${nizIkonica[i]}"></i></a>
    `
}
profil.innerHTML=hvatacProfil
futer();