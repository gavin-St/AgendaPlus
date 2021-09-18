var currentPage = 1;
function show(shown, hidden1, hidden2) {
    document.getElementById(shown).style.display = 'block'
    document.getElementById(hidden1).style.display = 'none'
    document.getElementById(hidden2).style.display = 'none'
}

document.getElementById("button1").addEventListener("click", function(){
    show('page 1', 'page 2', 'page 3')
    document.getElementById("button" + String(currentPage)).style.opacity = 1;
    currentPage = 1;
    document.getElementById("button" + String(currentPage)).style.opacity = 0.6;
    let x = document.getElementsByClassName("time")
    for (var i =0; i<x.length;i++){
        x[i].style.display = "none"; 
    }

});

document.getElementById("button2").addEventListener("click", function(){
    show('page 2', 'page 1', 'page 3') 
    timeline();
    document.getElementById("button" + String(currentPage)).style.opacity = 1;
    currentPage = 2;
    document.getElementById("button" + String(currentPage)).style.opacity = 0.6;
    
});

document.getElementById("button3").addEventListener("click", function(){
    show('page 3', 'page 2', 'page 1')
    document.getElementById("button" + String(currentPage)).style.opacity = 1;
    currentPage = 3;
    document.getElementById("button" + String(currentPage)).style.opacity = 0.6;
});
