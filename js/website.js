var modal;
var btn;
var span;

if(document.getElementById == "aboutModal"){
  modal = document.getElementById("aboutModal");
  btn = document.getElementById("about");
  span = document.getElementsByClassName("close");
}
else if (document.getElementById == "projectModal") {
  modal = document.getElementById("projectModal");
  btn = document.getElementById("projects");
  span = document.getElementsByClassName("close2");
}

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) { // FIXME: close button does not close modal
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
