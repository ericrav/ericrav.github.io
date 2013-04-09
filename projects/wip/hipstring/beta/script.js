$(document).ready(function () {
   
});

function allowDrop(ev)
{
ev.preventDefault();

}

function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
    $("#"+ev.target.id).draggable();
    document.getElementById("positive").style.backgroundColor = "#A0FFA0";
    document.getElementById("negative").style.backgroundColor = "#FF6060";
} 
function dragEnd(ev)
{
document.getElementById("positive").style.backgroundColor = "#CCCCD8";
document.getElementById("negative").style.backgroundColor = "#CCCCD8";
    $("#"+ev.target.id).draggable("disable");
    submitReady();
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
function submitReady() {
    if ($(".unassigned li").size() < 10) {
	if (!$("#submitBtn").is(":visible")) {
	    $("#submitBtn").fadeIn("slow");
	}
    } else {
	$("#submitBtn").hide();
}
}
