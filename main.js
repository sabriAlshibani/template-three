let otherLink = document.getElementById("mega-menu")
console.log(otherLink)
let megaMenu = document.querySelector(".mega-menu")
otherLink.onclick = function () {
    megaMenu.style.opacity= "1"
    megaMenu.style.zIndex= "100"
    megaMenu.style.top= "100%"

}