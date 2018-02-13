document.getElementById("about").onclick =  function(){openAboutModal()};
document.getElementById("projects").onclick = function(){openProjectModal()};
document.getElementById("closeAbout").onclick = function(){closeAboutModal()};
document.getElementById("closeProject").onclick = function(){closeProjectModal()};

function openAboutModal(){
    document.getElementById('aboutModal').style.display = "block";

    window.onclick = function(event){
      if(event.target == document.getElementById('aboutModal')){
      document.getElementById('aboutModal').style.display = "none";
    }
  }
}

function closeAboutModal(){
  document.getElementById('aboutModal').style.display ="none";
}

function openProjectModal(){
    document.getElementById('projectModal').style.display = "block";

    window.onclick = function(event){
      if(event.target == document.getElementById('projectModal')){
      document.getElementById('projectModal').style.display = "none";
    }
  }
}

function closeProjectModal(){
  document.getElementById('projectModal').style.display ="none";
}
