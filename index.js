const img=document.querySelector("header img:not(:first-child)");
const cross=document.querySelector(".cross>img");
const popup=document.getElementsByClassName("popup")[0];
console.log(popup)
img.addEventListener('click',(e)=>{
    popup.style.display="flex";
})

cross.addEventListener('click',(e)=>{
    popup.style.display="none";
})