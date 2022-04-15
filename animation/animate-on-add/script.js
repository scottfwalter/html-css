const addButton = document.querySelector("button");
const list = document.querySelector("ul");
const li = document.querySelector("li");

addButton.addEventListener("click", () => {
  const liCopy = li.cloneNode(true);
  list.appendChild(liCopy);
});