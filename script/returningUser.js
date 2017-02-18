// Class definition
var userData = JSON.parse(localStorage.getItem('userData'));


var resetButton = document.querySelector('#reset');
var metabolicRate = document.querySelector('#metabolicRate');

var goalWeightDisplay = document.querySelector('#goalWeight');

var activityLevelInput = document.querySelector('#activityLevel');
var newWeightInput = document.querySelector('#newWeight');

var updateButton = document.querySelector('#update');

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
    saveInput();
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

    metabolicRate = (10 * weights) + (6.25 * height) - (5 * age);

    if (gender == "male")
        metabolicRate += 5;
    else if (gender == "female")
        metabolicRate -= 161;

    metabolicRate = metabolicRate * multiplier;

    console.log(Math.floor(metabolicRate));
    return Math.floor(metabolicRate);
}


// newCalories()
// function newCalories()
// {
//     //to gain weight
//     if (userData.goal > 0)

//     //to lose weight
//     else if (userData.goal < 0)
// }

// recommendations()

// isReachGoal()