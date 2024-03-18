/** profile data */
let form = document.getElementById("form-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let data = {
    first_name: document.getElementById("first_name").value,
    last_name: document.getElementById("last_name").value,
    phone_number: document.getElementById("phone_number").value,
    address: document.getElementById("address").value,
  };
  console.log(data);
});

/** List Item */

document.getElementById("btnAdd").addEventListener("click", () => {
  const newElementList = document.createElement("li");
  const newListValue = document.createTextNode("Extra Item");
  newElementList.appendChild(newListValue);

  const item = document.querySelector("#list-items");
  item.appendChild(newElementList);
});
