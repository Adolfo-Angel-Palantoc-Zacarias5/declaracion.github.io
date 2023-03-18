function accionsi(){
    alert("gracias por aceptar, te amo :3")
    location.href = "https://youtu.be/5DA1NMaQef0"
}

window.onload = (()=>{
    let move = document.querySelector("#move-randomly");
    move.addEventListener("mouseover", function() {
        move.style.position = "fixed";
        move.style.left = (Math.random() * window.innerHeight) + "px";
        move.style.top = (Math.random() * window.innerHeight) + "px";
        
    });
})