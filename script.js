const menuButton = document.getElementById("menu");
const menu = document.querySelector(".navlinks");
const toTop = document.querySelector(".top");
const header = document.querySelector(".header-content");

var active = false;

window.onload = function(){ 
    header.classList.add("anim");
}

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 100){
        if(active == false){
            toTop.classList.add("active");
            active = true;
            if(menu.classList.contains("mobile"))
                menu.classList.remove("mobile");
        }
    }
    else{
        if(active == true){
            toTop.classList.remove("active");
            active = false;
        }
    }
})

menuButton.addEventListener("click",function(){
    menu.classList.toggle("mobile");
})
