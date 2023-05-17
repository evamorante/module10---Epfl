function convertOne (euro) {
    
    var result = euro * 1.082;
    return "the result is " + result.toString();
}

function convertTwo (celsius){

    var result = (celsius * 9/5) + 32;
    return "the result is " + result.toString();
}

function convertThree (liters){
    
    var result = liters * 33.814;
    return "the result is " + result.toString();

}

//var answerIsCorrect = true ;
var UserInput = prompt("Do you want to convert a value? (yes / No)");


while (UserInput == "yes"){
    
    var UserInputOne = prompt("Which Conversion? chf/Fahrenheit/OZ");



    if (UserInputOne == "chf") {
        var UserInputTwo = prompt("Enter a value?");
        result = convertOne (UserInputTwo);
        console.log (result);
    
    } else if (UserInputOne == "Fahrenheit") {
        var UserInputTwo = prompt("Enter a value?");
        result = convertTwo (UserInputTwo);
        console.log (result);
    
    } else if (UserInputOne == "OZ") {
        var UserInputTwo = prompt("Enter a value?");
        result = convertThree (UserInputTwo);
        console.log (result);

      

    }else {

        console.log("The conversion is not supported!");
    }
     
    
} 
