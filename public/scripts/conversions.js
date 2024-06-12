let conversion = "";

async function addToHistory(fdata) {
    await fetch("http://localhost:4000/store", {
        method: "POST",
        body: fdata,
        }
    )
    .then(res => {
        return res.json();
    })
    .catch(err => {
        console.log(err);
    });
}

async function toDecimal() {
    if (inputBox.innerText === "ENTER BINARY NUMBER" || inputBox.innerHTML === "PLEASE ENTER A BINARY NUMBER") {
        inputBox.innerHTML = "PLEASE ENTER A BINARY NUMBER";
        setInterval(() => inputBox.innerText = "ENTER BINARY NUMBER", 3000)
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
        conversion = "Decimal value: " + answer;
        let data = {binary: binary_number, conversion: conversion};
        
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);

        }

        await addToHistory(formData);
    }
}

async function toHexadecimal() {
    if (inputBox.innerText === "ENTER BINARY NUMBER" || inputBox.innerHTML === "PLEASE ENTER A BINARY NUMBER") {
        inputBox.innerHTML = "PLEASE ENTER A BINARY NUMBER";
        setInterval(() => inputBox.innerText = "ENTER BINARY NUMBER", 3000)
    } else {
        let binary = inputBox.innerHTML;
        let decimal = parseInt(binary, 2);
    
        // Convert the integer to a hexadecimal string
        let hexadecimal = decimal.toString(16).toUpperCase();
        
        outputBox.innerHTML = hexadecimal;
        conversion = "Hexadecimal value: " + hexadecimal;
        let data = {binary: binary, conversion: conversion};
        
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);

        }

        await addToHistory(formData);

    }
}

async function toOctal() {
    if (inputBox.innerText === "ENTER BINARY NUMBER" || inputBox.innerHTML === "PLEASE ENTER A BINARY NUMBER") {
        inputBox.innerHTML = "PLEASE ENTER A BINARY NUMBER";
        setInterval(() => inputBox.innerText = "ENTER BINARY NUMBER", 3000);
    } else {
        let binary = inputBox.innerHTML;
        let decimal = parseInt(binary, 2);
    
        // Convert the integer to a octal string
        let octal = decimal.toString(8).toUpperCase();
        
        outputBox.innerHTML = octal;
        conversion = "Octal value: " + octal;
        let data = {binary: binary, conversion: conversion};
        
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);

        }

        await addToHistory(formData);
    }
}
