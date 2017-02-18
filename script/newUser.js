// Class definition
var userData = localStorage.getItem('userData');
if (userData != null)
    window.location.replace('progress.html');
else
    userData = {};

var saveButton = document.querySelector('#save');
var runButton = document.querySelector('#run');
var resetButton = document.querySelector('#reset');
var metabolicRate = document.querySelector('#metabolicRate');

var weightInput = document.querySelector('#weight');
var heightInput = document.querySelector('#height');
var ageInput = document.querySelector('#age');
var genderInput = document.querySelector('#gender');
var activityLevelInput = document.querySelector('#activityLevel');
var goalWeightInput = document.querySelector('#goalWeight');

saveButton.addEventListener("click", saveInput);
runButton.addEventListener("click", run);
resetButton.addEventListener("click", reset);

function reset()
{
    localStorage.removeItem(userData);
    window.location.replace(toTest.html);
    console.log("reset button pressed");
}

function run()
{
    userData.weights = [];
    userData.weights.push(weightInput.value);
    userData.height = heightInput.value;
    userData.age = ageInput.value;
    userData.gender = genderInput.value;
    userData.activityLevel = activityLevelInput.value;
    userData.goalWeight = goalWeightInput.value;
    userData.goal = userData.goalWeight - userData.weights[userData.weights.length - 1];

    metabolicRate.textContent = calculateCalories(userData.weights, userData.height, userData.age, userData.gender, userData.activityLevel);
    recommendations(); // recommendation function
    saveInput();
    drecommendations.textContent = recommendations();
    bmiOutput.textContent = "Your Body Mass Index is: " + "\"" + BMI() + "\"";
    bmiScaleOutput.textContent = bmiScale ();

}

// saveInput()
function saveInput()
{
    localStorage.setItem('userData', JSON.stringify(userData));
}

// a method to get the initial calorie
function calculateCalories(weights, height, age, gender, activityLevel)
{
    var multiplier;
    var metabolicRate;

    switch(activityLevel)
    {
        case 0:
            multiplier = 1;
            break;
        case 1:
            multiplier = 1.375;
            break;
        case 2:
            multiplier = 1.9;
            break;
        default:
            multiplier = 1;
    }

    if (userData.goal > 0)
        multiplier += 0.2;
    else if (userData.goal < 0)
        multiplier -= 0.2;

    metabolicRate = (10 * weights) + (6.25 * height) - (5 * age);

    if (gender == "male")
        metabolicRate += 5;
    else if (gender == "female")
        metabolicRate -= 161;

    metabolicRate = metabolicRate * multiplier;

    console.log(Math.floor(metabolicRate));
    return Math.floor(metabolicRate);
}

// newWeight()

// recommendations()
function recommendations() {
  var goalForStatus = calculateCalories(userData.weights, userData.height, userData.age, userData.gender, userData.activityLevel);
  //var goalLimiter = userData.goalWeight;
  var text = "";

    // FIXME: 2000 cannot be goalForStatusTest because same variable cannot be compared
    if (goalForStatus >= 1800 && goalForStatus < 2000) {
      text = "Good";
    }
    else if  (goalForStatus >= 1500) {
      text = "Medium";
    }
    else if (goalForStatus >= 1200 || goalForStatus < 1200) {
      text = "Bad";
    }

    return text;
}

// TESTED WORKING! BODY MASS INDEX ALT. FOR RECOMMENDATION FUNCTION
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

// isReachGoal()
