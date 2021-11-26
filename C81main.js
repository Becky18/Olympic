var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
var color="blue"

    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=2;
    ctx.arc(40,40,200,0,2*Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=2;
    ctx.arc(80,40,200,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=2;
    ctx.arc(120,40,200,0,2*Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth=2;
    ctx.arc(55,70,200,0,2*Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle="green";
    ctx.lineWidth=2;
    ctx.arc(95,70,200,0,2*Math.PI);
    ctx.stroke();

