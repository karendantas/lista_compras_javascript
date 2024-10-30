const itemInput = document.getElementById("add-input");
const buttonAdd = document.getElementById("add-button");
const itemsContainer = document.querySelector(".items-container");

const listItems = [];

itemsContainer.innerHTML = null;

buttonAdd.addEventListener("click", () => {
    if (!itemInput.value.trim()){
        return alert("Escreva algo no formulário")
    }
        listItems.push(itemInput.value)
        console.log(listItems)
        renderizeItems();
        itemInput.value = null;
})

function renderizeItems(){

    const itemContainer = document.createElement("div")
    itemContainer.classList.add("item-container")

    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")

    const itemSpan = document.createElement("span")

    listItems.map((item) => {
        itemSpan.textContent = item

        itemContainer.appendChild(checkbox)
        itemContainer.appendChild(itemSpan)
        itemsContainer.appendChild(itemContainer)
    })
}