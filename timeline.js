var main_canvas = document.getElementById("canvas");
var ctx = main_canvas.getContext("2d")
var today = new Date();
var cur_hour = (today.getHours()+24)%24;
var obj =[];

document.getElementById("create_event").addEventListener("click",function(){
    document.getElementById("event_interface").style.display = "block"
    document.getElementById("darken").style.display = "block"
})
function timeline(){
  /*
    for(i=0;i<10;i++){
        let btn = document.createElement("BUTTON")
        btn.innerHTML = "HIIIIIIIIIIIIII"
        btn.setAttribute("class","created")
        //console.log(document.querySelectorAll(".created"))
        document.body.appendChild(btn);
    }
    */
    for(i=0;i<25;i++){
        let time = document.createElement("p")
        time.innerHTML = String((cur_hour+i+1)%24)+":00";
        time.setAttribute("class","time")
        time.style.position = "absolute"
        time.style.left = String(i*180+14)+"px"
        document.body.appendChild(time);
    }
    for(i=0;i<25;i++){
        let start ={x: 0+(i*180)+20,y:0 };
        ctx.beginPath();
        ctx.moveTo(start.x,start.y)
        ctx.lineTo(start.x,start.y+1000)
        ctx.stroke();
    }

    localStorage.setItem("timeline", `[{"starttime": "8:00", "endtime": "10:00", "name":"testing", "details": "testing again"}]`);
    existingEvents();
}



  //add to storage && create button on screen
function eventCreator (starttime, endtime, name, details) {
    this.starttime = starttime;
    this.endtime = endtime;
    this.name = name;
    this.details = details;
    var btn = document.createElement("button");
        
    btn.setAttribute('id', name);
    btn.innerHTML = name

    let foo = starttime.split(":");
    let bar = endtime.split(":");

    let xcoor = {
        'left': String((((parseInt(foo[0]) - cur_hour + 23)%24) * 180 + parseInt(foo[1]) * 3) + 28) + 'px',
        'width' : String((((parseInt(bar[0]) - cur_hour + 23)%24) * 180 + parseInt(bar[1]) * 3 ) - (((parseInt(foo[0]) - cur_hour + 23)%24) * 180 + parseInt(foo[1]) * 3)) + 'px',
        }
 
    btn.style.position = "absolute";
    btn.style.left = xcoor.left;
    btn.style.width = xcoor.width;
    document.body.appendChild(btn);
    obj.push(`{"starttime":"${starttime}", "endtime":"${endtime}", "name":"${name}", "details":"${details}"}`);
    localStorage.setItem("timeline", JSON.stringify(obj));
}

function existingEvents(){
    for (i = 0; i < JSON.parse(localStorage.getItem("timeline")).length; i++){
        var event = JSON.parse(localStorage.getItem('timeline'))[i];
        var starttime = String(event.starttime);
        var endtime = String(event.endtime);
        var name = String(event.name);
        var details = String(event.details);
        let foo = starttime.split(":");
        let bar = endtime.split(":");

        var btn = document.createElement("button");
        btn.setAttribute('id', name);
        btn.innerHTML = name;
        btn.style.position = "absolute";
        btn.style.left = String((((parseInt(foo[0]) - cur_hour + 23)%24) * 180 + parseInt(foo[1]) * 3) + 28) + 'px';
        btn.style.width = String((((parseInt(bar[0]) - cur_hour + 23)%24) * 180 + parseInt(bar[1]) * 3 ) - (((parseInt(foo[0]) - cur_hour + 23)%24) * 180 + parseInt(foo[1]) * 3)) + 'px';
        document.body.appendChild(btn);

    };
}
