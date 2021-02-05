
$(document).ready( function(){
  zebraStil()
  prikazBurgera();
  izracunajDane()
  Ispis(document.getElementById('vraper'));
  Ispis(document.getElementById('vraper1'));
  izvrsiAkordion();
  $('#posaljiPodatke').click(proveriFormu)
 });

//Ispis navigacije 

var navigate=document.getElementById("navigacijaMeni");
var burger=document.getElementById("Burger");
var navNiz=["O nama","Galerija","Naš tim","Cenovnik","Kontakt"];
var linkovi=["#oNama","#okvir","#nasTim","#cenovnik","#kontaktirajteNas"]

var hvBurger=`
                <i class="fa fa-bars" ></i>
                <ul id="lista">`
  for(let i=0;i<navNiz.length;i++){               
         hvBurger+=`<li><a href="${linkovi[i]}" class="gl" target="_self">${navNiz[i]}</a></li>`
  }
  hvBurger+=`
    <li><span id="autorBurger" class="autor" onclick="prikazAutora()">Autor</span></li>
   </ul>`
burger.innerHTML=hvBurger;

var navBar=` <ul class="text-center">`;
for(let i=0;i<navNiz.length;i++){
    navBar+=`<li><a href="${linkovi[i]}" target="_self">${navNiz[i]}</a></li>`;
}
navBar+=`
    <li><span id="autorMeni" class="autor" onclick="prikazAutora()">Autor</span></li>
  </ul>`
navigate.innerHTML=navBar;

var linkoviDole=document.getElementById("navigacijaDole");
var linkZaDole=`<h4 class="py-3"><b>Navigacija</b></h4>`

for(let i=0;i<navNiz.length;i++){
  linkZaDole+=`<div><a href="${linkovi[i]}" target="_self">${navNiz[i]}</a></div>`;
}
linkZaDole+=`
    <div><span id="autorDole" class="autor" onclick="prikazAutora()">Autor</span></div>`
linkoviDole.innerHTML=linkZaDole;

//Prikaz navigacije na manjim uredjajima

function prikazBurgera(){
$('#Burger ul').hide();
$('#Burger').click(function(){
  $(this).find("ul").slideToggle(500);
})};

var mybutton = document.getElementById("myBtnn");

//Ispis trake sa informacijama o kontaktu, radnom vremenu i adresi

var ikonice=["fa fa-phone",	"fa fa-clock-o","fa fa-envelope","fa fa-map-marker"];
var sadrzaj=["060 939156","PON-PET: 08-20","zubicvila@gmail.com","Zdravka Čelara 16, </br>Beograd"];

function Ispis(x){
  var beleska='';
  for(let i=0;i<ikonice.length;i++){
    beleska+=`
      <div class="col-xl-3  col-sm-6  text-center p-2 text-responsive" >
        <i class="${ikonice[i]} m-3"></i>
        <p class="font-weight-bold">${sadrzaj[i]}</p>
      </div>
    `;
    x.innerHTML=beleska;
  }
}

//Ispis i funkcionalnost header-a

var slike=["naslovna1.jpg","naslovna.jpg","naslovna2.jpg"]
var Galerijaa=document.getElementById("zaglavlje");
var Galerija='';

for(let i=0;i<1;i++){
   Galerija+=`<div id="slajder">
                  <img src="img/${slike[i]}" class="aktivna img-fluid" alt="naslovna fotografija web sajta stomatološke ordinacije Zubić Vila"/>`
  for(let j=1;j<slike.length;j++){
      Galerija+=`<img src="img/${slike[j]}"  class="img-fluid" alt="naslovna fotografija web sajta stomatološke ordinacije Zubić Vila"/>`         
  }
  Galerija+=`</div>`
}
Galerijaa.innerHTML=Galerija;

var el = document.getElementById("naslov");
var le= document.getElementById("naslov");

window.onload=function(){
  slideShow()
  setInterval(function(){
    el.innerHTML="ZUBI SU OGLEDALO VAŠEG ZDRAVLJA"
  },4500);
  setInterval(function(){
    el.innerHTML="ZATO VODITE RAČUNA O NJIMA"
  },9000); 
}

