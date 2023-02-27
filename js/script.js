let iconMenu = document.querySelector('.icon-menu')
let xBtn = document.querySelector('.closemenu')
let mobileNav = document.querySelector('.nav')
let body = document.querySelector('body')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let logoAndBurger = document.querySelector('.logo-and-burger')
let featuresBtn = document.querySelector('.featuresbtn')
let featuresList = document.querySelector('.featureslist')
let companyBtn = document.querySelector('.companybtn')
let companyList = document.querySelector('.companylist')
let arrowDownFeatures = document.getElementById('arrowdownfeatures')
let arrowUpFeatures = document.getElementById('arrowupfeatures')
let arrowDownCompany = document.getElementById('arrowdowncompany')
let arrowUpCompany = document.getElementById('arrowupcompany')

// Add Event listener



mobileNav.style.visibility = "hidden"
body.style.backgroundColor = "white"
arrowDownFeatures.style.display = "inline"
arrowUpFeatures.style.display = "none"
arrowDownCompany.style.display = "inline"
arrowUpCompany.style.display = "none"


iconMenu.addEventListener("click", (event) => {
    if (mobileNav.style.visibility = "hidden") {
        mobileNav.style.visibility = "visible";
        main.classList.add("blurred");
        mobileNav.classList.add("no-overlay");
        footer.classList.add("blurred");
        logoAndBurger.classList.add("blurred");
        body.style.backgroundColor = "grey";
        console.log("Menu opened");
    }
})

xBtn.addEventListener("click", (event) => {
    if (mobileNav.style.visibility = "visible") {
        mobileNav.style.visibility = "hidden";
        main.classList.remove("blurred");
        footer.classList.remove("blurred");
        logoAndBurger.classList.remove("blurred");
        body.style.backgroundColor = "white";
        featuresList.classList.remove("openlist");
        companyList.classList.remove("openlist")
        console.log("Menu closed");
    }
})


featuresBtn.addEventListener("click", (event) => {
    featuresList.classList.toggle("openlist");
    arrowDownFeatures.style.display == "none" ? arrowDownFeatures.style.display = "inline" :
        arrowDownFeatures.style.display = "none";
    arrowUpFeatures.style.display == "inline" ? arrowUpFeatures.style.display = "none" :
        arrowUpFeatures.style.display = "inline";

    console.log("Features list toggled");
})



companyBtn.addEventListener("click", (event) => {
    companyList.classList.toggle("openlist")
    arrowDownCompany.style.display == "none" ? arrowDownCompany.style.display = "inline" :
        arrowDownCompany.style.display = "none";
    arrowUpCompany.style.display == "inline" ? arrowUpCompany.style.display = "none" :
        arrowUpCompany.style.display = "inline";

    console.log("Company list toggled")
})
