//Cursor animation
const cursor = document.querySelector(".cursor");
document.addEventListener('mousemove',(e) =>{
let x =e.clientX
let y = e.clientY

    cursor.style.top = y + "px"
    cursor.style.left = x + "px"
    cursor.style.display = "block"

});
document.addEventListener('mouseout',() => {
    cursor.style.display = "none"
})
//cursor element hover
document.addEventListener('mouseover',(e) =>{
    //let cursorTxt = document.querySelector('#btn')
    const item = e.target;  //Important to get the information

    if (item.id === 'brand' || item.id === 'hamburger' || item.id === 'btn'){
        cursor.classList.add('cursor-active')
    }else{
        cursor.classList.remove('cursor-active')
        }
    
})


// Navmenu Animation:
let nav = document.querySelector('.navbar')
let brand =document.querySelector('.brand')

const btn_menu = document.querySelector('.menu-button')
window.addEventListener("scroll", fixNav)

window.addEventListener("scroll", scroll)
let count = false;

/*function scroll(){
console.log(window.scrollY, nav.offsetHeihgt)
}*/

function fixNav(){
    
    if(window.scrollY > 100 && count===false){
            nav.classList.add("active")
            brand.classList.add("active")
            btn_menu.classList.add("active")
            
            
    }else{
        nav.classList.remove("active")
        brand.classList.remove("active")
        btn_menu.classList.remove("active")
       
    }
}

// Hero Text Animation:
const add_text = document.querySelector("#add_text")
const text = "FUTURE"
let i=0
let speed = 300;

function typeWriter(){
    if(i < text.length){
        add_text.innerHTML += text.charAt(i);
        i++
       
    }
    setTimeout(typeWriter,speed)
};

//animation SearchButton
const input_search = document.querySelector(".search-input")
const btn_search = document.querySelector(".btn-search")

btn_search.addEventListener("click",() => {
    input_search.classList.toggle('active')
    
    btn_search.classList.toggle('active')
})


//Timeline Magic Laden der Seite
const tl = gsap.timeline({defaults: {duration:1.5}})
const hero_text2 = document.querySelector("#text2")
const btn_hero = document.querySelector(".container-btn")
const hero_text = document.querySelector("#text")


tl.fromTo(hero_text,0.5,{opacity:0},{opacity:1,delay:0.5})
tl.fromTo(add_text,{},{typeWriter,color:"#3aaf9f"})
tl.fromTo(hero_text2,{opacity:0},{opacity:1, delay:1})
tl.fromTo(btn_hero,{opacity:0},{opacity:1})


//Hamburger animation
const hamburger = document.querySelector(".menu-button")
const bar_top = document.querySelector("#top")
const bar_bottom = document.querySelector("#bottom")
const bar = document.querySelector(".bar")

let menuOpen= false;

function animationHam(){
    if (menuOpen ===false){
    gsap.to(bar_top,0.3, {y:7})
    gsap.to(bar_bottom,0.3, {y:-7})
    gsap.to(bar_top, 0.3,{delay:0.3,rotate:45,background:"#b52b2b"})
    gsap.to(bar_bottom, 0.3,{delay:0.3,rotate:-45,background:"#b52b2b"})
    menuOpen = true;
    
}else{
    gsap.to(bar_bottom,0.3,{rotate:0})
    gsap.to(bar_top, 0.3,{rotate:0})
    gsap.to(bar_bottom, 0.3,{delay:0.3,y:0,background:""})
    gsap.to(bar_top, 0.3,{delay:0.3,y:0,background:""})
    menuOpen = false;
    }
}


//Mobile Menu
const menu_mobile = document.querySelector('.mobile_menu')
const rl= gsap.timeline({defaults: {duration:1.5}})

hamburger.addEventListener('click', () => {

    if (count === false ){
        gsap.to(menu_mobile, {delay:0.2,x:"0%",ease:"power3",duration:1})
       
        
      // menu_mobile.classList.add('active')
       count=true;
       
    }else{
        gsap.to(menu_mobile, {x:"100%",ease:"power3",duration:1})
        
        
   // menu_mobile.classList.remove('active')
        count=false;
    }

})




