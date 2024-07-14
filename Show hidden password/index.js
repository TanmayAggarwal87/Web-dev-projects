const input  = document.querySelector("input")
const eye  = document.querySelector("#eyeIcon")
const eyeImg = document.querySelector(".eye-container")



eye.addEventListener("click",()=>{
    if(input.type==="password"){
        input.type = "text"
       
    }
    else{
        input.type = "password"
      
    }
})