function slideShow(){
  var trenutniElement = $("#slajder .aktivna");
  var sledeciElement = trenutniElement.next().length ? trenutniElement.next() : trenutniElement.parent().children(':first');
  sledeciElement.addClass("aktivna");
  trenutniElement.removeClass("aktivna");
  setTimeout(slideShow, 4500);
}

//Funkcionalnost dugmeta za prikazivanje vise teksta

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Pročitaj više";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Pročitaj manje";
    moreText.style.display = "inline";
  }
}

//Ispis doktora

var doktori=['img/dr1.jpg','img/dr2.jpg','img/dr3.jpg','img/dr4.jpg'];
var imena=["Slavica Jovanović","Marija Ilić","Marko Simonović","Milutin Ramić"];
var zvanje=["Specijalista parodontologije","Specijalista oralne hirurgije","Implantolog","Specijalista edodoncije"]
var skladiste=document.getElementById("nasTim");
var sakupljac=''
for(let i=0;i<doktori.length;i++){
sakupljac+=`<div class="card col-lg-2 col-sm-5 col-8 m-2">
              <img src="${doktori[i]}" alt="doktor ${imena[i]}" class="img-fluid "/>
              <div>
                  <h4><b>${imena[i]}</b></h4>
                  <p>${zvanje[i]}</p>
              </div>
          </div>`
}
skladiste.innerHTML=sakupljac;

//Ispis i funkcionalnost akordiona sa najcescim pitanjima pacijenata

var pitanjaPacijenata=["Zašto zub boli?","Zašto krvare desni?","Šta je paradontopatija i kako se leči?","Šta dovodi do karijesa?","Zašto zub boli na hladno, toplo, slatko, pritisak?","Da li su crne plombe jače od belih?","Zašto smo baš mi najbolji izbor za vas?"];
var odgovoriDoktora=["Uzroci zubobolje su mnogobrojni. Najčešće su to stare plombe, neprepoznat karijes ispod kontaktne tačke dva zuba i ogoljen vrat zuba prilikom povlačenja desni. Posledica svega navedenog je eksponirani dentin koji preko tubula prenosi nadražaje do pulpe pri čemu se javlja bolna senzacija.","Glavni uzrok krvarenja desni je upala desni koja je posledica skupljanja naslaga na zubima. Krvarenje desni i prisustvo parodontalnih džepova je jedan od prvih znakova parodontopatije. Redovne posete vašem stomatologu i uklanjanje kamenca i naslaga na zubima će pozitivno uticati na stanje vaših desni i zaustaviti progresiju parodontopatije.","Parodontopatija je progresivna bolest desni gde dolazi do povlačenja desni i same kosti oko korena zuba što za posledicu ima stvaranje džepova, klaćenje zuba i na kraju ispadanje. Parodontopatija se ne može izlečiti ali se njen tok može usporiti ili privremeno zaustaviti. Redovne posete i slušanje saveta stomatologa će sačuvati vaše zube.","Najčešci uzrok je dentalni plak. To su naslage na zubima koje sadrže ugljene hidrate, bakterije, i sl. Ako se zubi ne peru pravilno, doći će do nakupljanja plaka i uz prisustvo bakterija (streptokoka) dolazi do stvaranja kiselih produkata koji oštecuju gleđ zuba i tako počinje karijes.","Zub boli na hladno zbog izloženosti dentina zuba koji je zahvaćen karijesom, ili zbog povlačenja potpornog aparata zuba usled parodontopatije. Ako se bol javlja samo na nadražaj, kratkotrajan je i traje samo dok deluje nadražaj, problem se rešava čišćenjem karijesa i stavljanjem plombe.","Amalgamski (crni) ispuni ispunjavaju sve mehaničke potrebe zubnog ispuna. Ispunjavaju ih I savremeni kompozitni (beli) ispuni, koji imaju još i prednost das u apsolutno estetski. U nekim zemljama su amalgamski ispuni potpuno napušteni ne iz razloga eventualne toksičnosti žive u njima već zato što se smatraju prevaziđeni.","Ordinaciju Zubic Vila čini tim stručnjaka specijalizovanih za sve grane stomatologije (oralne hirurgije, stomatološke protetike, endodoncije, parodontologije, implantologije, dečije i preventivne stomatologije). Savremenim pristupom lečenja i korišćenjem najmodernijh materijala postizemo najbolje moguće rezultate. U prilog tome govori i 20 godina radnog iskustva iza nas."];
var akordion=document.getElementById("accordionDiv");

