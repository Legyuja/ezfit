// Class definition
var userData = JSON.parse(localStorage.getItem('userData'));


var resetButton = document.querySelector('#reset');
var updateButton = document.querySelector('#update');
var metabolicRate = document.querySelector('#metabolicRate');
var goalWeightDisplay = document.querySelector('#goalWeight');
var activityLevelInput = document.querySelector('#activityLevel');
var newWeightInput = document.querySelector('#newWeight');
var newCaloriesDisplay = document.querySelector('#newCalories');

goalWeightDisplay.textContent = userData.goalWeight;

resetButton.addEventListener("click", reset);
updateButton.addEventListener("click", update);

function reset()
{
    localStorage.clear();
    window.location.replace("toTest.html");
    console.log("reset button pressed");
}

function update()
{
    userData.weights.push(newWeightInput.value);
    newCaloriesDisplay.textContent = newCalories();
    saveInput();
    isReachGoal();
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

// adjusts new calories with new weight and multiplier 
function recalculateCalories(newWeight, multiplier)
{
    return calculateCalories(newWeight, userData.height, userData.age, userData.gender, multiplier);
}

// newCalories()
function newCalories()
{
    var weights = userData.weights;
    var newCalories;
    //to gain weight
    if (userData.goal > 0)
    {
        //good condition
        if ((weights[weights.length - 1] - weights[weights.length - 2]) > 0)
        {
            newCalories = recalculateCalories(newWeightInput.value, userData.activityLevel);
        }

        else 
        {
            newCalories = recalculateCalories(newWeightInput.value, userData.activityLevel + 0.2);
        }
    }

    //to lose weight
    else if (userData.goal < 0)
    {
        //good condition
        if ((weights[weights.length - 1] - weights[weights.length - 2]) < 0)
        {
            newCalories = recalculateCalories(newWeightInput.value, userData.activityLevel);
        }

        else 
        {
            newCalories = recalculateCalories(newWeightInput.value, userData.activityLevel - 0.2);
        }
    }

    return newCalories;
}

// recommendations()

// isReachGoal()
function isReachGoal()
{
   
    if ((userData.goal > 0 && userData.weights[userData.weights.length - 1] >= userData.goalWeight)
        || (userData.goal < 0 && userData.weights[userData.weights.length - 1] <= userData.goalWeight))
        window.location.replace("completed.html");
}