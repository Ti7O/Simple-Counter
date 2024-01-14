const DecreaseButton = document.getElementById("decreaseNumber");
const ResetButton = document.getElementById("resetNumber");
const IncreaseButton = document.getElementById("increaseNumber");
const countLabel = document.getElementById("countLabel")
let count = 0;

IncreaseButton.onclick = function(){
    count ++;
    countLabel.textContent = count
}

ResetButton.onclick = function(){
    count = 0
    countLabel.textContent = count
}
DecreaseButton.onclick = function(){
    count --;
    countLabel.textContent = count
}