const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
let leadsEl = document.querySelector("#leads-el");
let myLeads = [];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
});

for (let i = 0; i < myLeads.length; i++) {
  leadsEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
