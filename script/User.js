// Class definition


// userData.weights = 10;
var userData = {};

var saveButton = document.querySelector('#save');
var runButton = document.querySelector('#run');
var metabolicRate = document.querySelector('#metabolicRate');


var heightInput = document.querySelector('#height');
var weightInput = document.querySelector('#weight');
var ageInput = document.querySelector('#age');
var genderInput = document.querySelector('#gender');
var activityLevelInput = document.querySelector('#activityLevel');


saveButton.addEventListener("click", saveInput);
runButton.addEventListener("click", run);

function run() 
{
    userData.weights = weightInput.value;
    userData.height = heightInput.value;
    userData.age = ageInput.value;
    userData.gender = genderInput.value;
    userData.activityLevel = activityLevelInput.value;

    metabolicRate.textContent = calculateCalories(userData.weights, userData.height, userData.age, userData.gender, userData.activityLevel);
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

// isReachGoal()