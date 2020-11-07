var inputText = document.getElementById("inputText");
inputText.innerHTML = "";

var isEqualButtonPressed = false;

var deleteAll = document.getElementById("c");
deleteAll.addEventListener("click", function () {
    inputText.innerHTML = "";
});
deleteAll.addEventListener("mousedown", function () {
    deleteAll.style.backgroundColor = "#5dff5f";
});

deleteAll.addEventListener("mouseup", function () {
    deleteAll.style.backgroundColor = "white";
});

var back = document.getElementById("delete");
back.addEventListener("click", function () {
    let currentValue = inputText.innerHTML;
    let lastIndex = currentValue.length - 1;
    inputText.innerHTML = currentValue.substring(0, lastIndex);
});
back.addEventListener("mousedown", function () {
    back.style.backgroundColor = "#5dff5f";
});

back.addEventListener("mouseup", function () {
    back.style.backgroundColor = "white";
});

var divide = document.getElementById("divide");
divide.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "/";
    }

});
divide.addEventListener("mousedown", function () {
    divide.style.backgroundColor = "#5dff5f";
});

divide.addEventListener("mouseup", function () {
    divide.style.backgroundColor = "white";
});

var multiply = document.getElementById("multiply");
multiply.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "*";
    }

});
multiply.addEventListener("mousedown", function () {
    multiply.style.backgroundColor = "#5dff5f";
});

multiply.addEventListener("mouseup", function () {
    multiply.style.backgroundColor = "white";
});

var seven = document.getElementById("seven");
seven.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "7";
    }
});
seven.addEventListener("mousedown", function () {
    seven.style.backgroundColor = "#5dff5f";
});

seven.addEventListener("mouseup", function () {
    seven.style.backgroundColor = "rgb(233, 229, 219)";
});

var eight = document.getElementById("eight");
eight.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "8";
    }
});
eight.addEventListener("mousedown", function () {
    eight.style.backgroundColor = "#5dff5f";
});

eight.addEventListener("mouseup", function () {
    eight.style.backgroundColor = "rgb(233, 229, 219)";
});

var nine = document.getElementById("nine");
nine.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "9";
    }
});

nine.addEventListener("mousedown", function () {
    nine.style.backgroundColor = "#5dff5f";
});

nine.addEventListener("mouseup", function () {
    nine.style.backgroundColor = "rgb(233, 229, 219)";
});

var minus = document.getElementById("minus");
minus.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "-";
    }
});
minus.addEventListener("mousedown", function () {
    minus.style.backgroundColor = "#5dff5f";
});

minus.addEventListener("mouseup", function () {
    minus.style.backgroundColor = "white";
});

var four = document.getElementById("four");
four.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "4";
    }
});
four.addEventListener("mousedown", function () {
    four.style.backgroundColor = "#5dff5f";
});

four.addEventListener("mouseup", function () {
    four.style.backgroundColor = "rgb(233, 229, 219)";
});
var five = document.getElementById("five");
five.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "5";
    }
});
five.addEventListener("mousedown", function () {
    five.style.backgroundColor = "#5dff5f";
});

five.addEventListener("mouseup", function () {
    five.style.backgroundColor = "rgb(233, 229, 219)";
});
var six = document.getElementById("six");
six.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "6";
    }
});
six.addEventListener("mousedown", function () {
    six.style.backgroundColor = "#5dff5f";
});

six.addEventListener("mouseup", function () {
    six.style.backgroundColor = "rgb(233, 229, 219)";
});
var plus = document.getElementById("plus");
plus.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "+";
    }
});
plus.addEventListener("mousedown", function () {
    plus.style.backgroundColor = "#5dff5f";
});

plus.addEventListener("mouseup", function () {
    plus.style.backgroundColor = "white";
});
var one = document.getElementById("one");
one.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "1";
    }
});
one.addEventListener("mousedown", function () {
    one.style.backgroundColor = "#5dff5f";
});

one.addEventListener("mouseup", function () {
    one.style.backgroundColor = "rgb(233, 229, 219)";
});
var two = document.getElementById("two");
two.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "2";
    }
});
two.addEventListener("mousedown", function () {
    two.style.backgroundColor = "#5dff5f";
});

two.addEventListener("mouseup", function () {
    two.style.backgroundColor = "rgb(233, 229, 219)";
});
var three = document.getElementById("three");
three.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "3";
    }
});
three.addEventListener("mousedown", function () {
    three.style.backgroundColor = "#5dff5f";
});

three.addEventListener("mouseup", function () {
    three.style.backgroundColor = "rgb(233, 229, 219)";
});
var equal = document.getElementById("equal");
equal.addEventListener("click", function () {
    isEqualButtonPressed = true;
    let currentValue = inputText.innerHTML
    let result = eval(currentValue);
    if (currentValue.indexOf("/") >= 0) {
        inputText.innerHTML = result.toFixed(3);
    } else {
        inputText.innerHTML = result;
    }

});
equal.addEventListener("mousedown", function () {
    equal.style.backgroundColor = "#5dff5f";
});

equal.addEventListener("mouseup", function () {
    equal.style.backgroundColor = "white";
});

var zero = document.getElementById("zero");
zero.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "0";
    }
});
zero.addEventListener("mousedown", function () {
    zero.style.backgroundColor = "#5dff5f";
});

zero.addEventListener("mouseup", function () {
    zero.style.backgroundColor = "rgb(233, 229, 219)";
});

var zeroo = document.getElementById("zeroo");
zeroo.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + "00";
    }
});
zeroo.addEventListener("mousedown", function () {
    zeroo.style.backgroundColor = "#5dff5f";
});

zeroo.addEventListener("mouseup", function () {
    zeroo.style.backgroundColor = "rgb(233, 229, 219)";
});
var dot = document.getElementById("dot");
dot.addEventListener("click", function () {
    if (inputText.innerHTML.length < 19) {
        if (isEqualButtonPressed) {
            inputText.innerHTML = "";
            isEqualButtonPressed = false;
        }
        let currentValue = inputText.innerHTML;
        inputText.innerHTML = currentValue + ".";
    }
});
dot.addEventListener("mousedown", function () {
    dot.style.backgroundColor = "#5dff5f";
});

dot.addEventListener("mouseup", function () {
    dot.style.backgroundColor = "white";
});