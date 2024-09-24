function inputValue(id) {
  const inputValue = document.getElementById(id).value;
  const newValue = parseFloat(inputValue);
  if (isNaN(newValue)) {
    console.error(
      `Invalid input for ID "${id}": "${inputValue}" is not a number.`
    );
    return null; // Or handle it according to your needs
  }
  return newValue;
}

function inputText(id) {
  const inputNumber = document.getElementById(id).innerText;
  const newNumber = parseFloat(inputNumber);
  if (isNaN(newNumber)) {
    console.error(
      `Invalid text content for ID "${id}": "${inputNumber}" is not a number.`
    );
    return null; // Or handle it according to your needs
  }
  return newNumber;
}

function inputEl(id) {
  const element = document.getElementById(id);
  if (!element) {
    console.error(`Element with ID "${id}" not found.`);
    return null; // Or handle it according to your needs
  }
  return element;
}

// Feature button section.........
function featureBtn(id) {
  document.getElementById("donate-page").classList.add("hidden");
  document.getElementById("history-page").classList.add("hidden");

  const targetElement = document.getElementById(id);
  if (targetElement) {
    targetElement.classList.remove("hidden");
  } else {
    console.error(`Element with ID "${id}" not found.`);
  }
}
