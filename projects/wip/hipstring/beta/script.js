
function allowDrop(ev)
{
ev.preventDefault();

}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
document.getElementById("positive").style.backgroundColor = "#A0FFA0";
document.getElementById("negative").style.backgroundColor = "#FF6060";
}
function dragEnd(ev)
{
document.getElementById("positive").style.backgroundColor = "#AAAAAA";
document.getElementById("negative").style.backgroundColor = "#AAAAAA";
}
function dropNegative(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
document.getElementById("negative").appendChild(document.getElementById(data));
}
function dropNeutral(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
document.getElementById("unassigned").appendChild(document.getElementById(data));
}
function dropPositive(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
document.getElementById("positive").appendChild(document.getElementById(data));
}
