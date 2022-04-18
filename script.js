const menuButton = document.getElementById("menu");
const menu = document.querySelector(".navlinks");
const toTop = document.querySelector(".top");
const header = document.querySelector(".header-content");
const cookieBox = document.querySelector(".cookie");
const acceptCookie = document.querySelector(".acceptCookie");

var active = false;

acceptCookie.addEventListener("click", function(){
    document.cookie = "TestCookie=Accept; max-age="+60*60+";path=/";
    if(document.cookie){
        cookieBox.classList.add("hide");
    }
})

let checkCookie = document.cookie.indexOf("TestCookie=Accept");
if(checkCookie == -1){
    cookieBox.classList.add("add");
    cookieBox.classList.remove("hide");
}

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