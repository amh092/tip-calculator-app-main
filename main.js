var btns = document.querySelectorAll(".tip-percent h1");
var btns2 = [];
var billAmount = document.getElementById("Bill-amount");
var tipAmount = document.getElementById("tip-amount");
var numberOfPeople = document.getElementById("number-of-people");
var totalForPerson = document.getElementById("tip-amount-total");
var cantBeZero = document.querySelector(".number-text h1:last-of-type");
var tipCalc;
var totalCalc;
var custom = document.getElementById("custom");
var reset = document.getElementById("reset");
var tipPercent ;

for (i = 0; i < btns.length; i = i + 1) {
    btns2.push(btns[i])
}

function calc(tipPercent) {
    
        if (numberOfPeople.value > 0 && billAmount.value > 0) {
        tipCalc = parseInt(billAmount.value) * (parseInt(tipPercent) / 100) / parseInt(numberOfPeople.value);
        tipAmount.innerText = tipCalc.toFixed(2)
        totalCalc = (parseInt(billAmount.value) / parseInt(numberOfPeople.value)) + tipCalc;
        totalForPerson.innerText = totalCalc.toFixed(2)
    }
  
}

custom.addEventListener("input", function () {
    calc(custom.value)
    tipPercent = custom.value
    btns2.forEach(h1 => {
        h1.classList.remove("current-percent")
    });
    
})

for (i = 0; i < btns2.length; i = i + 1) {

    btns2[i].addEventListener("click", function (e) {
        calc(e.target.innerText)
        tipPercent = e.target.innerText
       
        btns2.forEach(h1 => {
            h1.classList.remove("current-percent")
        });
        e.target.classList.add("current-percent");
    }
    )
   
}

billAmount.addEventListener("input",function (){
   if (numberOfPeople.value > 0 && billAmount.value > 0) {
        cantBeZero.classList.add("hidden")
        tipCalc = parseInt(billAmount.value) * (parseInt(tipPercent) / 100) / parseInt(numberOfPeople.value);
        tipAmount.innerText = tipCalc.toFixed(2)
        totalCalc = (parseInt(billAmount.value) / parseInt(numberOfPeople.value)) + tipCalc;
        totalForPerson.innerText = totalCalc.toFixed(2)
    }   
})

numberOfPeople.addEventListener("input",function(){
    if (numberOfPeople.value == 0) {
        cantBeZero.classList.remove("hidden")
        numberOfPeople.classList.remove("outline-disable")
        numberOfPeople.classList.add("outline-active")
    } else if (numberOfPeople.value > 0 && billAmount.value > 0) {
        cantBeZero.classList.add("hidden")
        numberOfPeople.classList.remove("outline-active")
        numberOfPeople.classList.add("outline-disable")
        tipCalc = parseInt(billAmount.value) * (parseInt(tipPercent) / 100) / parseInt(numberOfPeople.value);
        tipAmount.innerText = tipCalc.toFixed(2)
        totalCalc = (parseInt(billAmount.value) / parseInt(numberOfPeople.value)) + tipCalc;
        totalForPerson.innerText =  totalCalc.toFixed(2)
    }}
)



reset.addEventListener("click", function () {
    billAmount.value = "";
    numberOfPeople.value = "";
    custom.value = "";
    totalForPerson.innerText = "$0:00";
    tipAmount.innerText = "$0:00"
    cantBeZero.classList.add("hidden")
    numberOfPeople.classList.remove("outline-active")
    numberOfPeople.classList.add("outline-disable");
})

