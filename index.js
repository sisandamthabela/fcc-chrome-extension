const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
let ulEl = document.querySelector("#ul-el");
let myLeads = [1, 2, 3, 4];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
});

for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
