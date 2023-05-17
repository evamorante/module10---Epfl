/** 
Find at least 3 conversion formulas you want to use with your multiconverter.
Write a function for each formula.
Use the window.prompt() function to get inputs from the user as demonstrated in the Tips and Tricks subject.
Display the conversion results in the browser console.
The program should not quit as long as the user wants to continue converting values.
If the user chooses a conversion that is not supported, display that in the console.
*/

function dollarsConverter(dollars){
    return dollars*1.023;
}

function eurosConverter(euros){
    return euros*1.289;    
}


function livresConverter(livres){
    return livres*2.45;     
}



// function : ask the user wants to convert something
function askYesNo(){
    var userInput = window.prompt("Do you want to use the converter ? (yes/no) ")
    if (userInput == "yes" || "y") {
      return true;
    } else {
      quit();
    }
}
// function : ask which conversion
function askConversion() {
    var userInput = window.prompt("Which conversion ? (dollars/euros/livres) ");
    return userInput;
}

// function : ask a value
function askValue() {
    var userInput = window.prompt("Enter a value : ");
    return userInput; 
}

// Main :
// - continue while the user wants to convert values
// - check which conversion
// - Get the value 
// - Display the result


while (askYesNo()){
    var conversionType = askConversion();
    var conversionValue = askValue();
    var resultMessage = "The result is ";

    if (conversionType == "dollars"){
        resultMessage += dollarsConverter(Number(conversionValue)).toString();
    }
      else if (conversionType == "euros"){
        resultMessage += eurosConverter(Number(conversionValue)).toString();
    } else if (conversionType == "livres"){
        resultMessage += livresConverter(Number(conversionValue)).toString();
    } else {
        resultMessage = "Sorry, this currency is not available."
    }
    console.log(resultMessage);
}









//si la réponse est oui, recommencer la boucle, si la réponse est non console.log ("merci et à bientôt")











