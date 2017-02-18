var userData = JSON.parse(localStorage.getItem('userData'));

var resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", reset);
function reset()
{
    localStorage.clear();
    window.location.replace("toTest.html");
    console.log("reset button pressed");
}