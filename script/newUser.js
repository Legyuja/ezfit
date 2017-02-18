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
function recommendations() {
  var goalForStatusTest = calculateCalories(userData.weights, userData.height, userData.age, userData.gender, userData.activityLevel);
  var text;

    if (goalForStatusTest >= 1800 && goalForStatusTest < 2000) {
      text = "Good";
    }
    else if  (goalForStatusTest >= 1500) {
      text = "Medium";
    }
    else if (goalForStatusTest >= 1200 || goalForStatusTest < 1200) {
      text = "Bad";
    }

    return text;
}

// isReachGoal()
