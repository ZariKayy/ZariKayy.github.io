function move() {
    let box = document.getElementById("man-box");
    var style = window.getComputedStyle(box);
    var width = parseFloat(style.width) - 50;
    let man = document.getElementById("still-man");

    man.src = "images/runningMan.png";
    var pos = 0;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos > width) {
            clearInterval(id);
            man.src = "images/walkingMan.svg";
        } else {
            pos++;
            man.style.left = pos + "px";
        }
    }
}
 let moveMan = document.getElementById("still-man");
 moveMan.onclick = move; 
 

function rise() {
        //gather data
        const fundsRaised = document.getElementById("funds-raised-txt").value;
        let level = (fundsRaised/100);
        var progress = document.getElementById("progress");
        
        //validate data
        const goalError = isBlank(fundsRaised, "error-funds");
        if(goalError) return;
        
        var height = 1;
        var id = setInterval(frame, 10);
        
        function frame() {
            if (height >= level) { 
            clearInterval(id);
            } 
            else {
            height++;
            progress.style.height = height + "%";
            }
        }    
}
let fundsBtn = document.getElementById("funds-display");
fundsBtn.onclick = rise;

function isBlank(data, errorSpanId){
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}