function izvrsiAkordion(){
  var hvatacAkordiona=`<h3 class="text-center">Najčešća pitanja pacijenata</h3>`
                        
  for(let i=0;i<pitanjaPacijenata.length;i++){
    hvatacAkordiona+=`<div class="accordion">
                        <div class="head d-flex justify-content-between">
                          <h2>${i+1}. ${pitanjaPacijenata[i]}</h2>
                          <i class="fa fa-arrow-right arrow"></i>
                        </div>
                        <div class="content">
                          <p> ${odgovoriDoktora[i]}</p>
                        </div>
                      </div>
                    <br>              
    ` 
  }

  akordion.innerHTML=hvatacAkordiona;
  $('.head').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.arrow').toggleClass('arrow-animate');
    $(this).parent().find('.content').slideToggle(280);
  });
}

//Ispis cenovnika i zebra stil tabele

var usluge=["Stomatološki pregled","Prva pomoć","Kompozitni ispun","Terapija dubokog karijesa","Vitalna ekstirpacija","Lečenje gangrene (1 seansa)","Helio nadogradnja","Izbeljivanje zuba laserom BIOLASE","Izbeljivanje avitalnog zuba","Izbeljivanje zuba trejom (kućna varijanta)","Izbeljivanje u ordinaciji","Rutinsko vađenje zuba","Komplikovano vađenje zuba","Implantat","Obrada parodontalnog džepa"]
var cene=["Besplatno","1.500","3.000","1.700","2.200","1.500","5.500","35.000","6.600","10.000","23.000","2.400","6.000","64.000","1.700"]
var cenovnik=document.getElementById("cenovnik");
var hvatacTabele=`<table>
                    <thead>
                      <tr>
                        <th><h3 class="ml-0">Cenovnik</h3></th>
                      </tr>
                    </thead>
                  <tbody>`;

for(let i=0;i<usluge.length;i++){
  hvatacTabele+=`
                 <tr>
                    <td>${usluge[i]}</td>
                    <td class="desno"><span>${cene[i]}</span></td>
                 </tr> `
}
hvatacTabele+=`   </tbody>
                </table>`
cenovnik.innerHTML=hvatacTabele;

function zebraStil(){
  $('table tbody tr:even').addClass('boja')
  $('table tbody tr').hover(
    function(){$(this).addClass('zebra')},
    function(){$(this).removeClass('zebra')}
  )};

//Funkcionalnost dugmenceta za skrolovanje do vrha strane

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Regularni izrazi i provera forme

 function proveriFormu(e){
  e.preventDefault();
  var tacnostForme = true;
  var ime = document.getElementById('ime').value;
  var prezime = document.getElementById('prezime').value;
  var mejl = document.getElementById('mejl').value;
  var message = document.getElementById('txtArea').value;
  var imeGr = document.getElementById('greskaNaImenu');
  var prezimeGr = document.getElementById('greskaNaPrezimenu');
  var mejlGr = document.getElementById('greskaNaMejlu');
  var tekstPorukaGr = document.getElementById('greskaNaTekstPoruka');
  var regularniIme = /^[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}){0,1}$/;
  var regularniPrezime = /^[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćžđš]{2,15}){0,1}$/;
  var regularniMejl = /^[a-z][a-z_\.0-9]+@([a-z0-9]{3,7}\.){1,3}[a-z]{2,3}$/;
  var regularniMessage = /.{4,200}/;
  var greska=4;
  
  function pokaziGresku(promenljiva, izraz, idPoruke){
    if(greska==4){
        document.getElementById("nijeGreska").style.visibility = 'hidden'
      }
    if (!izraz.test(promenljiva)){
      tacnostForme = false;
      idPoruke.style.visibility = 'visible';
    }
    else {
      idPoruke.style.visibility = 'hidden';
      greska--;
      if(greska==0){
        document.getElementById("nijeGreska").style.visibility = 'visible';
        document.getElementById('ime').value="";
        document.getElementById('prezime').value="";
        document.getElementById('mejl').value="";
        document.getElementById('txtArea').value="";       
      }
    }
  }
  pokaziGresku(ime, regularniIme, imeGr);
  pokaziGresku(prezime, regularniPrezime, prezimeGr);
  pokaziGresku(mejl, regularniMejl, mejlGr);
  pokaziGresku(message, regularniMessage, tekstPorukaGr)
 }

 //Izracunavanje dana do kraja akcije

