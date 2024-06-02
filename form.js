const tabs = document.querySelectorAll(".tabs");
const AddToBasketBtn = document.querySelectorAll(".addToBasket");
const amountOfItems = document.getElementById("counter");
const notification = document.querySelector(".notification");
const selection = document.querySelectorAll(".select");
const radios = document.querySelectorAll('input[type="radio"]');

const yearSelected = document.getElementById('years');
const month = document.getElementById('months').value;
const year = document.getElementById('years').value;

selection.forEach((select) => {
    select.addEventListener("change", () => {
      const descr = select.previousElementSibling.previousElementSibling.previousElementSibling
      const amount = select.previousElementSibling.previousElementSibling
      const selectedOption = select.options[select.selectedIndex];
      const price = selectedOption.getAttribute("price");
      const description = selectedOption.getAttribute("description");
      console.log(descr, description);

      descr.innerHTML = description;
      amount.innerHTML = price;
   })
})

  
let counter = 0;

const addedItemsCounter = () => {
  counter++;
};

AddToBasketBtn.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("clicked");
    addedItemsCounter();
    console.log(counter);
    amountOfItems.innerText = counter;
    notification.classList.add("active");
    setTimeout(() => {
      notification.classList.remove("active");
    }, 1500);
  });
});



radios.forEach(function (radio) {
    radio.addEventListener("click", function () {
      if (radio.checked) {
        // setTimeout(() =>  {
            // radio.checked = false;
        // }, 0)
      } else {
      }
    })
})


function populateYearDropdown() {
    const currentYear = new Date().getFullYear();
    const numberOfYears = 10; 

    for (let i = 0; i < numberOfYears; i++) {
        const yearOption = document.createElement('option');
        yearOption.value = currentYear + i;
        yearOption.text = currentYear + i;
        yearSelected.appendChild(yearOption);
    }
}

function checkExpiry() {

    const currentDate = new Date();
    const selectedDate = new Date(month); 

    console.log(month, year)

    if (selectedDate > currentDate) {
        alert("expired card")
    } else {
    }
}

yearSelected.addEventListener("change", () => {
    checkExpiry()
})


document.addEventListener('DOMContentLoaded', () => {
    populateYearDropdown();
})