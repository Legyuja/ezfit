// Class definition
var userData = localStorage.getItem('userData');
if (userData != null)
    window.location.replace('progress.html');

var saveButton = document.querySelector('#save');
var runButton = document.querySelector('#run');
var resetButton = document.querySelector('#reset');
var metabolicRate = document.querySelector('#metabolicRate');


var weightInput = document.querySelector('#weight');
var heightInput = document.querySelector('#height');
var ageInput = document.querySelector('#age');
var genderInput = document.querySelector('#gender');
var activityLevelInput = document.querySelector('#activityLevel');

// For recommendations function
var goalForRecommendations = document.querySelector('#metabolicRate');

saveButton.addEventListener("click", saveInput);
runButton.addEventListener("click", run);
resetButton.addEventListener("click", reset);

<<<<<<< HEAD
function run()
=======
function reset()
>>>>>>> 99caed259538cd3d02d36e03d725889b01928d96
{
    localStorage.clear();
    userData = {};
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

    metabolicRate.textContent = calculateCalories(userData.weights, userData.height, userData.age, userData.gender, userData.activityLevel);
    determine_recommendations.textContent = determine_recommendations();
}


// saveInput()
function saveInput()
{
    localStorage.setItem('userData', JSON.stringify(userData));
}

// calculateCalories()
function calculateCalories(weights, height, age, gender, activityLevel)
{
    var multiplier;
    var bmr;

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

    bmr = (10 * weights) + (6.25 * height) - (5 * age);

    if (gender == "male")
        bmr += 5;
    else if (gender == "female")
        bmr -= 161;

    bmr = bmr * multiplier;

    console.log(Math.floor(bmr));
    return Math.floor(bmr);
}


// newWeight()

// recommendations()
function recommendations ()
        if (goalForStatus <= 1800 || goalForStatus <= goalForStatus) {
        weightGood = true;
}       else if (goalForStatus <= 1500 || goalForStatus <= 1800) {
        weightMed = true;
}       else if (goalForStatus <= 1200 || goalForStatus <= 1500) {
        weightBad = true;
}

// determine_recommendation()
function determine_recommendations()
        if (weightGood == true) {
                System.out.println("Good");
}
else if (weightMed == true) {
                System.out.println("Medium");
}
else if (weightBad == true) {
                System.out.println("Bad");
}

// isReachGoal()
