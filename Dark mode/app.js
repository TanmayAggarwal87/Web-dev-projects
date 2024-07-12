let toggle = document.getElementById("switch")

toggle.addEventListener("click",()=> {
    if(toggle.checked ===true){
        document.body.style.backgroundColor = "black";
        document.body.style.color="white";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color="black";

    }
})