/* navbar */
window.addEventListener("DOMContentLoaded", event=>{
    var navbarMobile = function() {
        const nCollapsible = document.body.querySelector("#mainNavbar");
        if(!nCollapsible){
            return;
        }
        if(window.scrollY === 0){  /*ekran aşağı kaydırılmamışssa */
            nCollapsible.classList.remove("navbar-mobile");
        }else{                      /*ekran aşağı kaydırılmışsa */
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    document.addEventListener("scroll", navbarMobile);   /*ekran aşağı çekilirse navbarMobile fonksiyonun çağır */
    const myNavbar = document.body.querySelector("#mainNavbar");
    if(myNavbar){
        new bootstrap.ScrollSpy(document.body,{
            target: "mainNavbar",
            offset:74
        });
    }
});
/*mobil menude herhangi bir bölüme tıklayınca menunun otomatik kapanmasını sağlayan kodlar */
var BtnCanvas = document.querySelectorAll(".btn-close-canvas"); /* hepsini aldığımı için array gibi çalışıcaktır */ 
for(let i=0; i < BtnCanvas.length; i++) {
    BtnCanvas[i].addEventListener("click", function(){
        document.querySelector('[data-bs-dismiss="offcanvas"]').click(); /*bu attribitue sahip olana tıklatma işlemi */
    });
}

(function () {
    'use strict'
    var myName = document.querySelector("#name");
    var myEmail = document.querySelector("#email");
    var myPhone = document.querySelector("#phone");
    var myMessage = document.querySelector("#message");
    var myBtn = document.querySelector("#BtnContact");

    if (myMessage.value.length == 0) {
        myBtn.disabled = true;  
    }

    myMessage.addEventListener('keyup', function() {
        document.getElementById("current-character").textContent = myMessage.value.length;
        if(myMessage.value.length >= 10){
            myBtn.disabled = false;
        }else{
            myBtn.disabled = true;
        }
    });

    var myForms = document.querySelector(".needs-validation");
    myForms.addEventListener("submit", function(e) {
        if(!myForms.checkValidity()) {              //checkValidity() formu kontrol eder
            e.preventDefault();                     // preventDefault() tarayıcıda form gönderme işlemini engelliyor
            e.stopPropagation();                    // stopPropagation() form gönderme olayı durduruluyor
        }
    }, false);



})();











