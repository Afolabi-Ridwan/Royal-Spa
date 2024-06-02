const tabs = document.querySelectorAll(".tabs");
const AddToBasketBtn = document.querySelectorAll(".addToBasket");
const amountOfItems = document.getElementById("counter");
const notification = document.querySelector(".notification");
const selection = document.querySelectorAll(".select");
const radios = document.querySelectorAll('input[type="radio"]');
const handsOnLearningOptions = document.querySelector(
  "#handsOnLearningOptions"
);
const checkOut = document.getElementById("checkOut");
const emptyCart = document.getElementById("emptyCart");
const inputs = document.querySelectorAll("input");

const yearSelected = document.getElementById("years");
const totalPrice = document.getElementById("totalPrice");

// selection from the property dropdown inputs

let selectedProperty;

selection.forEach((select) => {
  select.addEventListener("change", () => {
    const descr =
      select.previousElementSibling.previousElementSibling
        .previousElementSibling;
    const amount = select.previousElementSibling.previousElementSibling;
    const selectedOption = select.options[select.selectedIndex];
    const price = selectedOption.getAttribute("price");
    const description = selectedOption.getAttribute("description");

    console.log(select);

    selectedProperty = select.value;

    descr.innerHTML = description;
    amount.innerHTML = price;
  });
});

let counter = 0;

const addedItemsCounter = () => {
  counter++;
};

// adding count to the basket

const cart = {};

AddToBasketBtn.forEach((button) => {
  button.addEventListener("click", () => {
    addedItemsCounter();

    console.log(counter);

    amountOfItems.innerText = counter;

    notification.classList.add("active");

    const select = button.nextElementSibling;

    if (cart[select.value]) {
      cart[select.value]++;
    } else {
      cart[select.value] = 1;
    }

    console.log(cart);

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
    const yearOption = document.createElement("option");
    yearOption.value = currentYear + i;
    yearOption.text = currentYear + i;
    yearSelected.appendChild(yearOption);
  }
};

// Checking the expiry Dates

const checkExpiry = () => {
  const month = document.getElementById("months").value;
  const year = document.getElementById("years").value;

  const currentDate = new Date();
  const selectedDate = new Date(year, month - 1);

  console.log(month, year);

  if (selectedDate < currentDate) {
    alert("Application Withdraw!");
    window.location.reload();
  } else {
  }
};

yearSelected.addEventListener("change", () => {
  checkExpiry();
});

// Checking the CVV input value length

const checkMaxLength = (input) => {
  if (input.value.length > 3) {
    input.value = input.value.slice(0, 3);
  }
};

//

document.addEventListener("DOMContentLoaded", () => {
  populateYearDropdown();
});

checkOut.addEventListener("click", () => {
  if (Object.keys(cart).length > 0) {
    const units = Object.values(cart);
    const prices = [];

    Object.keys(cart).forEach((key) => {
      prices.push(Number(key));

      console.log(prices);
    });

    const totalUnits = units.reduce(
      (accumulator, value) => accumulator + value
    );
    const totalPrices = prices.reduce(
      (accumulator, value) => accumulator + value
    );

    const totalAmounts = totalUnits * totalPrices;
    console.log(totalAmounts);
    console.log(totalUnits, totalPrices);

    if (totalAmounts > 1000) {
      totalPrice.innerText = totalAmounts;
      setTimeout(() => {
        alert("No delivery cost applied 😉");
      }, 1000);
    } else {
      totalPrice.innerText = Math.floor(totalAmounts * 0.1) + totalAmounts;
      setTimeout(() => {
        alert("Add more to your cart above $1000 and the delivery is on us 😜");
      }, 1000);
    }

    const popMessage = setTimeout(() => {
      const confirmMessage = prompt(
        "Do you accept the calculated total cost for payment please?"
      );

      if (confirmMessage === "yes") {
        alert(" 🙏THANK YOU!!!");
      } else if (confirmMessage === "Yes") {
        alert(" 🙏THANK YOU!!!");
      } else {
        alert("😟 APPLICATION WITHDRAWN!!!");
        window.location.reload();
      }

      return confirmMessage;
    }, 2000);

    return popMessage;
  } else {
    alert("Please add to Cart!!! 👀");
  }
});


emptyCart.addEventListener("click", () => {
    alert("Cart Emptied! 😑")
    window.location.reload();
})