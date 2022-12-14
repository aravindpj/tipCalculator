const peopleCountForm = document.querySelector(".people-count");
const errorMesssage = document.querySelector(".error-msg");
const people = document.querySelector(".input-people-count");
const tipBtn = document.querySelectorAll(".tip-btn");
const bill = document.querySelector(".bill-input");
const customTip = document.querySelector(".tip-inp");
const totalAmount = document.querySelector(".total-amount");
const tipAmount = document.querySelector(".tip-amount");
const resetBtn = document.querySelector(".reset-btn");
let btnTipValue;

function init() {
  btnTipValue = 0;
}

const calculate = function () {
  if (!btnTipValue || !people.value || !bill.value) return;
  let totalTip = (bill.value * btnTipValue) / people.value;
  let total = bill.value / people.value + totalTip;
  tipAmount.textContent = `$${totalTip.toFixed(2)}`;
  totalAmount.textContent = `$${total.toFixed(2)}`;
};

const removeAllactivateBtn = function () {
  tipBtn.forEach((btn) => btn.classList.remove("activate"));
};

const selectBtn = function (e) {
  btnTipValue = parseFloat(Number(e.target.value)) / 100;
  removeAllactivateBtn();
  e.target.classList.add("activate");
  calculate();
};

const reset = function () {
  init();
  removeAllactivateBtn();
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  customTip.value = "";
  bill.value = "";
  people.value = "";
};

peopleCountForm.addEventListener("input", (e) => {
  e.preventDefault();
  if (+people.value + 0 === 0) {
    errorMesssage.textContent = "can't be zero";
  } else if (+people.value > 0) {
    errorMesssage.textContent = "";
    calculate();
  }
});

bill.addEventListener("input", calculate);
customTip.addEventListener("input", function (e) {
  btnTipValue = parseFloat(Number(e.target.value)) / 100;
  removeAllactivateBtn();
  calculate();
});
tipBtn.forEach((btn) => btn.addEventListener("click", selectBtn));

resetBtn.addEventListener("click", reset);
