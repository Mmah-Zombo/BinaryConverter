function toDecimal(data) {
    if (inputBox.innerText === "ENTER BINARY NUMBER") {
        inputBox.innerHTML = "PLEASE ENTER A BINARY NUMBER";
        setInterval(() => inputBox.innerText = "ENTER BINARY NUMBER FIRST", 3000)
    } else {
        let binary_number = data || inputBox.innerText;
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

function toHexadecimal(data) {
    if (inputBox.innerText === "ENTER BINARY NUMBER") {
        inputBox.innerHTML = "PLEASE ENTER A BINARY NUMBER";
        setInterval(() => inputBox.innerText = "ENTER BINARY NUMBER FIRST", 3000)
    } else {
        let binary = data || inputBox.innerHTML;
        let decimal = parseInt(binary, 2);
    
        // Convert the integer to a hexadecimal string
        let hexadecimal = decimal.toString(16).toUpperCase();
        
        outputBox.innerHTML = hexadecimal;


    }
}


function toOctal() {
    if (inputBox.innerText === "ENTER BINARY NUMBER") {
        inputBox.innerHTML = "PLEASE ENTER A BINARY NUMBER";
        setInterval(() => inputBox.innerText = "ENTER BINARY NUMBER FIRST", 3000)
    } else {
        let binary = inputBox.innerHTML;
        let decimal = parseInt(binary, 2);
    
        // Convert the integer to a octal string
        let octal = decimal.toString(8).toUpperCase();
        
        outputBox.innerHTML = octal;
    }
}
