var obj2 = [];
var uniquechecklistnumber = 1; //remember to store this to localstorage
document.getElementById("createlist").addEventListener('click', function(){
    document.getElementById("create_checkList").style.display = "block";
    document.getElementById("darken1").style.display = "block";
})
document.getElementById("close_checklist_interface").addEventListener("click",function(){
    document.getElementById("create_checkList").style.display = "none"
    document.getElementById("darken1").style.display = "none"
})
document.getElementById("list_submit").addEventListener("click",function(){
    let a = document.getElementById("checklist1_title").value;
    document.getElementById("create_checkList").style.display = "none"
    document.getElementById("darken1").style.display = "none"
    listCreator(a);
})
function listCreator (title){
    var firstList = document.createElement("button");
    firstList.setAttribute('id','checklist'+ uniquechecklistnumber)
    firstList.setAttribute('class','initial_list')
    firstList.setAttribute("onclick",alert(this.id))
    uniquechecklistnumber++;
    firstList.innerHTML = title;
    var theDiv = document.getElementById("page 1");
    var content = document.createTextNode(firstList);
    theDiv.appendChild(firstList);

}
document.getElementsByClassName("initial_list").addEventListener("mouseover", function(){


})

    
    
 
class checkList{ 
    constructor( starttime, endtime, name, details){
        this.elementnumber = 1;
        this.starttime = starttime;
        this.endtime = endtime;
        this.name = name;
        this.details = details;
        obj2.push(`{"starttime":"${starttime}", "endtime":"${endtime}", "name":"${name}", "details":"${details}"}`);
        localStorage.setItem("checklist", JSON.stringify(obj2));

    }
    addElement() {
        this.elementnumber +=1;
        
    }



}
