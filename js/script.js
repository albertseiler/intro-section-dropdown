let iconMenu = document.querySelector('.icon-menu')
let xBtn = document.querySelector('.closemenu')
let mobileNav = document.querySelector('.nav')
let body = document.querySelector('body')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let logoAndBurger = document.querySelector('.logo-and-burger')
// Add Event listener



mobileNav.style.visibility = "hidden"
body.style.backgroundColor = "white"
body.classList.remove("overlay")

iconMenu.addEventListener("click", (event) => {
    if (mobileNav.style.visibility = "hidden") {
        mobileNav.style.visibility = "visible";
        main.classList.add("blurred");
        mobileNav.classList.add("no-overlay");
        footer.style.visibility = 'hidden';
        logoAndBurger.style.visibility = 'hidden';
        console.log("Menu opened");
    }
})

xBtn.addEventListener("click", (event) => {
    if (mobileNav.style.visibility = "visible") {
        mobileNav.style.visibility = "hidden";
        main.classList.remove("blurred")
        footer.style.visibility = 'visible';
        logoAndBurger.style.visibility = 'visible';
        console.log("Menu closed");
    }
})
