var main_canvas = document.getElementById("canvas");
var ctx = main_canvas.getContext("2d")
var today = new Date();
var cur_hour = (today.getHours()+24)%24;
var obj = [];

document.getElementById("create_event").addEventListener("click",function(){
    document.getElementById("event_interface").style.display = "block"
    document.getElementById("darken").style.display = "block"
})
document.getElementById("close_event_interface").addEventListener("click",function(){
    document.getElementById("event_interface").style.display = "none"
    document.getElementById("darken").style.display = "none"
})
//MUST INCLUDE NAME
document.getElementById("event_submit").addEventListener("click",function(){
    let a = document.getElementById("event_name").value;
    let b = document.getElementById("event_start_time").value;
    let c = document.getElementById("event_end_time").value;
    let d = document.getElementById("event_details").value;
    eventCreator(b,c,a,d);
    document.getElementById("event_interface").style.display = "none"
    document.getElementById("darken").style.display = "none"
})
let occupied = new Array(1500);

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
      for (var i = 0; i < occupied.length; i++) {
        occupied[i] = [false,false,false,false,false,false,false,false];
      }
      console.log(localStorage.getItem("timeline"))
      existingEvents();
      for(i=0;i<25;i++){
          let time = document.createElement("p")
          time.innerHTML = String((cur_hour+i)%24)+":00";
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
  
      
  //eventCreator("20:00", "21:00", "test", "this is a test event");
 //eventCreator("14:00", "16:30", "test2", "this is also a test event");
  //console.log(obj);
  }
  
  
  
          //add to storage && create button on screen
  function eventCreator (starttime, endtime, name, details) {

      
      let foo = starttime.split(":");
      let bar = endtime.split(":");

    let temp = ((parseInt(bar[0]) - cur_hour + 24)%24);
    if(temp==0) temp = 24;

      let xcoor = {
          'left': (((parseInt(foo[0]) - cur_hour + 24)%24) * 180 + parseInt(foo[1]) * 3) + 28,
          'width' : (temp * 180 + parseInt(bar[1]) * 3 ) - (((parseInt(foo[0]) - cur_hour + 24)%24) * 180 + parseInt(foo[1]) * 3) ,
          }
    let ycoor = 0;

    console.log(xcoor.left,xcoor.width)
          console.log(xcoor.left+3)
    loop:for(var j = 1;j<=6;j++){
        for(var i=xcoor.left+3;i<xcoor.width+xcoor.left-3;i+=3){

            console.log(parseInt(i/3),j)
            if(occupied[parseInt(i/3)][j]!=false){ break;}
            occupied[parseInt(i/3)][j] = true;
            //console.log(occupied[10][1])
            if(xcoor.width+xcoor.left-i-4<4) {
                ycoor = j; break loop;
            }
        
      }
    }
    if(ycoor==0) {alert("too much stacking")}
    else{
        var btn = document.createElement("button");
        btn.setAttribute('id', name);
        btn.innerHTML = name  
        btn.style.top = String(ycoor*21+76)+"px"
        btn.style.position = "absolute";
        btn.style.left = xcoor.left+"px";
        btn.style.width = xcoor.width+"px";
        document.body.appendChild(btn);
        obj = JSON.parse(localStorage.getItem("timeline"));
        
        obj.push(`{"starttime":"${starttime}", "endtime":"${endtime}", "name":"${name}", "details":"${details}"}`);
        localStorage.setItem("timeline", JSON.stringify(obj));
        console.log(localStorage.getItem("timeline"))
    }
  }

  
  
function existingEvents(){
    for (i = 0; i < JSON.parse(localStorage.getItem("timeline")).length; i++){
        var event = JSON.parse(JSON.parse(localStorage.getItem('timeline'))[i]);
        var starttime = String(event.starttime);
        var endtime = String(event.endtime);
        var name = String(event.name);
        var details = String(event.details);
        let foo = starttime.split(":");
        let bar = endtime.split(":");


        let temp = ((parseInt(bar[0]) - cur_hour + 24)%24);
    if(temp==0) temp = 24;

      let xcoor = {
          'left': (((parseInt(foo[0]) - cur_hour + 24)%24) * 180 + parseInt(foo[1]) * 3) + 28,
          'width' : (temp * 180 + parseInt(bar[1]) * 3 ) - (((parseInt(foo[0]) - cur_hour + 24)%24) * 180 + parseInt(foo[1]) * 3) ,
          }
    let ycoor = 0;

    console.log(xcoor.left,xcoor.width)
          console.log(xcoor.left+3)
    loop:for(var j = 1;j<=6;j++){
        for(var i=xcoor.left+3;i<xcoor.width+xcoor.left-3;i+=3){

            console.log(parseInt(i/3),j)
            if(occupied[parseInt(i/3)][j]!=false){ break;}
            occupied[parseInt(i/3)][j] = true;
            //console.log(occupied[10][1])
            if(xcoor.width+xcoor.left-i-4<4) {
                ycoor = j; break loop;
            }
        
      }
    }
    if(ycoor==0) {alert("too much stacking")}
    else{
        var btn = document.createElement("button");
        btn.setAttribute('id', name);
        btn.innerHTML = name  
        btn.style.top = String(ycoor*21+76)+"px"
        btn.style.position = "absolute";
        btn.style.left = xcoor.left+"px";
        btn.style.width = xcoor.width+"px";
        document.body.appendChild(btn);
        obj.push(`{"starttime":"${starttime}", "endtime":"${endtime}", "name":"${name}", "details":"${details}"}`);
        localStorage.setItem("timeline", JSON.stringify(obj));
    }

    };
}
