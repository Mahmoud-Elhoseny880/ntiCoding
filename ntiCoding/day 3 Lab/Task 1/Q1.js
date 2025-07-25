
const centerContainer = document.createElement("div");
centerContainer.className = "center-container";
document.body.appendChild(centerContainer);

const ul = document.createElement("ul");


const title = document.createElement("li");
title.innerHTML = "<b>Menu</b>";
ul.appendChild(title);

const items = ["Articles", "Photos", "About", "Clients", "Contact"];

items.forEach((itemText) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = itemText;
  li.appendChild(a);
  ul.appendChild(li);
});

centerContainer.appendChild(ul);

function createCornerImage(className, src) {
  const img = document.createElement("img");
  img.src = src;
  img.className = `corner-img ${className}`;
  document.body.appendChild(img);
}

createCornerImage("top-right", "./dom.jpg");

createCornerImage("bottom-left", "dom.jpg");
