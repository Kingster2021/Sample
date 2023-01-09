// Document Object Model

// getElementById()
const banner = document.getElementById("banner");
// console.log(banner);
// console.dir(banner);

// getElementByTagName()
const paragraphs = document.getElementsByTagName("p")
// console.log(paragraphs);

// getElementByClassname()
const children = document.getElementsByClassName("child");
// console.log(children);

// querySelector()
const bannerQuery = document.querySelector( "#banner" );
// console.log(bannerQuery);

// querySelectAll()
const childrenQuery = document.querySelectorAll( "div.child" )
// console.log(childrenQuery);

// 
const heading = document.querySelector("h1");
// element.textContent
heading.textContent = "DOM";

const container = document.querySelector(".container");
// element.innerText
// console.log(container.textContent);
// console.log(container.innerText);
// container.innerText = "This is my Sample Text"

// element.innerHTML
// console.log(container.innerHTML);
container.innerHTML = "<h2>The New Improved Text Sample</h2>"

// attributes
const link1 = document.querySelector("ul li a");
// element.getAttribute();
// console.log( link1.getAttribute("href") );
// element.setAttribute(attributeName, value);
link1.setAttribute("href", "https://google.com")
link1.setAttribute("class", "link");

const links = document.querySelectorAll("ul li a");
links[1].setAttribute("href", "https://yahoo.com")

// for(let link of links) {
//     link.innerText = "I am a link";

// }

// Element style
const heading3 = document.querySelector("h3");
// console.dir(heading3);
heading3.style.fontSize = "50px";
heading3.style.color = "skyblue";
heading3.style.fontFamily = "Arial";

// console.log( window.getComputedStyle(link1).color );

// Classes
const demo = document.getElementById("demo");
// demo.setAttribute("class", "green");
// demo.setAttribute("class", "border");
// element.classList
// console.log( demo.classList );

demo.classList.add("green");
demo.classList.add("border");
demo.classList.remove("green");

// console.log( demo.classList.contains("green") );
// console.log( demo.classList.contains("border") );

demo.classList.toggle("green");
demo.classList.toggle("green");
demo.classList.toggle("green");

// if ( demo.classList.contains("green") ) {
//     demo.classList.remove("green");
// } else {
//     demo.classList.add("green");
// }

// Traversing Parent/Child/Siblings Elements
const listItem = link1.parentElement;
// console.log(listItem);

const list = listItem.parentElement;
// console.log( list.children );

// return an element
// console.log( list.previousElementSibling );
// console.log( list.nextElementSibling );

// return a Node
// console.log( list.previousSibling );
// console.log( list.nextSibling );

// Create a new Element
const menu = document.querySelector("#menu");

const item = document.createElement("li");
// create a blank element <li></Li>
// console.dir(item);
item.innerText = "I am a new li element";
item.classList.add("green");

menu.appendChild(item);

const item2 = document.createElement( "li" );
const anchor = document.createElement( "a" );

anchor.append("Click Me!");
anchor.href = "https://bing.com";

item2.append(anchor);
menu.append(item2, 'another text');

const item3 = document.createElement( "li" );
item3.append("I will be the first child");
menu.prepend(item3);

const before = document.createElement("li");
const after = document.createElement("li");
before.append("I am before green");
after.append("I am after green");

item.insertAdjacentElement( "beforebegin", before );
item.insertAdjacentElement( "afterend", after );

// Remove Child
// parentElement.removeChild()
const firstItem = document.querySelector( "#menu li" );
menu.removeChild(firstItem);

// Resolve an Element
// element.remove
demo.remove();
console.log(demo.parentElement);








