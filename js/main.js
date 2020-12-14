 
var el = document.getElementById("naslov");
var le= document.getElementById("naslov");
setInterval(function(){
    el.innerHTML="ZUBI SU OGLEDALO VAŠEG ZDRAVLJA"
},3000);
setInterval(function(){
    el.innerHTML="ZATO VODITE RAČUNA O NJIMA"
},5000); 

var navigate=document.getElementById("navigacija");
var navBar=`<ul class="text-center">`;
var navNiz=["O nama","Galerija","Naš tim","Cenovnik","Kontakt"];
var linkovi=["#oNama","#okvir","#tim","#cenIkom","#kontaktirajteNas"]
for(let i=0;i<navNiz.length;i++){
    navBar+=`<li><a href="${linkovi[i]}" target="_self">${navNiz[i]}</a></li>`;
}
navBar+=`</ul>`;
navigate.innerHTML=navBar;
console.log(navigate);

//Dugme read more
       function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
  
      //DUGME TOP
var mybutton = document.getElementById("myBtnn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var ikonice=["fa fa-phone",	"fa fa-clock-o","fa fa-envelope","fa fa-map-marker"];
var sadrzaj=["060 939156","PON-PET: 08-20","zubicvila@gmail.com","Zdravka Čelara 16, </br>Beograd"];
var beleska='';
function Ispis(){
  var red=document.getElementById("vraper")
  red.style="background-color:rgb(154,200,32)"
  for(let i=0;i<4;i++){
    beleska+=`
      <div class="col-xl-3  col-sm-6  text-center p-2 text-responsive" >
        <i class="${ikonice[i]} m-3"></i>
        <p class="font-weight-bold">${sadrzaj[i]}</p>
      </div>
    `
  }
  red.innerHTML=beleska;
}
Ispis()

var zubi=document.getElementById("zzubi")
zubi.addEventListener("mousemove",function hover(){
  zubi.src="img/2.jpg"
});
zubi.addEventListener("mouseleave",function nazad(){
  zubi.src="img/1.jpg" 
});

/*$(document).ready(function(){ $('#scrollToTop a').
 click( function(){
 $.scrollTo(0,'slow'); return false;
 }); });s */


var slike=["o1.jpg","o2.jpg","o3.jpg","o4.jpg","o5.jpg"]
var Galerijaa=document.getElementById("galerija");
var Galerija='';

for(let i=0;i<1;i++){
   Galerija+=`<div class="col-lg-12 row justify-content-md-center" id="slajder">
                  <img src="img/${slike[i]}" id="prva" class="aktivna img-fluid" alt="ordinacija"/>`
              console.log(Galerija);
  for(let j=1;j<slike.length;j++){
      Galerija+=`<img src="img/${slike[j]}" id="drrrva"  class="img-fluid" alt="fotografija ordinacije ${slike[j]}"/>`
      console.log(Galerija)          
  }
  Galerija+=`</div>`
}
Galerijaa.innerHTML=Galerija;


function slideShow(){

  var trenutniElement = $("#slajder .aktivna");
   console.log(trenutniElement);

  var sledeciElement = trenutniElement.next().length ? trenutniElement.next() : trenutniElement.parent().children(':first');
  console.log(sledeciElement);
  sledeciElement.addClass("aktivna");
  trenutniElement.removeClass("aktivna");
  console.log(trenutniElement);
  setTimeout(slideShow, 2000);
}
slideShow()

var doktori=['img/dr1.jpg','img/dr2.jpg','img/dr3.jpg','img/dr4.jpg'];
var imena=["Slavica Jovanović","Marija Ilić","Marko Simonović","Milutin Ramić"];
var zvanje=["Specijalista parodontologije","Specijalista oralne hirurgije","Implantolog","Specijalista edodoncije"]
var skladiste=document.getElementById("nasTim");
var sakupljac=''
for(let i=0;i<doktori.length;i++){
sakupljac+=`<div class="card col-lg-2 col-sm-5 col-9 m-2">
              <img src="${doktori[i]}" alt="doktor${i} class="img-fluid "/>
              <div>
                  <h4><b>${imena[i]}</b></h4>
                  <p>${zvanje[i]}</p>
              </div>
          </div>`
}
skladiste.innerHTML=sakupljac;

$(document).ready(function(){
  $('#posaljiPodatke').click(proveriFormu);
 })
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
  var regularniMejl = /^[a-zčćžđš][a-z\d\-\.\wčćžđš]+\@[a-z]+(\.[a-z]{2,12}){1,2}$/
  var regularniMessage = /^[A-z\.\,\s\w\d\t\nčćžđš\/\@]+$/
  function pokaziGresku(promenljiva, izraz, idPoruke){
  if (!izraz.test(promenljiva)){
    tacnostForme = false;
    idPoruke.style.visibility = 'visible';
  }
  else {
  idPoruke.style.visibility = 'hidden';
    }
  }
 
  pokaziGresku(ime, regularniIme, imeGr);
  pokaziGresku(prezime, regularniPrezime, prezimeGr);
  pokaziGresku(mejl, regularniMejl, mejlGr);
  pokaziGresku(message, regularniMessage, tekstPorukaGr)
 }
 
