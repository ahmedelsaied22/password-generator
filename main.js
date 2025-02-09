let inputValue = document.getElementById("input-value");
let inputRange = document.getElementById("input-range");
let spanValue = document.getElementById("span-value");

let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let Numbers = document.getElementById("Numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");

let copyIcon = document.getElementById("copy-icon");

spanValue.textContent = inputRange.value;
inputRange.addEventListener("input", () => {
    spanValue.textContent = inputRange.value;
})

let allNumbers = "0123456789";
let uppeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allSymbols = "~!@#$%^&*()";


genBtn.addEventListener("click", () => {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : ""; 
    allChars += uppercase.checked ? uppeChars : ""; 
    allChars += symbols.checked ? allSymbols : ""; 
    allChars += Numbers.checked ? allNumbers : ""; 
    

    let i = 1;
    while(i<= inputRange.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length ));
        i++;
    }
    inputValue.value = genPassword;
});

copyIcon.classList  = "fa-regular fa-copy";
copyIcon.addEventListener("click", () => {
    if(inputValue.value != "" || inputValue.value.length >= 1){
        navigator.clipboard.writeText(inputValue.value);
        copyIcon.classList = "fa-solid fa-check";
        copyIcon.title = "Password Copied";
    } else{
        throw new Error("There is no Text to be copied");
    }

    setTimeout(() => {
        copyIcon.classList = "fa-regular fa-copy";
        copyIcon.title = "";
    }, 3000);
})