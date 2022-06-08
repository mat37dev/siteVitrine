/* Animation */
var typed = new Typed(".type", {
    strings: ["","Étudiant En Développement", "Développeur Amateur", "Développeur Jeux-Vidéos"],
    typeSpeed:100,
    BackSpeed:60,
    loop: true
})
/* Cote */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        removeBackSection();
        for (let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth <1200){
            coteSectionTogglerBtn();
        }
    })
}
function addBackSection(nb){
    allSection[nb].classList.add("back-section");
}
function removeBackSection(){
    for (let i=0;i<totalSection;i++){
        allSection[i].classList.remove("back-section");
    }
}
function showSection(element){
    for (let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element){
    for (let i=0;i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
/* Boutons de Redirections */
document.querySelector(".hire-me").addEventListener("click", function (){
    buttonRedirect(this);
})
document.querySelector(".btn-about").addEventListener("click", function (){
    buttonRedirect(this);
})
function buttonRedirect(element){
    const sectionIndex = element.getAttribute("data-section-index");
    showSection(element);
    updateNav(element);
    removeBackSection();
    addBackSection(sectionIndex);
}

/* Clique sur le burger */
const navTogglerBtn = document.querySelector(".nav-toggler"),
    cote = document.querySelector(".cote");
navTogglerBtn.addEventListener("click",()=>{
    coteSectionTogglerBtn();
})
function coteSectionTogglerBtn(){
    cote.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i=0;i<totalSection;i++){
        allSection[i].classList.toggle("open");
    }
}