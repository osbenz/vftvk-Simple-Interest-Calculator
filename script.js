function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    interest = principal * rate * years / 100;
    var year = new Date().getFullYear() + years;
    document.getElementById("result").innerHTML="If you deposit <mark>"
    +principal+"</mark>,<br>at an interest rate of <mark>"+rate+
    "%</mark><br>You will receive an amount of <mark>"+amount+
    "</mark>,<br>in the year "+year+"<br>";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

(function () {
    for(var i = 1; i <= 100; i++){
        var select = document.getElementById("years");
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        select.options.add(option);
    }
})();