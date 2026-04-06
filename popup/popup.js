const toggleBtn = document.getElementById("toggleButton");
let flag = false;

toggleBtn.addEventListener("click", ()=>{
    flag = !flag;
    console.log(flag);
    // send it to recommendation-remover script
    
}) 