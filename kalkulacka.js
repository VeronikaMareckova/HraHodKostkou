var number1 = Number (prompt("Zadej první číslo"));
var number2 = Number (prompt("Zadej druhé číslo"));
var znamenko = prompt("Zadej znamenéko +  -  * nebo /");

console.log(typeof(number1));
console.log(typeof(number2));
console.log(typeof(znamenko));


console.log("Zadání první číslo: "+number1);
console.log("druhý číslo: "+ number2);

if (znamenko =="+"){
    console.log(number1+number2);
}else if (znamenko =="-"){
    console.log(number1-number2);
}else if (znamenko =="*"){
    console.log(number1*number2);
}else if (znamenko =="/"&& number2!==0){
    console.log(number1/number2);
    }else if (znamenko=="/"&& number2==0){
        console.log ("V matematice ne nesmí dělit nulou.");
}else{
    console.log ("Tuto početní operaci neznám.");
}


