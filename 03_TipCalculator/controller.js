function calculateTotal(obj) {
    var bill = document.querySelector("#billamt");
    var initialAmt = bill.value;
    var tipVal = document.querySelector("#tippct").value;
    var numPeople = document.querySelector("#people").value;
    var total = initialAmt * (1 + (tipVal / 100)) / numPeople;
    var result = document.querySelector("#payamt");

    result.innerHTML = total;

}

function updateSlider() {
    var currentVal = document.querySelector("#tippct").value;
    document.querySelector("#tipval").innerHTML = currentVal;
}


function saveHistory() {
    var restName = document.querySelector("#rname").value;
    var tipPct = document.querySelector("#tippct").value;
    var billAmt = document.querySelector("#billamt").value;
    var numPeople = document.querySelector("#people").value;

    var v = new RestVisit(restName, billAmt, tipPct, numPeople);
    model.addVisit(v);
}


window.addEventListener('load', updateSlider);

