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

// For recommendations function
var goalForStatus = document.querySelector('#metabolicRate');
var weightGood = 0;
var weightMed = 0;
var weightBad = 0;

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
    drecommendations.textContent = determine_recommendations();

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
function recommendations () {

    if (goalForStatus <= 1800 || goalForStatus <= goalForStatus) {
      weightGood = 1;
    }
    else if  (goalForStatus <= 1500 || goalForStatus <= 1800) {
      weightMed = 1;
    }
    else if (goalForStatus <= 1200 || goalForStatus <= 1500) {
      weightBad = 1;
    }
}

// determine_recommendation()
function determine_recommendations() {
  var text;

if (weightGood == 1) {
  text = "Your in Good state";

}
else if (weightMed == 1) {
  text = "Your in Med state";
}
else if (weightBad == 1) {
  text = "Your in Bad state";
}
return text;
}


// isReachGoal()
