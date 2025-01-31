function moving() {
    const box = document.getElementById("box");
    let pos = 0;


    const interval =  setInterval(animation, 10);

    function animation() {
        if (pos < 350 && pos1 < 350) {
            pos++;
            box.style.top = pos + "px";
            box.style.left = pos + "px";
        } else{
            clearInterval(interval)
        }
    }
}
