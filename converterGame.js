/** 
Find at least 3 conversion formulas you want to use with your multiconverter.
Write a function for each formula.
Use the window.prompt() function to get inputs from the user as demonstrated in the Tips and Tricks subject.
Display the conversion results in the browser console.
The program should not quit as long as the user wants to continue converting values.
If the user chooses a conversion that is not supported, display that in the console.
*/
var asking = prompt("Enter the currency you want to be changed : ");
var userInput = asking; 
var converting = prompt("Enter the amount you would to be changed : ");
var valeur = Number(converting);



function dollarsConverter(){
    var converting = prompt("Enter the amount you would to be changed : ");
    var swissFrancs = valeur*1.023;
    var result = valeur + " dollars are " + swissFrancs + " swiss francs.";
    var message = converting + result;
    return message ;
}
dollarsConverter();

function eurosConverter(){
    
    var swissFrancs = valeur*1.289;
    var message = valeur + " euros are " + swissFrancs + " swiss francs.";
    return message;
}
eurosConverter();

function livresConverter(){
    var swissFrancs = valeur*2.45;
    var message = valeur + " livres are " + swissFrancs + " swiss francs.";
    return message;
}
livresConverter();

if (userInput == "dollars"){
console.log (dollarsConverter);
}

else if (userInput == "euros"){
console.log(eurosConverter());
}

else if (userInput == "livres"){
console.log(livresConverter());
}   

else{
console.log("This currency is not available");
}


var stopping = prompt("Do you need an other change ? : ")
var yesNoAnswer = stopping;
console.log(stopping);

//si la réponse est oui, recommencer la boucle, si la réponse est non console.log ("merci et à bientôt")











