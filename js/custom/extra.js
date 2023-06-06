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
