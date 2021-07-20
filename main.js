var btns = document.querySelectorAll(".tip-percent h1");
var btns2 = [];
var billAmount = document.getElementById("Bill-amount");
var tipAmount = document.getElementById("tip-amount");
var numberOfPeople = document.getElementById("number-of-people");
var totalForPerson = document.getElementById("tip-amount-total");
var cantBeZero = document.querySelector(".number-text h1:last-of-type");
var tipCalc;
var totalCalc;

for (i = 0; i < btns.length; i = i + 1) {
    btns2.push(btns[i])
}

for (i = 0; i < btns2.length; i = i + 1) {

    btns2[i].addEventListener("click", function (e) {
            if (numberOfPeople.value == 0) {
                cantBeZero.classList.remove("hidden")
            } else if (numberOfPeople.value > 0 && billAmount.value > 0) {
                cantBeZero.classList.add("hidden")
                tipCalc = parseInt(billAmount.value) * (parseInt(e.target.innerText) / 100) / parseInt(numberOfPeople.value);
                tipAmount.innerText = Math.ceil(tipCalc)
                totalCalc = (parseInt(billAmount.value) / parseInt(numberOfPeople.value)) + tipCalc;
                totalForPerson.innerText = Math.round(totalCalc);



            })
    }