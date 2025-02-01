let interval;
let pos = 0;
function moving() {
    const box = document.getElementById("box");
  
    
    interval =  setInterval(animation, 10);
    

    function animation() {
        if (pos < 350) {
            pos++;
            box.style.top = pos + "px";
            box.style.left = pos + "px";
        }
         else{
            clearInterval(interval);
        }
    }
}

document.getElementById("stopButton").addEventListener("click", function () {
    clearInterval(interval);
})