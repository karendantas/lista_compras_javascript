const itemInput = document.getElementById("add-input");
const buttonAdd = document.getElementById("add-button");
const itemsContainer = document.querySelector(".items-container");
const itemContainer = document.querySelector(".item-container");

let listItems = [];

itemContainer.innerHTML = null;

buttonAdd.addEventListener("click", () => {
    if (!itemInput.value.trim()){
        return alert("Escreva algo no formulário")
    }
        listItems.push(itemInput.value)
        renderizeItems();
        itemInput.value = null;
})

itemInput.addEventListener("keypress", (e) => {
    if (e.key === 'Enter'){

        if (!itemInput.value.trim()){
            return alert("Escreva algo no formulário")
        }
            listItems.push(itemInput.value)
            renderizeItems();
            itemInput.value = null;
    }
})


function renderizeItems(){
    
    const itemLi = document.createElement("li")
    
    listItems.forEach((item) => {
        
        itemLi.textContent = item
        itemContainer.appendChild(itemLi);
    })
}
