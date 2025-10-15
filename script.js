const arr=[
    {name:'beach',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:'mountain',image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:'clouds',image:'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:'landscape',image:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:'nature',image:'https://images.unsplash.com/photo-1759864039818-35eea696639e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'},
{name:'nature',image:'https://images.unsplash.com/photo-1760132562597-dd9c467cd9cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632'},
{name:'nature',image:'https://images.unsplash.com/photo-1759780763396-505ccfe121ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'},
    {name:'nature',image:'https://images.unsplash.com/photo-1760029012684-7cc3800aba71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1972'}
]
var clutter="";
function showTheCards(){
    arr.forEach(function(obj){
   clutter+=`<img src="${obj.image}" alt="">`
    })
    console.log(clutter)
    document.querySelector(".container").innerHTML=clutter
}

showTheCards();
let imgs = document.querySelectorAll("img");
let overlay = document.querySelector(".overlay");
imgs.forEach(function(img) {
    img.addEventListener('click', (event) => {
        overlay.style.display = "flex";
        overlay.innerHTML = `<img src="${event.target.src}" alt="" class="modal-img">`;
    });
});
overlay.addEventListener('click', (event) => {
    overlay.style.display = "none";
    overlay.innerHTML = "";
 
});
