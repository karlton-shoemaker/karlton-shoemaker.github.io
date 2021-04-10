const donutMaker = new DonutMaker();
const displayCount = document.querySelector('.count');
const generateDonut = document.querySelector('.donutBtn');
const displayAutoClicker = document.querySelector('.auto');
const displayMultiplier = document.querySelector('.multiplier');
const generateMultiplier = document.querySelector('.multiBtn');
const displayIncrementor = document.querySelector('.incrementor');
const displayMultiPrice = document.querySelector('.multiPrice');
const displayAutoPrice = document.querySelector('.autoPrice');
const generateAutoClicker = document.querySelector('.autoBtn');
const resetBtn = document.getElementById('reset');
const donutPic = document.getElementById('donutPic');
const fredInfo = document.getElementById('bakerLink');
const bakerInfo = document.getElementById('bakerInfo');
const contactInfo = document.getElementById('contact');
const closeContact = document.getElementById('close');
const modal = document.getElementById('modal');

const showBakerDetails = (fredInfo, bakerInfo) => {
    fredInfo.addEventListener("click", showDetails)
    bakerInfo.addEventListener("click", hideDetails)
    function showDetails() {
        bakerInfo.style.display = "block";
    }
    function hideDetails() {
        bakerInfo.style = "none";
    }
}

const showContactDetails = (contactInfo, closeContact, modal) => {
    contactInfo.addEventListener("click", showDetails)
    closeContact.addEventListener("click", hideDetails)
    function showDetails() {
        modal.style.display = "block";
    }
    function hideDetails() {
        modal.style = "none";
    }
}

const darkenAutoButton = (dM, generateAutoClicker) => {
    let currentCount = dM.getCount();
    let currentPrice = dM.getAutoClickerPrice();
    if(currentPrice <= currentCount){
        generateAutoClicker.style.backgroundColor = "#b6ccb6";
    }
    else{
        generateAutoClicker.style.backgroundColor = "#3e4f3f";
    }
}

const darkenMultiButton = (dM, generateMultiplier) => {
    let currentCount = dM.getCount();
    let currentPrice = dM.getMultiplierPrice();
    if(currentPrice <= currentCount){
        generateMultiplier.style.backgroundColor = "#b6ccb6";
    }
    else{
        generateMultiplier.style.backgroundColor = "#3e4f3f";
    }
}

const updateCount = (displayCount, dM) => {
    displayCount.innerText = dM.getCount().toFixed();
}

const updateAuto = (displayAutoClicker, dM) => {
    displayAutoClicker.innerText = dM.getAutoClicker();
}

const updateMultiplier = (displayMultiplier, dM) => {
    displayMultiplier.innerText = dM.getMultiplier();
}

const updateMultiPrice = (displayMultiPrice, dM) => {
    displayMultiPrice.innerText = dM.getMultiplierPrice();
}

const updateAutoPrice = (displayAutoPrice, dM) => {
    displayAutoPrice.innerText = dM.getAutoClickerPrice();
}

const updateIncrementor = (displayIncrementor, dM) => {
    displayIncrementor.innerText = dM.getIncrementor().toFixed(2);
}

const updateAll = (displayCount, displayAutoClicker, displayAutoPrice, displayMultiplier, displayMultiPrice, displayIncrementor, dM) => {
    displayCount.innerText = dM.getCount().toFixed();
    displayAutoClicker.innerText = dM.getAutoClicker();
    displayAutoPrice.innerText = dM.getAutoClickerPrice();
    displayMultiplier.innerText = dM.getMultiplier();
    displayMultiPrice.innerText = dM.getMultiplierPrice();
    displayIncrementor.innerText = dM.getIncrementor().toFixed(2);
    darkenAutoButton(dM, generateAutoClicker);
    darkenMultiButton(dM, generateMultiplier);
}
let refreshAll = () => updateAll(displayCount, displayAutoClicker, displayAutoPrice, displayMultiplier, displayMultiPrice, displayIncrementor, donutMaker);

const makeResetButton = (resetBtn, dM) => {
    resetBtn.addEventListener("click", () => {
        dM.count = 0;
        dM.incrementor = 1;
        dM.autoClicker = 0;
        dM.multiplier = 0;
        dM.autoClickerPrice = 100;
        dM.multiplierPrice = 10;
    });
}

const makeIncreaseButton = (generateDonut, displayCount, dM) => {
    generateDonut.addEventListener('click', () => {
        dM.addDonuts();
        updateCount(displayCount, dM);
    });
}

const clickDonutButton = (donutPic, displayCount, dM) => {
    donutPic.addEventListener('click', () => {
        dM.addDonuts();
        updateCount(displayCount, dM);
    });
}

const makeMultiplierButton = (generateMultiplier, dM) => {
    generateMultiplier.addEventListener('click', () => {
        dM.addMultiplier();
    });
}

const makeAutoClickerButton = (generateAutoClicker, dM) => {
    generateAutoClicker.addEventListener('click', () => {
        if(dM.count < dM.autoClickerPrice){

        }
        else{
            dM.addAutoClicker();
        }
    });
}

makeIncreaseButton(generateDonut, displayCount, donutMaker);
clickDonutButton(donutPic, displayCount, donutMaker);
makeMultiplierButton(generateMultiplier, donutMaker);
makeAutoClickerButton(generateAutoClicker, donutMaker);
makeResetButton(resetBtn, donutMaker, displayCount, displayAutoClicker, displayAutoPrice, displayMultiplier, displayMultiPrice, displayIncrementor);
showBakerDetails(fredInfo, bakerInfo);
showContactDetails(contactInfo, closeContact, modal);

setInterval(refreshAll, 100);