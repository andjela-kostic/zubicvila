
var el = document.getElementById("naslov");
var le= document.getElementById("naslov");
setInterval(function(){
    el.innerHTML="ZUBI SU OGLEDALO VAŠEG ZDRAVLJA"
},3000);
setInterval(function(){
    el.innerHTML="ZATO VODITE RAČUNA O NJIMA"
},5000); 

var navigate=document.getElementById("navigacija");
var navBar=`<ul>`;
var navNiz=["Home","About us","Galery","What we provide","Contact"];
navBar+='<img src="img/icon.png" alt="logo"/>'
for(let i=0;i<navNiz.length;i++){
    navBar+=`<li><a href="">${navNiz[i]}</a></li>`;
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
var sadrzaj=["060 939156","PON-PET: 08-20","zubicvila@gmail.com","Zdravka Čelara 16"];
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

var pitanja=["Uticaj genetike na nastanak i razvoj parodontopatije","Uzrok lošeg zadaha",]
var odgovori=["Genetika, naučno je potvrđeno, igra značajnu ulogu u nastanku i razvoju parodontopatije. Međutim, ona nije jedini uzročnik. Nepravilan položaj zuba, nedostatak pojedinih zuba, otežano ili loše održavanje oralne higijene su još neki od faktora koji doprinose parodontopatiji. Zavisno od faze u kojoj se nalazi, parodontopatija se može različito tretirati. Najbitinije je da se redovnim posetama stomatologu prati stanje i u skladu sa savetima stomatologa primenjuje adekvatna terapija.","Neprijatan zadah iz usta ili halitozu mogu da prouzrokuju mnogobrojni faktori kao što su odoriformna hrana, kariozni zubi, oboljenja desni, suvoća usta, pušenje cigareta, oboljenja sinusa ili disajnih puteva, određena opšta oboljenja, neadekvatna oralna higijena ili upotreba određenih lekova."];

var red=document.getElementById("redovi")
var hvatac='';

for(let i=0;i<pitanja.length;i++){
  hvatac+=`<div class="colaps bg-danger">
              <h5>${pitanja[i]}</h5>
              <span>+</span>
          </div>
          <div class="content">
              <p>${odgovori[i]}</p>
          </div>
          `
        }
red.innerHTML=hvatac;
//$(".colaps").click(function () {

 /* $colaps = $(this);
  //getting the next element
  $content = $colaps.next();
  //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
  $content.slideToggle(500, function () {
      //execute this after slideToggle is done
      //change text of header based on visibility of content div
      $colaps.text(function () {
          //change text based on condition
          return $content.is(":visible") ? "" : "";
      });
  });

});*/

/*$('.colaps').hover(function() {
  $(this).toggleClass('hover');
});

var lastItem;

$('.colaps').click(function(currentItem) {
  var currentItem = $(this);
  if ($(this).next().height() == 0) {
      $(lastItem).css({'font-weight':'normal'});
      $(lastItem).next().animate({height: '0px'},400,'swing');
      $(this).css({'font-weight':'bold'});
      $(this).next().animate({height: '250px',opacity: 1},400,'swing');
  } else {
      $(this).css({'font-weight':'normal'});
      $(this).next().animate({height: '0px',opacity: 1},400,'swing');
  }
  lastItem = $(this);
});*/