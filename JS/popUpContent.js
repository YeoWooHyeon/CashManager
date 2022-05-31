const CashContent = document.querySelector("#cashContent");
const ContentPopUpButton = document.querySelector("#contentPopUpButton");

let popUpStatus = false;

function confirm() {
  if(popUpStatus === true) {
    CashContent.className = "";
  } else {
    CashContent.className = "hidden";
  }
}

confirm();

ContentPopUpButton.addEventListener("click", (event) => {
  event.preventDefault();

  if(popUpStatus === false) {
    popUpStatus = true;
  } else {
    popUpStatus = false;
  }

  confirm();
});