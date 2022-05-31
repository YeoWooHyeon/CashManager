const CASH_KEY = "cash";
let cash = Number(localStorage.getItem(CASH_KEY));

const content = document.querySelector(".content");
const cashConfirm = document.querySelector(".cashConfirm");
const cashConfirm_input = document.querySelector(".cashConfirm #cashConfirm-input");
const HTML_cashText = document.querySelector("#cash-text");
const income = document.querySelector(".content .income");
const outlay = document.querySelector(".content .outlay");
const addCash = document.querySelector(".addCash");
const addCash_input = document.querySelector(".addCash .addCash-input");
const addCash_complete = document.querySelector(".addCash .addCash-complete");
const addCash_cancel = document.querySelector(".addCash .addCash-cancel");
const addCash_errorMessage = document.querySelector(".addCash .error-message");
const addCash_content = document.querySelector(".addCash .addCash-content");
const cashContent = document.querySelector("#cashContent");
const cashContent1 = document.querySelector("#cashContent #cashContent-1");
const cashContent2 = document.querySelector("#cashContent #cashContent-2");
const cashContent3 = document.querySelector("#cashContent #cashContent-3");
const cashContent4 = document.querySelector("#cashContent #cashContent-4");
const cashContent5 = document.querySelector("#cashContent #cashContent-5");
const cashContent6 = document.querySelector("#cashContent #cashContent-6");
const cashContent7 = document.querySelector("#cashContent #cashContent-7");
const contentPopUpButton = document.querySelector("#contentPopUpButton");

const HIDDEN_CLASSNAME = "hidden";

let ifIncome;

function cashConfirming(event) {
  const cashNum = cashConfirm_input.value;
  event.preventDefault();
  content.classList.remove(HIDDEN_CLASSNAME);
  contentPopUpButton.className = "";
  cashConfirm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(CASH_KEY, cashNum);
  showCash(cashNum);
  cashUpdate();
}

function clcikIncome() {
  ifIncome = true;
  addCash.classList.remove("hidden");
  content.classList.add("cantclick");
  content.classList.add("colorsoftly");
  contentPopUpButton.classList.add("cantclick");
  contentPopUpButton.classList.add("colorsoftly");
  cashContent.classList.add("cantclick");
  cashContent.classList.add("colorsoftly");
}

function clcikOutlay() {
  ifIncome = false;
  addCash.classList.remove("hidden");
  content.classList.add("cantclick");
  content.classList.add("colorsoftly");
  contentPopUpButton.classList.add("cantclick");
  contentPopUpButton.classList.add("colorsoftly");
  cashContent.classList.add("cantclick");
  cashContent.classList.add("colorsoftly");
}

function hiddenIncome() {
  addCash.classList.add("hidden");
  content.classList.remove("cantclick");
  content.classList.remove("colorsoftly");
  contentPopUpButton.classList.remove("cantclick");
  contentPopUpButton.classList.remove("colorsoftly");
  cashContent.classList.remove("cantclick");
  cashContent.classList.remove("colorsoftly");
}

function showCash(cashForm) {
  HTML_cashText.innerText = `잔액 ${cashForm}`;
}

function saveCash(openCash) {
  localStorage.setItem(CASH_KEY, openCash);
}

function cashUpdate() {
  cash = Number(localStorage.getItem(CASH_KEY));
}

if(localStorage.getItem(CASH_KEY) === null) {
  cashConfirm.classList.remove(HIDDEN_CLASSNAME);
  content.classList.add(HIDDEN_CLASSNAME);
  contentPopUpButton.className = HIDDEN_CLASSNAME;
  cashUpdate();
  localStorage.setItem("cashContent1", "");
  localStorage.setItem("cashContent2", "");
  localStorage.setItem("cashContent3", "");
  localStorage.setItem("cashContent4", "");
  localStorage.setItem("cashContent5", "");
  localStorage.setItem("cashContent6", "");
  localStorage.setItem("cashContent7", "");
} else {
  content.classList.remove(HIDDEN_CLASSNAME);
  cashConfirm.classList.add(HIDDEN_CLASSNAME);
  contentPopUpButton.className = "";
}

