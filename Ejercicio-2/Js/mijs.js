'use strict';

function Menu() {

    var menu = document.getElementById("menu");

    var ul = document.createElement("ul");
    menu.appendChild(ul);

    var li1 = document.createElement("li");
    var a1 = document.createElement("a");
    a1.setAttribute("href","#");
    var text1 = document.createTextNode("Home")
    a1.appendChild(text1);
    li1.appendChild(a1);

    var li2 = document.createElement("li");
    li2.setAttribute("class","dropdown");
    var a2 = document.createElement("a");
    a2.setAttribute("class","dropbtn");
    a2.setAttribute("href","#");
    var text2 = document.createTextNode("Menus")
    a2.appendChild(text2);
    li2.appendChild(a2);
    var divDes = document.createElement("div");
    divDes.setAttribute("class","dropdown-content");
    a2.appendChild(divDes);
    var sub1 = document.createElement("a");
    sub1.setAttribute("href","#");
    var text1 = document.createTextNode("Menu 1");
    sub1.appendChild(text1);
    var sub2 = document.createElement("a");
    sub2.setAttribute("href","#");
    var text2 = document.createTextNode("Menu 2");
    sub2.appendChild(text2);
    li2.appendChild(divDes);
    divDes.appendChild(sub1);
    divDes.appendChild(sub2);

    var li3 = document.createElement("li");
    var a3 = document.createElement("a");
    a3.setAttribute("href","#");
    var text3 = document.createTextNode("Setting")
    a3.appendChild(text3);
    li3.appendChild(a3);

    var li4 = document.createElement("li");
    var a4 = document.createElement("a");
    a4.setAttribute("href","#");
    var text4 = document.createTextNode("Contact")
    a4.appendChild(text4);
    li4.appendChild(a4);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

}

window.onload = Menu;