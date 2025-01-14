var weight = prompt("What is your weight in kilograms?");
var height = prompt("What is your height in meters?");

function bmiCalculator (weight, height) {
    
    var bmiCalculator = Math.round(weight / Math.pow(height,2));

    if (bmiCalculator < 18.5){
        var interpretation = "Your BMI is " + bmiCalculator + ", so you are underweight.";
    }

    if (bmiCalculator >= 18.5 && bmiCalculator <= 24.9){
        interpretation = "Your BMI is " + bmiCalculator + ", so you have a normal weight.";
    }
    else if (bmiCalculator > 24.9){
        interpretation = "Your BMI is " + bmiCalculator + ", so you are overweight.";
    }
    
    return interpretation;
}

bmiCalculator(weight, height);

    