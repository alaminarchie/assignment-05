// Donates Json
let donateInfo = [{
    wallet: 5500,
}]
let alreadyDonated = {
    0 : 0,
    1 : 600,
    2 : 2500
}

// Element Selection 
const headerBtn = document.getElementById('headerBtn'); // Header Button
const wallet = document.getElementById('wallet'); // Header Button
const donateSection = document.getElementById('donateSection'); //  Donate Section
const historySection = document.getElementById('historySection'); //  History Section
const donateTabBtn = document.getElementById('donateBtn'); // Donate Button
const historyTabBtn = document.getElementById('historyBtn'); //  History Button
const wallets = document.querySelectorAll('#dwallet'); // All Wallets
const closeModal = document.getElementById('closeModal'); // Modal Close Button
const succesModal = document.getElementById('succesModal'); // Modal Section
const historyBox = document.querySelector('#historyBox') // History Box
const noDaonate = document.querySelector('#noDaonate') // noDaonate Box

// Header Button href System
headerBtn.addEventListener("click", function() {
    window.location.href = './blog';
});

// Tabs System
donateTabBtn.addEventListener("click", function() {
    tabsFunction(donateSection, historySection, donateTabBtn, historyTabBtn); // Donate Section Active
});
historyTabBtn.addEventListener("click", function() {
    tabsFunction(historySection, donateSection, historyTabBtn, donateTabBtn); // history Section Active
});

// This Function Processing the tabs
function tabsFunction(activeTab, deactiveSection, activeTabBtn, deactiveTabBtn) {
    activeTab.style.display = 'flex'
    deactiveSection.style.display = 'none'
    activeTabBtn.style.backgroundColor = '#B4F461'
    deactiveTabBtn.style.backgroundColor = 'transparent'
    deactiveTabBtn.style.border = '1px solid rgba(17, 17, 17, 0.1)'
}

// Seting Wallet balance To Our Wallet
function walletsUpdate(){
    wallet.innerText = `${donateInfo[0].wallet} BDT`
    for (let i = 0; i < wallets.length; i++) {
        wallets[i].innerHTML = `${alreadyDonated[i]} BDT`;
    }
}
walletsUpdate();

// Collencting Value To Donate Forms Inputs
const donateAmmount = document.querySelectorAll('#donateAmmount');

function formInputToValue(input, index) {
    const inputValue = parseFloat(input[index].value); // Use parseFloat to allow decimal values
    if (inputValue > 0) {
        if (inputValue <= donateInfo[0].wallet) {
            return inputValue;
        } else {
            alert('Insufficient Balance');
            return 0;
        }
    } else {
        alert('Please Enter A Valid Amount');
        return 0;
    }
}


//Donate Form Title
const donateFormTitle = document.querySelectorAll('#donateFormTitle')

// Donate Forms
const donateForms = document.querySelectorAll('#donateForm')
for(let i = 0; i < donateForms.length; i++){
    donateForms[i].addEventListener("submit", function(event){
        event.preventDefault()
        const finalInputValue = formInputToValue(donateAmmount, i);
        if(finalInputValue > 0){
            finalFirstStep(finalInputValue, donateFormTitle[i].value, i);
        }
        donateForms[i].reset()
    })
}

// Final And First Step
function finalFirstStep(input, title, index) {
    alreadyDonated[index] += input;
    donateInfo[0].wallet -= input; 
    walletsUpdate();
    succesModal.classList.add('openModal') // Modal Open
    createhistory(input, title);
}

// Modal Close
closeModal.addEventListener("click", function(){
    succesModal.classList.remove('openModal')
})

// createhistory
function createhistory(input, title) {
    noDaonate.remove();
    const newElement = document.createElement('div');
    newElement.classList.add('flex', 'flex-col', 'p-10', 'rounded-xl', 'border', 'border-borderColor', 'gap-2');
    newElement.innerHTML = 
    `
        <h2 class="font-bold text-xl text-textPrimary md:text-2xl">${input} ${title}</h2>
        <p class="text-textSecondary text-base font-light md:text-lg">
            Date : ${new Date()}
        </p>
    `;
    historyBox.insertAdjacentElement('beforeend', newElement)
}
