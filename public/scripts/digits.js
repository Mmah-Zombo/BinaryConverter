const zero = document.getElementById("zero");
const one = document.getElementById("one");
const inputBox = document.getElementById("input");
const outputBox = document.getElementById("output");
const n_clear = document.getElementById("clear");
const n_delete = document.getElementById("delete");

zero.addEventListener("click", () => {
    if (inputBox.innerText === "ENTER BINARY NUMBER") {
        inputBox.innerHTML = "";
    }
    inputBox.innerHTML += "0";
});

one.addEventListener("click", () => {
    if (inputBox.innerText === "ENTER BINARY NUMBER") {
        inputBox.innerHTML = "";
    }
    inputBox.innerHTML += "1";
});

n_clear.addEventListener("click", () => {
    inputBox.innerText = "ENTER BINARY NUMBER";
    outputBox.innerText = "OUPUT";
});


n_delete.addEventListener("click", () => {
    if (inputBox.innerText !== "ENTER BINARY NUMBER") {
        holder = inputBox.innerText;
        inputBox.innerText = holder.substring(0, holder.length -1);
        if (inputBox.innerText.length === 0) {
            inputBox.innerText = "ENTER BINARY NUMBER";
        }
    }
});
