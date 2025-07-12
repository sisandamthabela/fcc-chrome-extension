const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
let ulEl = document.querySelector("#ul-el");
let myLeads = [];

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li> 
  <a href = "${myLeads[i]}" target = '_blank'>
   ${myLeads[i]}
   </a>
   </li>`;
  }
  ulEl.innerHTML = listItems;
}
