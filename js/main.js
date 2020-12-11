
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

var galrij=["ordinacija1","ordinacija2","ordinacija3","ordinacija4","ordinacija5","ordinacija6","ordinacija7","ordinacija8","ordinacija9"]