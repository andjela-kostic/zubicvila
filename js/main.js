 
var el = document.getElementById("naslov");
var le= document.getElementById("naslov");


var navigate=document.getElementById("navigacijaMeni");
var burger=document.getElementById("Burger");
var navNiz=["O nama","Galerija","Naš tim","Cenovnik","Kontakt"];
var linkovi=["#oNama","#okvir","#tim","#cenIkom","#kontaktirajteNas"]


var hvBurger=`
                <i class="fa fa-bars" onClick="burgeri()"></i>
                <ul id="lista">`
  for(let i=0;i<navNiz.length;i++){               
         hvBurger+=`<li><a href="${linkovi[i]}" target="_self">${navNiz[i]}</a></li>`
  }
  hvBurger+=` </ul>
            `
burger.innerHTML=hvBurger;

var navBar=` <ul class="text-center">`;
for(let i=0;i<navNiz.length;i++){
    navBar+=`<li><a href="${linkovi[i]}" target="_self">${navNiz[i]}</a></li>`;
}
navBar+=`</ul>`
        
navigate.innerHTML=navBar;
console.log(navigate);

function burgeri(){
  if(document.getElementById("lista").style.display === "block"){
    document.getElementById("lista").style.display = "none";
  }
  else{
    document.getElementById("lista").style.display="block"
  }
}

  
      //DUGME TOP
var mybutton = document.getElementById("myBtnn");





var ikonice=["fa fa-phone",	"fa fa-clock-o","fa fa-envelope","fa fa-map-marker"];
var sadrzaj=["060 939156","PON-PET: 08-20","zubicvila@gmail.com","Zdravka Čelara 16, </br>Beograd"];


Ispis(document.getElementById('vraper'));
Ispis(document.getElementById('vraper1'))

var zubi=document.getElementById("zzubi")
zubi.addEventListener("mousemove",function hover(){
  zubi.src="img/2.jpg"
});
zubi.addEventListener("mouseleave",function nazad(){
  zubi.src="img/1.jpg" 
});




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

 
 
 
var pitanjaPacijenata=["Zašto zub boli?","Zašto krvare desni?","Šta je paradontopatija i kako se leči?","Zašto smo baš mi najbolji izbor za vas?"];
var odgovoriDoktora=["Uzroci zubobolje su mnogobrojni. Najčešće su to stare plombe, neprepoznat karijes ispod kontaktne tačke dva zuba i ogoljen vrat zuba prilikom povlačenja desni. Posledica svega navedenog je eksponirani dentin koji preko tubula prenosi nadražaje do pulpe pri čemu se javlja bolna senzacija.","Glavni uzrok krvarenja desni je upala desni koja je posledica skupljanja naslaga na zubima. Krvarenje desni i prisustvo parodontalnih džepova je jedan od prvih znakova parodontopatije. Redovne posete vašem stomatologu i uklanjanje kamenca i naslaga na zubima će pozitivno uticati na stanje vaših desni i zaustaviti progresiju parodontopatije.","Parodontopatija je progresivna bolest desni gde dolazi do povlačenja desni i same kosti oko korena zuba što za posledicu ima stvaranje džepova, klaćenje zuba i na kraju ispadanje. Parodontopatija se ne može izlečiti ali se njen tok može usporiti ili privremeno zaustaviti. Redovne posete i slušanje saveta stomatologa će sačuvati vaše zube.","Ordinaciju Profident čini tim stručnjaka specijalizovanih za sve grane stomatologije (oralne hirurgije, stomatološke protetike, endodoncije, parodontologije, implantologije, dečije i preventivne stomatologije). Savremenim pristupom lečenja i korišćenjem najmodernijh materijala postizemo najbolje moguće rezultate. U prilog tome govori i 20 godina radnog iskustva iza nas."];
var akordion=document.getElementById("accordionDiv");
var hvatacAkordiona=`<h3 class="text-center m-5 p-3">Najčešća pitanja pacijenata</h3>`;



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
var komentari=[' Bila sam prestravljena od zubnih implanta, ali ni jednog trenutka nisam osetila nelagodnost. Cela ordinacija je bila veoma profesionalna i prijateljska.','Hvala vam što tako dobro vodite računa o mojim zubima! Ne mogu vam opisati koliko je moje samopouzdanje poraslo od kako sam brigu o mojim zubima poverio baš vama. Želim vam što više uspeha i u daljem radu.','Imam divno iskustvo sa dr Markom i celim osobljem. Odlično su mi objasnili proceduru i imali su vremena da odgovore na sva moja postavljena pitanja. Toplo preporučujem Zubić vilu! Beskrajno vam hvala!']
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


futer();


setInterval(function(){
  el.innerHTML="ZUBI SU OGLEDALO VAŠEG ZDRAVLJA"
},3000);
setInterval(function(){
  el.innerHTML="ZATO VODITE RAČUNA O NJIMA"
},5000); 


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

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

 function kontaktirajteNas(){
   var forma=`<h3>Pišite nam</h3>
   <form action="index.html" method='POST' class="col-md-8 col-11">`
   var kontakt=document.getElementById("kontaktirajteNas")
   var placeholder=["Vaše ime","Vaše prezime","Vaš e-mail"]
   var tip=["text","text","email"];
   var id=["ime","prezime","mejl"];
   var name=["name","surname","mail"];
   var pId=["greskaNaImenu","greskaNaPrezimenu","greskaNaMejlu"];
   var opisGreske=["Niste pravilno uneli ime (prvo slovo mora biti veliko).","Niste pravilno uneli prezime (prvo slovo mora biti veliko).","Niste uneli Vaš e-mail u pravilnom formatu."]
   for(let i=0;i<placeholder.length;i++){
     forma+=`<input type="${tip[i]}" placeholder="${placeholder[i]}" class='popuniSirinu' id="${id[i]}" name='${name[i]}'/>
     <p class='greska' id='${pId[i]}'>${opisGreske[i]}</p>`
   }
   forma+= `<textarea class='popuniSirinu' name="txtArea" placeholder="Vaša poruka" id="txtArea" cols="30" rows="10"></textarea>
   <p class='greska' id='greskaNaTekstPoruka'>Niste ništa uneli.</p>
   <input type="submit" value='Pošalji' id='posaljiPodatke'/>
   <p id='nijeGreska'>Vaša poruka je poslata !<br/>Javićemo Vam se uskoro.</p>
 </form>`
 kontakt.innerHTML=forma;
 }
 kontaktirajteNas();

