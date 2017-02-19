var userData = JSON.parse(localStorage.getItem('userData'));

var updateButton = document.querySelector("#update");
var statusDisplay = document.querySelector("#status");

  var goalForStatus = calculateCalories(userData.weights, userData.height, userData.age, userData.gender, userData.activityLevel);
  var goalWeight = userData.goalWeight;
  var loseOrGainFactor = userData.goal;
  var weights = userData.weights;
  var currentWeight = weights[weights.length - 1];
  var previousWeight = weights[weights.length - 2];
  var texttodisplay = "";

updateButton.addEventListener("click", giveRecommendations)

function giveRecommendations()
{
  recommendationsBeta();
}


    // FIXME: In progress comparison currentWeight - Goal weight
function recommendationsBeta() {
    if (loseOrGainFactor > 0) { //gaining weight
        if ((currentWeight - previousWeight) > 0) {
            texttodisplay = "Keep it up! Your almost reaching your goal.";
        }
        else {
            texttodisplay = "You need to work on your goal.";
        }
    }
    else if (loseOrGainFactor < 0) { // losing weight 
       if ((currentWeight - previousWeight) < 0) {
           texttodisplay = "Keep it up! Your almost reaching your goal.";
       }
       else {
               texttodisplay = "You need to work on your goal.";
       }
    }

    statusDisplay.textContent = texttodisplay;
}

// FUTURE: BODY MASS INDEX ALTERNATIVE FOR RECOMMENDATION FUNCTION
function BMI() {
  var height = userData.height;
  var weight = userData.weights;

  // Convert height to centimeters to work with formula below
  height = height * 30.48; // feet to centimeters

  // Convert weight from kilograms to pounds to work with formula below
  weight = weight / 2.20462; // lbs. to kg

  return ((weight) / Math.pow((height/100), 2));

}

// Source: https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/
function bmiScale () {
  var bmiValue = BMI();
  var text = "";
  if (bmiValue < 18.5) {
      text = "Your BMI scale is considered underweight";
  }
  else if (bmiValue <= 24.9) {
    text = "Your BMI scale is considered normal or healthy weight";
  }
  else if (bmiValue <= 25.0 || bmiValue <= 29.9) {
    text = "Your BMI scale is considered overweight";
  }
  else if (bmiValue >= 30.0) {
    text = "Your BMI scale is considered obese";
  }
  return text;
}
