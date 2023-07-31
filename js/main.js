let  byTag = document.getElementsByTagName("h1");
console.log(byTag);
let byId = document.getElementById('idNomi')
let byClass = document.getElementsByClassName("classNomi");
let bySelector = document.querySelector("#idNomi");
let bySelectorAll = document.querySelectorAll(".classNomi");
let byAll = document.getElementsByTagName("h1").namedItem("idNomi");
byAll.style.color = "yellow";
byAll.style.backgroundColor = "blue";
byAll.style.width = "300px";
byAll.style.height ="250px";
byAll.style.fontSize = "45px";
byAll.style.paddingTop = "90px";
byAll.style.boxSizing ="border-box";
byAll.style.textAlign = "center";
byAll.style.border = "10px solid green";

console.log(byAll);
