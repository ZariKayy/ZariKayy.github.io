var i = 0;
function move() {
    let progress = document.getElementById("num").value;
    let num = (progress/100);
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
      if (width >= num) {
        clearInterval(id);
        
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
}
let btn = document.getElementById("btn");
btn.onclick = move;
