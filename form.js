const tabs = document.querySelectorAll(".tabs");
const AddToBasketBtn = document.querySelectorAll(".addToBasket");
const amountOfItems = document.getElementById("counter");
const notification = document.querySelector(".notification");
const selection = document.querySelectorAll(".select");
const radios = document.querySelectorAll('input[type="radio"]');

const yearSelected = document.getElementById('years');


// selection from the property dropdown inputs


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

// adding count to the basket


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


// Populating the year dropdown input

const populateYearDropdown = () => {
    const currentYear = new Date().getFullYear() - 1;
    const numberOfYears = 10; 

    for (let i = 0; i < numberOfYears; i++) {
        const yearOption = document.createElement('option');
        yearOption.value = currentYear + i;
        yearOption.text = currentYear + i;
        yearSelected.appendChild(yearOption);
    }
}

// Checking the expiry Dates

const checkExpiry = () => {
    const month = document.getElementById('months').value;
    const year = document.getElementById('years').value;

    const currentDate = new Date();
    const selectedDate = new Date(year, month - 1); 

    console.log(month, year)

    if (selectedDate < currentDate) {
        alert("Application Withdraw!")
        window.location.reload();
    } else {
    }
}

yearSelected.addEventListener("change", () => {
    checkExpiry()
})


// Checking the CVV input value length  

const checkMaxLength = (input) => {
    if(input.value.length > 3){
        input.value = input.value.slice(0,3);
    }
}

// 

document.addEventListener('DOMContentLoaded', () => {
    populateYearDropdown();
})