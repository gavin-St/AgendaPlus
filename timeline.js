function timeline(){

    


    var main_canvas = document.getElementById("canvas");
    var ctx = main_canvas.getContext("2d")
    var today = new Date();
    var cur_hour = (today.getHours()+24)%24;

    for(i=0;i<10;i++){
        let btn = document.createElement("BUTTON")
        btn.innerHTML = "HIIIIIIIIIIIIII"
        btn.setAttribute("class","created")
        //console.log(document.querySelectorAll(".created"))
        document.body.appendChild(btn);  
    }
    for(i=0;i<25;i++){
        let time = document.createElement("p")
        time.innerHTML = String((cur_hour+i+1)%24)+":00";
        time.setAttribute("class","time")
        time.style.position = "absolute"
        time.style.left = String(i*150+14)+"px"
        document.body.appendChild(time);
    }
    for(i=0;i<25;i++){
        let start ={x: 0+(i*150)+20,y:0 };
        ctx.beginPath();
        ctx.moveTo(start.x,start.y)
        ctx.lineTo(start.x,start.y+1000)
        ctx.stroke();
    }
}

