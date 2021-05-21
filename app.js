// console.log(document.childNodes[1].childNodes[0].childNodes[1])

// var a = document.getElementById('kuchbhi')
// console.log(a.childNodes[7])

// var d = document.getElementById("kuchbhi");
// var p = d.getElementsByTagName("p");
// var contents = p[2].innerHTML = "jkhajkshjkhas";
// console.log(p[1].childNodes)


// console.log(document.childNodes[1].childNodes[2].childNodes[0])

// var acha = document.getElementById('humpty')
// console.log(acha.childNodes[0].nodeType)

// var acha = document.getElementById('humpty')
// console.log(acha.lastChild)

// var kidNode = document.getElementById("div2");
// var pNode = kidNode.parentNode;
// console.log(pNode)
// var firstEl = document.getElementById("div1");
// var secondEl = firstEl.nextSibling;
// console.log(secondEl)




// var ok = document.getElementById('hey')
// console.log(ok.nextSibling)

// var ok = document.getElementById('hey')
// console.log(ok.previousSibling)


var parent = document.getElementById("div1");
var target = parent.firstChild;
var nName = target.nodeName;
console.log(nName)