var pitanjaPacijenata=["Zašto zub boli?","Zašto krvare desni?","Šta je paradontopatija i kako se leči?","Zašto smo baš mi najbolji izbor za vas?"];
var odgovoriDoktora=["Uzroci zubobolje su mnogobrojni. Najčešće su to stare plombe, neprepoznat karijes ispod kontaktne tačke dva zuba i ogoljen vrat zuba prilikom povlačenja desni. Posledica svega navedenog je eksponirani dentin koji preko tubula prenosi nadražaje do pulpe pri čemu se javlja bolna senzacija.","Glavni uzrok krvarenja desni je upala desni koja je posledica skupljanja naslaga na zubima. Krvarenje desni i prisustvo parodontalnih džepova je jedan od prvih znakova parodontopatije. Redovne posete vašem stomatologu i uklanjanje kamenca i naslaga na zubima će pozitivno uticati na stanje vaših desni i zaustaviti progresiju parodontopatije.","Parodontopatija je progresivna bolest desni gde dolazi do povlačenja desni i same kosti oko korena zuba što za posledicu ima stvaranje džepova, klaćenje zuba i na kraju ispadanje. Parodontopatija se ne može izlečiti ali se njen tok može usporiti ili privremeno zaustaviti. Redovne posete i slušanje saveta stomatologa će sačuvati vaše zube.","Ordinaciju Profident čini tim stručnjaka specijalizovanih za sve grane stomatologije (oralne hirurgije, stomatološke protetike, endodoncije, parodontologije, implantologije, dečije i preventivne stomatologije). Savremenim pristupom lečenja i korišćenjem najmodernijh materijala postizemo najbolje moguće rezultate. U prilog tome govori i 20 godina radnog iskustva iza nas."];
var akordion=document.getElementById("accordionDiv");
var hvatacAkordiona=`<h3 class="text-center m-5 p-3">Najčešća pitanja pacijenata</h3>`;

function izvrsiAkordion(){
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
  console.log(hvatacAkordiona)
}
akordion.innerHTML=hvatacAkordiona;
$('.head').click(function(){
  $(this).toggleClass('active');
  $(this).parent().find('.arrow').toggleClass('arrow-animate');
  $(this).parent().find('.content').slideToggle(280);
});
}
izvrsiAkordion()

var usluge=["Stomatološki pregled","Prva pomoć","Kompozitni ispun","Terapija dubokog karijesa","Vitalna ekstirpacija","Lečenje gangrene (1 seansa)","Helio nadogradnja","Izbeljivanje zuba laserom BIOLASE","Izbeljivanje avitalnog zuba","Izbeljivanje zuba trejom (kućna varijanta)","Izbeljivanje u ordinaciji","Rutinsko vađenje zuba","Komplikovano vađenje zuba","Implantat","Obrada parodontalnog džepa"]
var cene=["1.000","1.500","3.000","1.700","2.200","1.500","5.500","35.000","6.600","10.000","23.000","2.400","6.000","64.000","1.700"]
var cenovnik=document.getElementById("cenovnik");
var hvatacTabele=`<table>
                    <thead>
                      <tr>
                        <th>Cenovnik</th>
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


var pacijenti=['PROFILE1.jpg','PROFILE2.jpg','PROFILE3.jpg'];
var komentari=[' Bila sam prestravljena od zubnih implanta, ali ni jednog trenutka nisam osetila nelagodnost. Cela ordinacija je bila veoma profesionalna i prijateljska.','Hvala vam što tako dobro vodite računa o mojim zubima! Ne mogu vam opisati koliko je moje samopouzdanje poraslo od kako sam brigu o mojim zubima poverio baš vama. Želim vam što više uspeha i u daljem radu.','Imam divno iskustvo sa dr Markom i celim osobljem. Odlično su mi objasnili proceduru i imali su vremena da odgovore na sva moja postavljena pitanja. Toplo preporučujem Eurodent! Beskrajno vam hvala!']
var divKomentara=document.getElementById("komentari")
var hvatacKom='';

for(let i=0;i<pacijenti.length;i++){
    hvatacKom+=`
                <div class=" d-flex justify-content-between shadow-sm p-3 mb-5 bg-white rounded">
                    <div class="col md-2 col-6">
                      <img src="img/${pacijenti[i]}" alt="pacijent${i}" class="pPacijenta img-fluid rounded-circle"/>
                    </div>
                      <p>${komentari[i]}</p>
                    
                </div>
               
    `
} 
divKomentara.innerHTML=hvatacKom;

 

