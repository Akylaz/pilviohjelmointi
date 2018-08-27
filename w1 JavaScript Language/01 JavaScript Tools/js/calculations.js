function multiplyBy(x, y) {
    console.log("x: " + x + " y: " + y + " x*y: " + x*y);
    document.getElementById("result").innerHTML = x*y;
}

function divideBy(x, y) { 
    console.log("x=: " + x + " y : " + y + " x/y: " + x*y);
    document.getElementById("result").innerHTML = x/y;
 
}

function validateMultiply() {
    x = document.getElementById("firstNumber").value;
    y = document.getElementById("secondNumber").value;
    console.log(!(isNaN(x) && isNaN(y)));
    if (!isNaN(x) && !isNaN(y)) {
        multiplyBy(x, y);
    } else {
        document.getElementById("result").innerHTML = "Invalid input! Please only use numeric input";
    }
}

function validateDivide() {
    x = document.getElementById("firstNumber").value;
    y = document.getElementById("secondNumber").value;

    if (!isNaN(x) && !isNaN(y) && y > 0) {
        divideBy(x, y);
    } else {
        if (isNaN(x) || isNaN(y)) {
            document.getElementById("result").innerHTML = "Invalid input! Please only use numeric input";
        } else {
            document.getElementById("result").innerHTML = "<img src=\"img/divide_by_zero.jpg\"  style=\"height: 300px\" alt=\"Oh Shit! You divided by zero, didn't you?!\"></img>";
        }
    }
}