function izracunajDane(){
var trenutno=new Date();
var buduce=new Date("2/15/2021");
buduce.setHours("20");
buduce.setMinutes("00");
var razlika=buduce-trenutno;
document.querySelector("#Vreme").innerHTML='Preostalo je još <b>'+ Math.ceil(razlika/(1000*60*60*24)) +' </b>dana do kraja akcije.';
}

//Kreiranje elemenata i ispis komentara pacijenata

var pacijenti=['PROFILE1.jpg','PROFILE2.jpg','PROFILE3.jpg','anita.png','bogdan.jpg','Ceca.jpg'];
var altPac=['Jovana Mandić','Dragan Ilić','Goran Bosnić','Anita Đorđević','Bogdan Janković','Svetlana Ražnatović']
var komentari=[' Bila sam prestravljena od zubnih implanta, ali ni jednog trenutka nisam osetila nelagodnost. Cela ordinacija je bila veoma profesionalna i prijateljska.','Hvala vam što tako dobro vodite računa o mojim zubima! Ne mogu vam opisati koliko je moje samopouzdanje poraslo od kako sam brigu o mojim zubima poverio baš vama. Želim vam što više uspeha i u daljem radu.','Imam divno iskustvo sa dr Markom i celim osobljem. Odlično su mi objasnili proceduru i imali su vremena da odgovore na sva moja postavljena pitanja. Toplo preporučujem Zubić vilu! Beskrajno vam hvala!','Moj osmeh sve govori. Sve preporuke za Zubic Vilu!','Vrlo profesionalno i ljubazno, postuje se vreme zakazanih termina,dopada mi se sto se daju garancije na radove i to govori da se koristi kvalitetan materijal.Treci put dolazim i veoma sam zadovoljan,ovakve ordinacije sam video na zapadu.','Zaista vrhunski kvalitet usluge. Maksimalno profesionalni i spremni da reše svaki vaš problem. Imate osećaj da ste u sigurnim rukama što je po meni najbitnije od svega.'];
var divKomentara=document.getElementById("komentari")

for(let i=0;i<pacijenti.length;i++){
  var drzacKomentara=document.createElement("div");
  drzacKomentara.setAttribute("class","hiden shadow-sm my-5 bg-white rounded");
  var divSlikaKlijenta=document.createElement("div");
  divSlikaKlijenta.setAttribute("class","text-center p-1")
  var slikaKlijenta=document.createElement("img");
  slikaKlijenta.setAttribute("src","img/"+pacijenti[i]);
  slikaKlijenta.setAttribute("alt","Pacijent "+altPac[i]+" stomatološke ordinacije Zubić Vila");
  slikaKlijenta.setAttribute("class","pPacijenta img-fluid rounded-circle");
  var komentariP=document.createElement("p")
  komentariP.setAttribute("class","text-center p-1")
  var textKomentara=document.createTextNode(komentari[i]);
  komentariP.appendChild(textKomentara);
  komentariP.setAttribute("class","py-5 px-3 text-center")
  divSlikaKlijenta.appendChild(slikaKlijenta);
  drzacKomentara.appendChild(divSlikaKlijenta);
  drzacKomentara.appendChild(komentariP);
  divKomentara.appendChild(drzacKomentara);
} 

//Kreiranje galerije

var galerija=document.getElementById("galerija");
var nizSlikaOrdinacije=["o1.jpg","o2.jpg","o3.jpg","o4.jpg","o5.jpg","ordinacija9.jpg"];

var headPhoto=document.createElement("div");
headPhoto.setAttribute("class","headPhoto col-sm-8");
var noviRed=document.createElement("div");
noviRed.setAttribute("class","col-sm-4 col-12 d-flex align-items-center");
var kolona0=document.createElement("div");  
kolona0.setAttribute("class","row"); 

