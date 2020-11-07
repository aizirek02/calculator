var input = document.getElementById("inputText");
input.innerHTML = "8";
//input.style.backgroundColor = "green";
//input.setAttribute("style", "background-color: red; font-size: 21px;")
//input.parentNode.removeChild(input);
// var elements = document.getElementsByTagName("button");
// elements = Array.from(elements);

// elements.forEach(e => {
//     console.log(e);
// });

var seven = document.getElementById("seven");
seven.addEventListener("click", function () {
    let currentValue = input.innerHTML;
    input.innerHTML = currentValue + 7;
});

var clear = document.getElementById("c");
clear.addEventListener("click", function () {
    input.innerHTML = "";
});