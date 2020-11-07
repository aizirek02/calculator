function getElem(id) {
    return document.getElementById(id);
}

function addClickListener(element, character) {
    element.addEventListener("click", function () {
        if (inputText.innerHTML.length < 19) {
            if (isEqualButtonPressed) {
                inputText.innerHTML = "";
                isEqualButtonPressed = false;
            }
            let currentValue = inputText.innerHTML;
            inputText.innerHTML = currentValue + character;
        }

    });
}

function addMouseUpDownListeners(element, upColor, downColor) {
    element.addEventListener("mousedown", function () {
        element.style.backgroundColor = downColor;
    });

    element.addEventListener("mouseup", function () {
        element.style.backgroundColor = upColor;
    });
}

var inputText = getElem("inputText");
inputText.innerHTML = "";

var isEqualButtonPressed = false;

var deleteAll = getElem("c");
deleteAll.addEventListener("click", function () {
    inputText.innerHTML = "";
});

addMouseUpDownListeners(deleteAll, "white", "#5dff5f");

var back = getElem("delete");
back.addEventListener("click", function () {
    let currentValue = inputText.innerHTML;
    let lastIndex = currentValue.length - 1;
    inputText.innerHTML = currentValue.substring(0, lastIndex);
});
addMouseUpDownListeners(back, "white", "#5dff5f");

var equal = getElem("equal");
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
addMouseUpDownListeners(equal, "white", "#5dff5f");

let buttonIds = ["zeroo", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let numSym = ["00", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let numColors = {
    up: "rgb(233, 229, 219)",
    down: "#5dff5f"
};

for (var i = 0; i < buttonIds.length; i++) {
    var elem = getElem(buttonIds[i]);
    addClickListener(elem, numSym[i]);
    addMouseUpDownListeners(elem, numColors.up, numColors.down);
}

var divide = getElem("divide");
addClickListener(divide, "/");
addMouseUpDownListeners(divide, "white", "#5dff5f");

var multiply = getElem("multiply");
addClickListener(multiply, "*");
addMouseUpDownListeners(multiply, "white", "#5dff5f");

var minus = getElem("minus");
addClickListener(minus, "-");
addMouseUpDownListeners(minus, "white", "#5dff5f");

var plus = getElem("plus");
addClickListener(plus, "+");
addMouseUpDownListeners(plus, "white", "#5dff5f");

var dot = getElem("dot");
addClickListener(dot, ".");
addMouseUpDownListeners(dot, "white", "#5dff5f");

var dump = getElem("dump");
dump.addEventListener("click", function () {
    inputText.innerHTML = "Кандай болуптур?";
});
addMouseUpDownListeners(dump, "white", "#5dff5f");