for(let i=0;i<nizSlikaOrdinacije.length;i++){
  var drzeciDiv=document.createElement("div");
  drzeciDiv.setAttribute("class","slajd text-center")
  var slikaUDivu=document.createElement("img");
  slikaUDivu.setAttribute("src","img/"+nizSlikaOrdinacije[i]);
  slikaUDivu.setAttribute("alt","fotografija ordinacije Zubić Vila")
  slikaUDivu.setAttribute("class","img-fluid cnt")
  drzeciDiv.appendChild(slikaUDivu);
  headPhoto.appendChild(drzeciDiv)
  var j=i+1;
  var kolona=document.createElement("div");
  kolona.setAttribute("class","col-sm-6 col-2 p-1");
   
   var imgDemo=document.createElement("img");
   imgDemo.setAttribute("src","img/"+nizSlikaOrdinacije[i]);
   imgDemo.setAttribute("alt","fotografija ordinacije Zubić Vila")
   imgDemo.setAttribute("class","img-fluid demo")
   imgDemo.setAttribute("onclick","trenutniSlajd("+j+")");
   kolona0.appendChild(kolona);
   kolona.appendChild(imgDemo);
   noviRed.appendChild(kolona0);
}
galerija.appendChild(headPhoto)
galerija.appendChild(noviRed);

//Funkcionalnost primenjena na galeriju i komentare pacijenata

var premotavanje=["prethodna","sledeca"];
var defaultVrednost=["-1","1"];
var strelice=["fa fa-chevron-left","fa fa-chevron-right"];
for(i in premotavanje){
  var tagA=document.createElement("a");
  tagA.setAttribute("class",premotavanje[i]);
  tagA.setAttribute("onclick","sledeciSlajd("+defaultVrednost[i]+")");
  var iTag=document.createElement("i");
  iTag.setAttribute("class",strelice[i]);
  tagA.appendChild(iTag)
  headPhoto.appendChild(tagA);

  var tagB=document.createElement("a");
  tagB.setAttribute("class",premotavanje[i]);
  tagB.setAttribute("onclick","sledeciSlajd("+defaultVrednost[i]+")");
  var iTag2=document.createElement("i");
  iTag2.setAttribute("class",strelice[i]);
  tagB.appendChild(iTag2)
  divKomentara.appendChild(tagB)
}

var slideIndex = 1;
showSlides(slideIndex);

function sledeciSlajd(n) {
  showSlides(slideIndex += n);
}

function trenutniSlajd(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var slides = document.getElementsByClassName("slajd");
  var dots = document.getElementsByClassName("demo");
  var hidn= document.getElementsByClassName("hiden");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }

  for (let i = 0; i < hidn.length; i++) {
    hidn[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  hidn[slideIndex-1].style.display = "block";
  hidn[slideIndex-1].className += " fadeIn";
}

//Ispis korisnih linkova

var korisniLinkovi=["Sitemap","Dokumentacija"];
var adresaSadrzaja=["sitemap.xml","Documentation.pdf"];

var kLinkovi=document.getElementById("korisniLinkovi")
var hvatacKLinkova='<h4 class="py-3"><b>Korisni linkovi</b></h4>';
    
    for(let i=0;i<korisniLinkovi.length;i++){
      hvatacKLinkova+=`
                    <div>
                      <a href="${adresaSadrzaja[i]}" target="_blank">${korisniLinkovi[i]}</a>
                    </div>
                  `
    }
kLinkovi.innerHTML=hvatacKLinkova;

//Ispis i funkcionalnost prikaza dela o autoru

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

var linkovi=["https://andjela-kostic.github.io/portfolio/","https://github.com/andjela-kostic"];
var nazivLinka=["Portfolio","GitHub"]
var profil=document.getElementById("profili");
var hvatacProfil=``;
for(let i=0;i<linkovi.length;i++){
    hvatacProfil+=` 
    <a href="${linkovi[i]}" target="_blank"><button class="linkDugme">${nazivLinka[i]}</button></a>
    `
}
profil.innerHTML=hvatacProfil;

function prikazAutora(){
    document.getElementById("modal").style.display="flex";
}

function  zatvori(){
  document.getElementById("modal").style.display="none";
}
