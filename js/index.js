// donation page function-1
inputEl("donate-btn").addEventListener("click", function () {
  const balance = inputText("balance");
  const donateInput = inputValue("donate-input");
  const donateAmount = inputText("donate-amount");

  if (donateInput > 0) {
    if (balance >= donateInput) {
      // balance update section....
      const newBalance = balance - donateInput;
      inputEl("balance").innerText = newBalance;
      inputEl("donate-amount").innerText = donateAmount + donateInput;

      // History add section....
      const div = document.createElement("div");
      div.classList.add("rounded-lg", "border", "p-5", "shadow-lg", "my-5");
      div.innerHTML = `
                <h1 class="mb-3 md:text-2xl text-lg font-bold">${donateInput} Donate for Flood at Noakhali, Bangladesh</h1>
                <p class="md:text-lg text-sm text-gray-500">Date : ${new Date()}</p>
            `;
      inputEl("history-section").appendChild(div);

      // module function
      // document.getElementById('donate-btn').setAttribute('onclick', "my_modal_1.showModal()");
      inputEl("my_modal_1").showModal();
    } else {
      alert("Your Balance Low");
    }
  } else {
    alert("Please valid Input");
  }
});

// donation page function-1
inputEl("donate-btn2").addEventListener("click", function () {
  const balance = inputText("balance");
  const donateInput = inputValue("donate-input2");
  const donateAmount = inputText("donate-amount2");

  if (donateInput > 0) {
    if (balance >= donateInput) {
      // balance update section....
      const newBalance = balance - donateInput;
      inputEl("balance").innerText = newBalance;
      inputEl("donate-amount2").innerText = donateAmount + donateInput;

      // History add section....
      const div = document.createElement("div");
      div.classList.add("rounded-lg", "border", "p-5", "shadow-lg", "my-5");
      div.innerHTML = `
                <h1 class="mb-3 md:text-2xl text-lg font-bold">${donateInput} Donate for Flood Relief in Feni, Bangladesh</h1>
                <p class="md:text-lg text-sm text-gray-500">Date : ${new Date()}</p>
            `;
      inputEl("history-section").appendChild(div);

      // module function
      // document.getElementById('donate-btn').setAttribute('onclick', "my_modal_1.showModal()");
      inputEl("my_modal_1").showModal();
    } else {
      alert("Your Balance Low");
    }
  } else {
    alert("Please valid Input");
  }
});

// donation page function-3
inputEl("donate-btn3").addEventListener("click", function () {
  const balance = inputText("balance");
  const donateInput = inputValue("donate-input3");
  const donateAmount = inputText("donate-amount3");

  if (donateInput > 0) {
    if (balance >= donateInput) {
      // balance update section....
      const newBalance = balance - donateInput;
      inputEl("balance").innerText = newBalance;
      inputEl("donate-amount3").innerText = donateAmount + donateInput;

      // History add section....
      const div = document.createElement("div");
      div.classList.add("rounded-lg", "border", "p-5", "shadow-lg", "my-5");
      div.innerHTML = `
                <h1 class="mb-3 md:text-2xl text-lg font-bold">${donateInput} Aid for Injured in the Quota Movement</h1>
                <p class="md:text-lg text-sm text-gray-500">Date : ${new Date()}</p>
            `;
      inputEl("history-section").appendChild(div);

      inputEl("my_modal_1").showModal();
    } else {
      alert("Your Balance Low");
    }
  } else {
    alert("Please valid Input");
  }
});

// feature button section......
inputEl("donate-button").addEventListener("click", function () {
  featureBtn("donate-page");
  inputEl("donate-button").classList.add("bg-lime-400");
  inputEl("history-button").classList.remove("bg-lime-400");
});
inputEl("history-button").addEventListener("click", function () {
  featureBtn("history-page");
  inputEl("history-button").classList.add("bg-lime-400");
  inputEl("donate-button").classList.remove("bg-lime-400");
});
