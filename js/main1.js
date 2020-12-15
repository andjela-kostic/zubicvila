
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

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

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

function futer(){
    var futer=document.getElementById("futer");
    var sadrzajFutera=["Sitemap","Autor","Dokumentacija"];
    var adresaSadrzaja=["sitemap.xml","autor.html",""];
    var hvatacFutera=''
    
    for(let i=0;i<sadrzajFutera.length;i++){
      hvatacFutera+=`
                    <div>
                      <a href="${adresaSadrzaja[i]}" target="_blank">${sadrzajFutera[i]}</a>
                    </div>
                  `
    }
    futer.innerHTML=hvatacFutera;
    }