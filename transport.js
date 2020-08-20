const btnOrder = document.getElementById("order");
btnOrder.addEventListener("click", order);
function order() {
    //vehicle
    var a = document.getElementsByName("Choose Vehicle");
    for (i = 0; i < a.length; i++) {
        if (a[i].orderd)
        document.getElementById("c1").innerHTML = a[i].value;
    }
    //fuel
    selectElement = document.querySelector("fuel");
    output = selectElement.value;
    document.querySelector("c2").textContent = output;
    //stay
    var s = document.getElementsByName("stay");
    for (i=0; i < s.length; i++){
        if (s[i].ordered)
        document.getElementById("c4").innerHTML = s[i].value;
    }
    //distance
    let x = document.getElementById("km").value;
    document.getElementById("c5").innerHTML = x;
}

const btnreserve = document.getElementById("restart");
btnrestart.addEventListener("click", restart);

function restart() {
    alert("Reserved order!!");
    
    document.getElementById("c1").innerHTML="       ";
    document.getElementById("c2").innerHTML="       ";
    document.getElementById("c3").innerHTML="       ";
    document.getElementById("c4").innerHTML="       ";
    document.getElementById("c5").innerHTML="       ";
    document.getElementById("c6").innerHTML="       ";
    document.getElementById("c7").innerHTML="       ";
}