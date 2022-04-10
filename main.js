const menu = document.querySelector(".ham");
const nav_links = document.querySelector(".nav-links");
let ind = true;
let counter = 0;
menu.addEventListener("click",function(){
    if(ind === true){ 
        nav_links.classList.add("active")
        ind = false;
    }
    else{
        nav_links.classList.remove("active")
        ind = true;
    }
});
const shorten = document.querySelector(".shorten_btt");
var api = `https://api.shrtco.de/v2/shorten?url=`;
async function shorten_link() {
    counter++;
    const link = document.querySelector(".link");
    const response = await fetch(api + link.value);
    var data = await response.json();
    const html = document.querySelector(".shorten1");
    html.innerHTML += `
        <div class="shorhenlink" ">
            <h5 class="websitelink">${link.value}</h5>
            <div class="line"></div>
            <div class="row">
            <h3 class="text_link" id="shorhenlink${counter}">${data.result.short_link}</h3>
            <h4 class="copy" id = "copy${counter}" onclick="copy(copy${counter},shorhenlink${counter})">Copy</h4>
        </div>
    `
}

function copy(copybtn,link){
    navigator.clipboard.writeText(link.innerHTML);
    copybtn.classList.add("copied");
    copybtn.innerHTML = "Copied"
}
shorten.addEventListener("click",function(){
    shorten_link();

});