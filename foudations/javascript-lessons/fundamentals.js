function add7(num){
    return num+7;
}

function multiply(num, times){
    return num * times;
}

function capitalize(text){
    text = text.toLowerCase()
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function lastLetter(text){
    return text.charAt(text.length-1);
}

console.log(add7(10));
console.log(multiply(22, 3));
console.log(capitalize('arroz e FEIJÃO'));
console.log(lastLetter('cookie'));