function workContent(incomeStatus) {
  const addCashValue = Number(addCash_input.value);
  
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  let addContentForm;
  
  const LS_cashContent1 = localStorage.getItem("cashContent1");
  const LS_cashContent2 = localStorage.getItem("cashContent2");
  const LS_cashContent3 = localStorage.getItem("cashContent3");
  const LS_cashContent4 = localStorage.getItem("cashContent4");
  const LS_cashContent5 = localStorage.getItem("cashContent5");
  const LS_cashContent6 = localStorage.getItem("cashContent6");
  const LS_cashContent7 = localStorage.getItem("cashContent7");
  
  const contentValue = addCash_content.value;

  if(incomeStatus) {
    addContentForm = `${year}/${month}/${date}|수입|${addCashValue}원|${contentValue}`;
  } else {
    addContentForm = `${year}/${month}/${date}|지출|${addCashValue}원|${contentValue}`;
  }
      
  if(LS_cashContent1 === "") {
    cashContent1.innerText = addContentForm;
    localStorage.setItem("cashContent1", addContentForm);
  } else if(LS_cashContent2 === "") {
    cashContent2.innerText = addContentForm;
    localStorage.setItem("cashContent2", addContentForm);
  } else if(LS_cashContent3 === "") {
    cashContent3.innerText = addContentForm;
    localStorage.setItem("cashContent3", addContentForm);
  } else if(LS_cashContent4 === "") {
    cashContent4.innerText = addContentForm;
    localStorage.setItem("cashContent4", addContentForm);
  } else if(LS_cashContent5 === "") {
    cashContent5.innerText = addContentForm;
    localStorage.setItem("cashContent5", addContentForm);
  } else if(LS_cashContent6 === "") {
    cashContent6.innerText = addContentForm;
    localStorage.setItem("cashContent6", addContentForm);
  } else if(LS_cashContent7 === ""){
    cashContent7.innerText = addContentForm;
    localStorage.setItem("cashContent7", addContentForm);
  } else {
    localStorage.setItem("cashContent1", "");
    localStorage.setItem("cashContent2", "");
    localStorage.setItem("cashContent3", "");
    localStorage.setItem("cashContent4", "");
    localStorage.setItem("cashContent5", "");
    localStorage.setItem("cashContent6", "");
    localStorage.setItem("cashContent7", "");
    cashContent1.innerText = "";
    cashContent2.innerText = "";
    cashContent3.innerText = "";
    cashContent4.innerText = "";
    cashContent5.innerText = "";
    cashContent6.innerText = "";
    cashContent7.innerText = "";
  }

  cashUpdate();
}

function showContent() {
  const LS_cashContent1 = localStorage.getItem("cashContent1");
  const LS_cashContent2 = localStorage.getItem("cashContent2");
  const LS_cashContent3 = localStorage.getItem("cashContent3");
  const LS_cashContent4 = localStorage.getItem("cashContent4");
  const LS_cashContent5 = localStorage.getItem("cashContent5");
  const LS_cashContent6 = localStorage.getItem("cashContent6");
  const LS_cashContent7 = localStorage.getItem("cashContent7");

  cashContent1.innerText = LS_cashContent1;
  cashContent2.innerText = LS_cashContent2;
  cashContent3.innerText = LS_cashContent3;
  cashContent4.innerText = LS_cashContent4;
  cashContent5.innerText = LS_cashContent5;
  cashContent6.innerText = LS_cashContent6;
  cashContent7.innerText = LS_cashContent7;
}

showCash(cash);
showContent();

cashConfirm.addEventListener("submit", cashConfirming);

income.addEventListener("click", clcikIncome);
outlay.addEventListener("click", clcikOutlay);

addCash_complete.addEventListener("click", (event) => {
  event.preventDefault();
  
  const addCashValue = Number(addCash_input.value);
  
  if(ifIncome === true) {
    if(cash + addCashValue > 10000000) {
      addCash_errorMessage.classList.remove("hidden");
      addCash_errorMessage.innerText = "더 이상의 현금을 저장할 수 없습니다.";
    } else {
      let newCash1 = cash + addCashValue;
      workContent(true);
      showCash(newCash1);
      saveCash(newCash1);
      cashUpdate();
      hiddenIncome();

      addCash_input.value = "";
      addCash_content.value = "";
    }
  } else {
    if(cash < addCashValue) {
      addCash_errorMessage.classList.remove("hidden");
      addCash_errorMessage.innerText = "지출이 현금보다 많을 수는 없습니다.";
    } else {
      let newCash1 = cash - addCashValue;
      workContent(false);
      showCash(newCash1);
      saveCash(newCash1);
      cashUpdate();
      hiddenIncome();
      
      addCash_input.value = "";
      addCash_content.value = "";
    }
  }
});

addCash_cancel.addEventListener("click", (event) => {
  event.preventDefault();
  hiddenIncome();
});
