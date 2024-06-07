function toDecimal() {
    if (inputBox.innerText === "ENTER BINARY NUMBER") {
        inputBox.innerHTML = "PLEASE ENTER A BINARY NUMBER";
        setInterval(() => inputBox.innerText = "ENTER BINARY NUMBER FIRST", 3000)
    } else {
        let binary_number = inputBox.innerText;
        let binary_array = [];
        for (let each in binary_number) {
            binary_array.push(parseInt(binary_number[each]));
        }

        binary_array = binary_array.reverse();
        
        // Convert to binary number
        let answer = 0;

        for (let index in binary_array) {
            answer += binary_array[index] * (2 ** index);
        }
        
        outputBox.innerHTML = answer;
    }
}
